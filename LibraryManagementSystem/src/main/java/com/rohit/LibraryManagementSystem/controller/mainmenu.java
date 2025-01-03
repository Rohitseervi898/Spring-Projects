package com.rohit.LibraryManagementSystem.controller;

import com.rohit.LibraryManagementSystem.model.Books;
import com.rohit.LibraryManagementSystem.service.Bookservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin (origins = "http://127.0.0.1:5500", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})

@RestController
public class mainmenu {
    @Autowired
    Bookservice service;

    @GetMapping("/books")
    public List<Books> getbooks(){
        return service.getbooks();
    }
    
    @GetMapping("/books/{ids}")
    public Optional<Books> getbooks(@PathVariable int ids){
        return service.getbookbyid(ids);
    }
    
    @PostMapping("/books")
    public void add_books(@RequestBody Books books ){
        service.addbooks(books);
    }
    
    @PutMapping("/books")
    public void update_book(@RequestBody Books books){
        service.updatebooks(books);
    }
    
    @DeleteMapping("/books/{ids}")
    public void delete_books(@RequestBody @PathVariable int ids){
        service.deletebook(ids);
    }
}
