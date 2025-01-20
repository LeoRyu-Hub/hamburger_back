package leo.example.hamburger.test.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import leo.example.hamburger.test.Service.testService;
import leo.example.hamburger.vo.test.testVo;
import java.util.List;


@Controller
public class testController {
    
    @Autowired
	testService service;

    @RequestMapping("/test")
	@ResponseBody
	public List<testVo> test(@ModelAttribute testVo vo) throws Exception{
        return service.selectManager();
    } 

}
