package com.example.Facebook_Clone_Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {
    @Id
    @GeneratedValue(generator = "uuid")
    @Column(columnDefinition = "VARCHAR(36)")
    private String id;

    @Column(unique = true)
    private String userName;
    private String password;
    private String gender;

    @Column(unique = true)

    private String email;
    private String firstName;
    private String lastName;
    private String phone;

    @Lob
    private String img;
    private String profilePic;
    private String address;
    private String timeStamp;

    @ManyToMany
    private List<UserEntity> friends;

    @OneToMany
    private List<FriendRequestEntity> friendRequests;

    @ManyToMany
    private List<FriendRequestEntity> sentFriendRequests;

}
