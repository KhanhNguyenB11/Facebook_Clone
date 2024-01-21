package com.example.Facebook_Clone_Backend.service.serviceImpl;

import com.example.Facebook_Clone_Backend.entity.PostEntity;
import com.example.Facebook_Clone_Backend.entity.UserEntity;
import com.example.Facebook_Clone_Backend.model.Post;
import com.example.Facebook_Clone_Backend.model.User;
import com.example.Facebook_Clone_Backend.repository.PostEntityRepository;
import com.example.Facebook_Clone_Backend.service.PostService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {
private final PostEntityRepository postEntityRepository;

    public PostServiceImpl(PostEntityRepository postEntityRepository) {
        this.postEntityRepository = postEntityRepository;
    }

    @Override
    public Post addPost(Post post) throws Exception {
        try {
            PostEntity postEntity = new PostEntity();
            BeanUtils.copyProperties(post,postEntity);
            if(post.getFile() != null && !post.getFile().equalsIgnoreCase("null")){
                postEntity.setImg(post.getFile());
            }
            else{
                postEntity.setImg(null);
            }
            postEntity = postEntityRepository.save(postEntity);
            post.setId(postEntity.getId());
            post.setFile(null);
            post.setImg(postEntity.getImg());
        }
        catch (Exception e){
            throw new Exception("Could not save Post "+ e);
        }
        return post;
    }

    @Override
    public List<Post> getAllPost() {
        List<PostEntity> postEntities = postEntityRepository.findAll();
        List<Post> postList = new ArrayList<>();
        postList = postEntities.stream()
                .map(postEntity ->
            Post.builder()
                    .id(postEntity.getId())
                    .post(postEntity.getPost())
                    .img(postEntity.getImg())
                    .timeStamp(postEntity.getTimeStamp())
                    .user(postEntity.getUser())
                    .comments(null)
                    .commentCount(postEntity.getCommentCount())
                    .build())
                .collect(Collectors.toList());
                return postList;

    }

}
