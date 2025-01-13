package leo.example.hamburger.test.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import leo.example.hamburger.test.Dao.testDao;
import leo.example.hamburger.vo.test.testVo;

@Service
public class testService {

    @Autowired
	testDao dao;

    public List<testVo> selectManager() throws Exception{
        return dao.selectManager();
    }
    
}
