package com.example.Facebook_Clone_Backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FriendRequestEntity {
    @Id
    @GeneratedValue(generator = "uuid")
    @Column(columnDefinition = "VARCHAR(36)")
    private String id;
    @ManyToOne
    @JoinColumn(name = "request_sender_id")
    private UserEntity requestSender;
    @ManyToOne
    @JoinColumn(name = "request_receiver_id")
    private UserEntity requestReceiver;
    private String status;
}
