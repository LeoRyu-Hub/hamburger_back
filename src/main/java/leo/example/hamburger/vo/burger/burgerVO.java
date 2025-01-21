package leo.example.hamburger.vo.burger;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class burgerVO {
    
    private String burgerName;git log

   // @JsonIgnore
    private String burgerImg;
    private String brandName;
    private String onion;
    private String lettuce;
    private String pickle;
    private String cheese;
    private String tomato;
    private String patty;
    private String sauce;

}
