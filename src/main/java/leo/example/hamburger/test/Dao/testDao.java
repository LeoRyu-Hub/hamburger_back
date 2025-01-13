package leo.example.hamburger.test.Dao;

import org.springframework.stereotype.Repository;
import leo.example.hamburger.vo.test.testVo;
import java.util.List;

@Repository
public interface testDao {
    public List<testVo> selectManager() throws Exception;
}
