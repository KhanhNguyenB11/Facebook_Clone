package com.example.Facebook_Clone_Backend.controller;

import com.example.Facebook_Clone_Backend.entity.UserEntity;
import com.example.Facebook_Clone_Backend.model.Post;
import com.example.Facebook_Clone_Backend.model.User;
import com.example.Facebook_Clone_Backend.service.PostService;
import com.example.Facebook_Clone_Backend.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @PostMapping("/{postId}/like")
    public ResponseEntity<String> likePost(@PathVariable String postId, @RequestParam String userEmail) throws Exception{
        try {
            postService.likePost(postId, userEmail);
            return ResponseEntity.ok("Post liked successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error liking post.");
        }
    }
    @PostMapping("/{postId}/unlike")
    public ResponseEntity<String> unlikePost(@PathVariable String postId, @RequestParam String userEmail) throws Exception{
        try {
            postService.unlikePost(postId, userEmail);
            return ResponseEntity.ok("Post unliked successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error unliking post.");
        }
    }
    @PostMapping
    public Post addPost(@RequestParam Map<String,String> requestParam) throws Exception {
        String strPost = requestParam.get("post");
        String email = requestParam.get("email");
        String file = requestParam.get("file");
        String timeStamp = requestParam.get("timeStamp");
        User user = userService.getUser(email);
        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(user,userEntity);
        Post post = Post.builder()
                .post(strPost)
                .user(userEntity)
                .file(file)
                .timeStamp(timeStamp)
                .build();
        post = postService.addPost(post);
        return post;

    }
    @GetMapping
    public List<Post> getAllPost(@RequestParam String userEmail){
        return postService.getAllPost(userEmail);
    }
}
