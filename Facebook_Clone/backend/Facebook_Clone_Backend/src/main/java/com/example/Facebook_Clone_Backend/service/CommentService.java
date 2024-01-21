package com.example.Facebook_Clone_Backend.service;

import com.example.Facebook_Clone_Backend.model.Comment;

import java.util.List;

public interface CommentService {
    Comment addComment(Comment comment);
    List<Comment> getCommentsByPostId(String postId);
}
