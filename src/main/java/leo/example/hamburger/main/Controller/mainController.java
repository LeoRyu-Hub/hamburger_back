package leo.example.hamburger.main.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import leo.example.hamburger.main.Service.mainService;
import leo.example.hamburger.vo.burger.burgerVO;
import leo.example.hamburger.vo.common.FileVO;

@Controller
public class mainController {
    
    @Autowired
	mainService service;

    @RequestMapping("/burger/reg")
	@ResponseBody
    public boolean save(@ModelAttribute burgerVO vo) throws Exception{
        
        int cnt = service.insertBurger(vo);

        if(cnt>0){
            return true;
        }else{
            return false;
        }
    }
}
