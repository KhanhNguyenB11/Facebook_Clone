package com.example.Facebook_Clone_Backend.model;

import com.example.Facebook_Clone_Backend.entity.PostEntity;
import com.example.Facebook_Clone_Backend.entity.UserEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    private String id;
    private String content;

    private String userName;

    private int likes;

    private String postId;
    private String timeStamp;
    private String userEmail;
    private String profilePic;
}
