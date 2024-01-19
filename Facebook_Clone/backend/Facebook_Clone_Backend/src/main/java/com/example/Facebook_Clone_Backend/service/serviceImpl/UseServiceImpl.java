package com.example.Facebook_Clone_Backend.service.serviceImpl;

import com.example.Facebook_Clone_Backend.entity.UserEntity;
import com.example.Facebook_Clone_Backend.model.User;
import com.example.Facebook_Clone_Backend.repository.UserEntityRepository;
import com.example.Facebook_Clone_Backend.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class UseServiceImpl implements UserService {
    private final UserEntityRepository userEntityRepository;

    public UseServiceImpl(UserEntityRepository userEntityRepository) {
        this.userEntityRepository = userEntityRepository;
    }

    @Override
    public User addUser(User user) {
        try {
            UserEntity userEntity = new UserEntity();
            BeanUtils.copyProperties(user, userEntity);
            userEntity = userEntityRepository.save(userEntity);
        } catch (Exception e) {
            throw new RuntimeException("Could not save User " + e);
        }
        return user;
    }

    @Override
    public User getUser(String email) {
        try {
            UserEntity userEntity = userEntityRepository.findByEmail(email);
            if(userEntity != null) {
                User user = new User();
                BeanUtils.copyProperties(userEntity, user);
                return user;
            }
            else
                return null;
        } catch (Exception e) {
            throw new RuntimeException("Could not get User " + e);

        }
    }
}
