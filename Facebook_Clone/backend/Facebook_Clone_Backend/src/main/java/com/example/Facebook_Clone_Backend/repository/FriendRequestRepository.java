package com.example.Facebook_Clone_Backend.repository;

import com.example.Facebook_Clone_Backend.entity.FriendRequestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FriendRequestRepository extends JpaRepository<FriendRequestEntity,String> {
}
