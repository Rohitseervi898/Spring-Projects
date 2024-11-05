package com.rohit.LibraryManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
@AllArgsConstructor
public class Books {
    @Id
    private int book_id;
    private String Book_Name;
    private String Author;
    public Books(){

    }
}
