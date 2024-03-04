package com.example.Facebook_Clone_Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "comments")
public class CommentEntity {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid",strategy = "uuid2")
    private String id;
    private String content;

    @ManyToOne(cascade = CascadeType.ALL)
    private UserEntity user_comment;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<UserEntity> likes;

    @ManyToOne(cascade = CascadeType.ALL)
    private PostEntity post;

    private String timeStamp;

    public int getLikeCount(){
        return this.likes != null ? likes.size() : 0;
    }

}
