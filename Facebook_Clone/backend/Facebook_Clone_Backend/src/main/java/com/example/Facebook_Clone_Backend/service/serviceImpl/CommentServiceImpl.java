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

    @Override
    public List<Comment> getCommentsByPostId(String postId) {
        PostEntity post = postEntityRepository.findById(postId).get();
        List<CommentEntity> commentEntities = commentEntityRepository.findByPost(post);
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
                            .build()).toList();
            return comments;
        }
        else
            return null;

    }
}
