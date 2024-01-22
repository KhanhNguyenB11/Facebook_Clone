package com.example.Facebook_Clone_Backend.service;

import com.example.Facebook_Clone_Backend.model.Post;
import com.example.Facebook_Clone_Backend.repository.PostEntityRepository;

import java.util.List;

public interface PostService {

    Post addPost(Post post) throws Exception;

    List<Post> getAllPost(String userEmail);

    void likePost(String postId,String userId);
    void unlikePost(String postId,String userId);
}
