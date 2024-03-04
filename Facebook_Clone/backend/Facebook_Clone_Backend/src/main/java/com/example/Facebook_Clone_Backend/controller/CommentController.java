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
    public List<Comment> getComments(@RequestParam String postId,@RequestParam String sort, @RequestParam int current,@RequestParam String userEmail){
        List<Comment> comments = commentService.getCommentsByPostId(postId,sort,current,userEmail);
        return comments;
    }
    @PostMapping
    public Comment addComment(@RequestBody Comment comment){
        return commentService.addComment(comment);

    }
    @PostMapping("/{commentId}/like")
    public Comment likeComment(@PathVariable String commentId,@RequestParam String userEmail){
        return commentService.likeComment(commentId,userEmail);
    }

    @PostMapping("/{commentId}/unlike")
    public Comment unlikeComment(@PathVariable String commentId,@RequestParam String userEmail){
        return commentService.unlikeComment(commentId,userEmail);
    }
}
