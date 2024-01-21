package com.example.Facebook_Clone_Backend.controller;

import com.example.Facebook_Clone_Backend.model.Comment;
import com.example.Facebook_Clone_Backend.service.CommentService;
import com.example.Facebook_Clone_Backend.service.serviceImpl.CommentServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/comment")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public List<Comment> getComments(@RequestParam String postId){
        List<Comment> comments = commentService.getCommentsByPostId(postId);
        return comments;
    }
    @PostMapping
    public Comment addComment(@RequestBody Comment comment){
        return commentService.addComment(comment);

    }
}
