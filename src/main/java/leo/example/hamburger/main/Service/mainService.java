package leo.example.hamburger.main.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import leo.example.hamburger.main.Dao.mainDao;
import leo.example.hamburger.vo.burger.burgerVO;

@Service
public class mainService {

    @Autowired
    mainDao dao;

    public int insertBurger(burgerVO vo) throws Exception{
        return dao.insertBurger(vo);
    }

    public List<burgerVO> selectBurger(burgerVO vo) throws Exception{
        return dao.selectBurger(vo);
    }
    
}
