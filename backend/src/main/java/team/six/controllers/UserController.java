package team.six.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by abrown on 10/30/15.
 */
@Controller
public class UserController {
    @RequestMapping("/")
    @ResponseBody
    public String home(){
        return "Hello World";
    }
}
