package com.example.Facebook_Clone_Backend.service;

import com.example.Facebook_Clone_Backend.model.User;

public interface UserService {
    User addUser(User user);
    User getUser(String email);
}
