package com.example.Facebook_Clone_Backend.model;

import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    private  String id;
    private  String post;
    private  String name;
    private  String email;
    private String img;
    private  String profilePic;
    private String timeStamp;
    private String file;
}
