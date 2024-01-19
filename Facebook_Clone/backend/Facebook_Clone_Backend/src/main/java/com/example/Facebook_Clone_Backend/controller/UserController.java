package com.example.Facebook_Clone_Backend.controller;

import com.example.Facebook_Clone_Backend.entity.UserEntity;
import com.example.Facebook_Clone_Backend.model.User;
import com.example.Facebook_Clone_Backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Map;

@RestController
@RequestMapping("api/v1/user")
@CrossOrigin("http://localhost:3000/")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<String> addUser(@RequestBody User user) throws Exception{
        System.out.println(user);
        String userName = user.getUserName();
        String email = user.getEmail();
        String img = user.getImg();
        String profilePic = user.getProfilePic();
        String timeStamp = new Date().toString();
        User newUser = userService.getUser(email);
        if(newUser == null){
            newUser = User.builder()
                    .userName(userName)
                    .email(email)
                    .img(img)
                    .profilePic(profilePic)
                    .timeStamp(timeStamp)
                    .build();
            userService.addUser(newUser);
            return new ResponseEntity<>("User added successfully", HttpStatus.CREATED);
        }
        else{
            return new ResponseEntity<>("User already exists", HttpStatus.CONFLICT);
        }

    }
}
