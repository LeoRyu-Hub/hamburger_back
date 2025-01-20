package leo.example.hamburger.main.Dao;

import org.springframework.stereotype.Repository;

import leo.example.hamburger.vo.burger.burgerVO;

@Repository
public interface mainDao {

    public int insertBurger(burgerVO vo) throws Exception;

}