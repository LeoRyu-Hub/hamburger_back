package leo.example.hamburger.main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import leo.example.hamburger.common.service.FileService;
import leo.example.hamburger.main.Service.mainService;
import leo.example.hamburger.util.Constant;
import leo.example.hamburger.vo.burger.burgerVO;
import leo.example.hamburger.vo.common.FileVO;

@Controller
public class mainController {
    
    @Autowired
	mainService service;
    @Autowired
    FileService fileservice;

    //햄버거 등록
    @RequestMapping("/burger/reg")
	@ResponseBody
    public boolean save(@ModelAttribute burgerVO vo, @RequestParam("burgerImg") MultipartFile burgerImg) throws Exception{

        if (vo.getBurgerImg()!=null){
            FileVO fvo = new FileVO();
            fvo.setFile(vo.getBurgerImg());
            fvo.setOriginPath(Constant.UPLOAD_PATH);
            fvo = fileservice.createFile(fvo);
            vo.setBurgerUrl(Constant.IMAGE_PATH+"/"+fvo.getFileNm());
        }
        
        int cnt = service.insertBurger(vo);

        if(cnt>0){
            return true;
        }else{
            return false;
        }
    }

    //햄버거 선택택
    @RequestMapping("/burger/choice")
	@ResponseBody
    public burgerVO selectBurger(@ModelAttribute burgerVO vo) throws Exception{
        
        List<burgerVO> list = service.selectBurger(vo);

        burgerVO fvo = new burgerVO();
        fvo.setBurgerList(list);

        return fvo;
    }
}
