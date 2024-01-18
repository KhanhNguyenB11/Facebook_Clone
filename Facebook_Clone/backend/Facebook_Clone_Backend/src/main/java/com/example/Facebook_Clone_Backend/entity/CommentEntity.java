package com.example.Facebook_Clone_Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "comments")
public class CommentEntity {
    @Id
    @GeneratedValue(generator = "uuid")
    private String id;
    private String content;

    @ManyToOne(cascade = CascadeType.ALL)
    private UserEntity user_comment;

    private int likes;

    @ManyToOne(cascade = CascadeType.ALL)
    private PostEntity post;
}
