package com.Springweb.Springweb.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
public class Product {
    private int prodId;
    private String prodName;
    private int price;

//    public Product(int prodId, String prodName, int price) {
//        this.prodId=prodId;
//        this.prodName=prodName;
//        this.price=price;
//    }
}
