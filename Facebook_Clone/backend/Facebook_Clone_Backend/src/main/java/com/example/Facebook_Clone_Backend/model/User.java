package com.example.Facebook_Clone_Backend.model;

import com.example.Facebook_Clone_Backend.entity.FriendRequestEntity;
import com.example.Facebook_Clone_Backend.entity.UserEntity;
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
    private String password;
    private String gender;
    private String email;
    private String firstName;
    private String lastName;
    private String phone;

    private String img;
    private String profilePic;
    private String address;

    private List<UserEntity> friends;

    private List<FriendRequestEntity> friendRequests;

    private List<FriendRequestEntity> sentFriendRequests;
}
