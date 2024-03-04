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

    @Column(unique = true)
    private String email;

    @Lob
    private String img;
    private String profilePic;
    private String timeStamp;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<UserEntity> friends;


}
