package com.Springweb.Springweb.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StartController {
    @RequestMapping("/")
    public String Greet(){
        return "Welcome to the MAtrix";
    }
    @RequestMapping("/about")
    public String about(){
        return "I am you and you are me ";
    }
}
