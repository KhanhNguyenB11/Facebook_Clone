package com.example.Facebook_Clone_Backend.repository;

import com.example.Facebook_Clone_Backend.entity.CommentEntity;
import com.example.Facebook_Clone_Backend.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentEntityRepository extends JpaRepository<CommentEntity,String> {
    List<CommentEntity> findByPost(PostEntity post);
}
