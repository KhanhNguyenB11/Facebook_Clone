package com.example.Facebook_Clone_Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import java.util.List;

@Data
@Entity
@Table(name = "posts")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostEntity {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid",strategy = "uuid2")
    private  String id;
    @Lob
    private  String post;
    @Lob
    private String img;

    private String timeStamp;

    // Updated field to store the number of comments
    @Transient
    private int commentCount;

    @Transient
    private int likeCount;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "post")
    private List<CommentEntity> comments;

    @ManyToOne(fetch = FetchType.EAGER)
    private UserEntity user;

    @ManyToMany
    private List<UserEntity> userLiked;

    public  int getCommentCount() {
        return this.comments != null ? this.comments.size() : 0;
    }

    public int getLikeCount() {
        return this.userLiked != null ? this.userLiked.size() : 0;
    }
}
