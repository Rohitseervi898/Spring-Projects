package com.rohit.LibraryManagementSystem.Repository;

import com.rohit.LibraryManagementSystem.model.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Bookrepo extends JpaRepository<Books,Integer> {
}
