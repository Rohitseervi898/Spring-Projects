package com.Springweb.Springweb.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@Entity
public class Product {
    @Id
    private int prodId;
    private String prodName;
    private int price;

    public Product() {

    }

//    public Product(int prodId, String prodName, int price) {
//        this.prodId=prodId;
//        this.prodName=prodName;
//        this.price=price;
//    }
}
