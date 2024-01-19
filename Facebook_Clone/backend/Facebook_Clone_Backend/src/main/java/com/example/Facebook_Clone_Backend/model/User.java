package com.example.Facebook_Clone_Backend.model;

import com.example.Facebook_Clone_Backend.entity.FriendRequestEntity;
//import com.example.Facebook_Clone_Backend.entity.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    private String id;
    private String userName;

    private String email;

    private String img;
    private String profilePic;

    private String timeStamp;

    private List<User> friends;
}
