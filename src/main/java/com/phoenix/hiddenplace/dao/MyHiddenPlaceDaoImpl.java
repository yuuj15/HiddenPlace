package com.phoenix.hiddenplace.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.phoenix.hiddenplace.domain.MyHiddenPlace;
import com.phoenix.hiddenplace.domain.PageMaker;
import com.phoenix.hiddenplace.domain.Theme;

@Repository
public class MyHiddenPlaceDaoImpl implements MyHiddenPlaceDao {


	@Inject
	private SqlSession sqlSession;
	
	private static String namespace = "com.phoenix.hiddenplace.mapper.MyHiddenPlaceMapper";
	
	@Override
	public void insert(MyHiddenPlace myHiddenPlace) throws Exception {
		sqlSession.insert(namespace + ".insert", myHiddenPlace);
	}

	@Override
	public MyHiddenPlace selectOne(int num) throws Exception {// 내알못 조회
		
		return sqlSession.selectOne(namespace + ".selectOne", num);
		
	}
	
	@Override
	public void updateReadCount(int num) throws Exception { // 내알못 조회수 증가
		
		sqlSession.selectOne(namespace + ".readCountPlus", num);
		
	}
	
	@Override
	public List<MyHiddenPlace> list(PageMaker pageMaker) throws Exception {
		int page = pageMaker.getPage();
		if(page <= 0) {
			page = 1;
		}
		
		page = (page - 1) * 12;
		pageMaker.setPage(page);
		
		return sqlSession.selectList(namespace + ".list" , pageMaker);
	}

	@Override
	public int listCount(PageMaker pageMaker) {
		
		return sqlSession.selectOne(namespace + ".listCount", pageMaker);
	}

	@Override
	public List<MyHiddenPlace> bestMHP() throws Exception {
		
		return sqlSession.selectList(namespace + ".bestMHP");
		
	}

	@Override
	public List<Theme> themeList() throws Exception {
		
		return sqlSession.selectList(namespace + ".themeList");
		
	}
	
	@Override
	public List<MyHiddenPlace> bookmarkAll(String userId) throws Exception {
		
		return sqlSession.selectList(namespace + ".bookmarkAll", userId);
		
	}
	
	@Override
	public void delete(int num) throws Exception { //내알못 삭제
		
		 sqlSession.delete(namespace + ".delete", num);
		 
	}

	@Override
	public Integer upCountCheck(MyHiddenPlace myHiddenPlace) throws Exception {//추천수 받아오기 
		
		return sqlSession.selectOne(namespace + ".upCountCheck", myHiddenPlace);

	}

	@Override
	public void upCountInsert(MyHiddenPlace myHiddenPlace) throws Exception { //추천수 증가를 위한 정보 저장
		
		sqlSession.insert(namespace + ".upCountInsert", myHiddenPlace);
		
	}

	@Override
	public void upCount(MyHiddenPlace myHiddenPlace) throws Exception { //추천수 증가
		
		sqlSession.update(namespace + ".upCount", myHiddenPlace);
		
	}
	
   @Override
    public void updateMHP(MyHiddenPlace myHiddenPlace) throws Exception { //내알못 수정
	   
       sqlSession.update(namespace + ".update", myHiddenPlace);
       
    }

}