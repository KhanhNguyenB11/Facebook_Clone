package com.example.Facebook_Clone_Backend.service.serviceImpl;

import com.example.Facebook_Clone_Backend.entity.CommentEntity;
import com.example.Facebook_Clone_Backend.entity.PostEntity;
import com.example.Facebook_Clone_Backend.entity.UserEntity;
import com.example.Facebook_Clone_Backend.model.Comment;
import com.example.Facebook_Clone_Backend.repository.CommentEntityRepository;
import com.example.Facebook_Clone_Backend.repository.PostEntityRepository;
import com.example.Facebook_Clone_Backend.repository.UserEntityRepository;
import com.example.Facebook_Clone_Backend.service.CommentService;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    private final CommentEntityRepository commentEntityRepository;
    private final PostEntityRepository postEntityRepository;
    private final UserEntityRepository  userEntityRepository;

    public CommentServiceImpl(CommentEntityRepository commentEntityRepository, PostEntityRepository postEntityRepository, UserEntityRepository userEntityRepository) {
        this.commentEntityRepository = commentEntityRepository;
        this.postEntityRepository = postEntityRepository;
        this.userEntityRepository = userEntityRepository;
    }

    @Override
    public Comment addComment(Comment comment) {
        try{
            CommentEntity commentEntity = new CommentEntity();
            //set User via email
            UserEntity user = userEntityRepository.findByEmail(comment.getUserEmail());
            commentEntity.setUser_comment(user);
            //set Post via postId (postId is a foreign key in CommentEntity)
            PostEntity post = postEntityRepository.findById(comment.getPostId()).get();
            commentEntity.setPost(post);
            BeanUtils.copyProperties(comment, commentEntity);
            System.out.println(commentEntity.getId());
            commentEntityRepository.save(commentEntity);
            return comment;
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    public boolean isUserLikedComment(List<UserEntity> userLiked, String userEmail){
        for(UserEntity user: userLiked){
            if(user.getEmail().equalsIgnoreCase(userEmail)){
                return true;
            }
        }
        return false;
    }
    @Override
    public List<Comment> getCommentsByPostId(String postId,String sort, int current,String userEmail) {
        int pageSize = 5;
        PostEntity post = postEntityRepository.findById(postId).get();
        //Sort by timeStamp, will implement others sorting methods
        Sort sortByTimestamp = Sort.by(Sort.Direction.DESC, "timeStamp");
        Pageable pageable = PageRequest.of(current, pageSize, sortByTimestamp);
        List<CommentEntity> commentEntities = commentEntityRepository.findByPost(post,pageable);
        if(commentEntities != null){
            List<Comment> comments = new ArrayList<>();
            comments = commentEntities.stream().map(commentEntity ->
                    Comment.builder()
                            .id(commentEntity.getId())
                            .content(commentEntity.getContent())
                            .timeStamp(commentEntity.getTimeStamp())
                            .userEmail(commentEntity.getUser_comment().getEmail())
                            .userName(commentEntity.getUser_comment().getUserName())
                            .postId(commentEntity.getPost().getId())
                            .profilePic(commentEntity.getUser_comment().getImg())
                            .likedCount(commentEntity.getLikeCount())
                            .userLiked(isUserLikedComment(commentEntity.getLikes(),userEmail))
                            .build()).toList();
            return comments;
        }
        else
            return null;

    }

    @Override
    public Comment likeComment(String commentId,String userEmail) {
        CommentEntity commentEntity = commentEntityRepository.findById(commentId).orElse(null);
        UserEntity userEntity = userEntityRepository.findByEmail(userEmail);
        if(commentEntity != null && userEntity != null){
            commentEntity.getLikes().add(userEntity);
            commentEntityRepository.save(commentEntity);
            Comment comment = new Comment();
            BeanUtils.copyProperties(commentEntity,comment);
            return  comment;
        }

        return null;
    }
    @Override
    public Comment unlikeComment(String commentId, String userEmail) {
        CommentEntity commentEntity = commentEntityRepository.findById(commentId).orElse(null);
        UserEntity userEntity = userEntityRepository.findByEmail(userEmail);

        if (commentEntity != null && userEntity != null) {
            // Remove the user from the list of likes if the user has liked the comment
            if (commentEntity.getLikes().contains(userEntity)) {
                commentEntity.getLikes().remove(userEntity);
                commentEntityRepository.save(commentEntity);

                // Optionally, you can return the updated comment entity or any other indication of success
                Comment comment = new Comment();
                BeanUtils.copyProperties(commentEntity, comment);
                return comment;
            }
        }
        // Return null or handle other cases where unliking is not possible
        return null;
    }

}
