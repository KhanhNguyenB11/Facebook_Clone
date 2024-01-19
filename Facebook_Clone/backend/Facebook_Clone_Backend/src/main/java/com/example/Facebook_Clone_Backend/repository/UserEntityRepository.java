package com.example.Facebook_Clone_Backend.repository;

import com.example.Facebook_Clone_Backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserEntityRepository extends JpaRepository<UserEntity,String> {
    UserEntity findByEmail(String email);
}
