package com.phoenix.hiddenplace.dao;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.phoenix.hiddenplace.domain.Login;
import com.phoenix.hiddenplace.domain.User;

@Repository
public class UserDaoImpl implements UserDao {

	@Inject
	private SqlSession session;

	private static String namespace = "com.phoenix.hiddenplace.mapper.UserMapper";

	@Override
	public void create(User user) throws Exception {

		session.insert(namespace + ".create", user);

	}

	@Override
	public String nicknameCheck(String nickname) throws Exception {

		return session.selectOne(namespace + ".nicknameCheck", nickname);

	}

	public String emailCheck(String email) throws Exception {

		return session.selectOne(namespace + ".emailCheck", email);

	}

	@Override
	public void pwUpdate(User user) throws Exception {

		session.update(namespace + ".pwUpdate", user);

	}

	@Override
	public User login(Login login) throws Exception {

		return session.selectOne(namespace + ".login", login);

	}

//	@Override
//	public User readMyPage(String userId) throws Exception {
//		return session.selectOne(namespace + ".read", userId);
//	}
//
//	@Override
//	public void update(User user) throws Exception {
//
//		session.update(namespace + ".update", user);
//
//	}
//
//	@Override
//	public void delete(String userPw) throws Exception {
//
//		session.delete(namespace + ".delete", userPw);
//
//	}
}
