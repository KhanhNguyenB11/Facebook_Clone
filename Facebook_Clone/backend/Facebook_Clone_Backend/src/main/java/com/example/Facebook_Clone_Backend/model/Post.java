package com.example.Facebook_Clone_Backend.model;

import com.example.Facebook_Clone_Backend.entity.CommentEntity;
import com.example.Facebook_Clone_Backend.entity.UserEntity;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    private  String id;
    private  String post;

    private String img;

    private String timeStamp;
    private String file;
    private UserEntity user;
    private List<Comment> comments;
    private int commentCount;
}
