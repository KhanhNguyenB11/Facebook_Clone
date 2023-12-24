package com.example.Facebook_Clone_Backend.controller;

import com.example.Facebook_Clone_Backend.model.Post;
import com.example.Facebook_Clone_Backend.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/post")
public class PostController {
    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }
    @PostMapping
    public Post addPost(@RequestParam Map<String,String> requestParam) throws Exception {
        String strPost = requestParam.get("post");
        String email = requestParam.get("email");
        String name = requestParam.get("name");
        String file = requestParam.get("file");
        String profilePic = requestParam.get("profilePic");
        Post post = Post.builder()
                .post(strPost)
                .email(email)
                .name(name)
                .file(file)
                .profilePic(profilePic)
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
