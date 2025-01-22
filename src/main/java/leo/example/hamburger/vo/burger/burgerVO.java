package leo.example.hamburger.vo.burger;

import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class burgerVO {

    @JsonIgnore
    private MultipartFile burgerImg;

    private String burgerUrl;
    
    private List<burgerVO> burgerList;
    private String burgerName;
    private String brandName;
    private String onion;
    private String lettuce;
    private String pickle;
    private String cheese;
    private String tomato;
    private String patty;
    private String sauce;

}
