package com.Springweb.Springweb.service;

import com.Springweb.Springweb.model.Product;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
@Service
public class ProductService
{
    List<Product> products= Arrays.asList(
            new Product(101,"Iphone",70000),
            new Product(102,"Victus",60000),
            new Product(103,"MacBook",999999));
    public List<Product> getProduct(){
        return products;
    }
    public Product getProductById(int prodId){
        return products.stream()
                .filter(p ->p.getProdId()==prodId)
                .findFirst().orElse(new Product(100,"NO item",000));
    }
    public void addProduct(Product prod){
        products.add(prod);
        System.out.println(prod);
    }
}
