package com.example.Facebook_Clone_Backend.controller;

import com.example.Facebook_Clone_Backend.entity.UserEntity;
import com.example.Facebook_Clone_Backend.model.Post;
import com.example.Facebook_Clone_Backend.model.User;
import com.example.Facebook_Clone_Backend.service.PostService;
import com.example.Facebook_Clone_Backend.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/post")
public class PostController {
    private final PostService postService;
    private final UserService userService;

    public PostController(PostService postService, UserService userService) {
        this.postService = postService;
        this.userService = userService;
    }
    @PostMapping
    public Post addPost(@RequestParam Map<String,String> requestParam) throws Exception {
        String strPost = requestParam.get("post");
        String email = requestParam.get("email");
        String file = requestParam.get("file");
        User user = userService.getUser(email);
        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(user,userEntity);
        Post post = Post.builder()
                .post(strPost)
                .user(userEntity)
                .file(file)
                .timeStamp(new Date().toString())
                .build();

        post = postService.addPost(post);
        return post;

    }
    @GetMapping
    public List<Post> getAllPost(){
        return postService.getAllPost();
    }
}
