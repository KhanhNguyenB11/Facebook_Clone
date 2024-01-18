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
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(generator = "uuid")
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


    @OneToMany(mappedBy = "receiver")
    private List<FriendRequestEntity> receivedFriendRequests ;

    @OneToMany(mappedBy = "sender")
    private List<FriendRequestEntity> sentFriendRequests;

    @OneToMany(mappedBy = "user_comment")
    private List<CommentEntity> commentsList;

}
