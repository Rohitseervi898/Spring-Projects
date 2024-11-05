package com.rohit.LibraryManagementSystem.service;

import com.rohit.LibraryManagementSystem.Repository.Bookrepo;
import com.rohit.LibraryManagementSystem.model.Books;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Bookservice {
    @Autowired
    Bookrepo repo;

    public List<Books> getbooks(){
        return repo.findAll();
    }
    public void addbooks(Books books){
        repo.save(books);
        System.out.println(books);
    }
    public void updatebooks(Books book){
        repo.save(book);
    }
    public void deletebook(int ids){
        repo.deleteById(ids);
    }
}
