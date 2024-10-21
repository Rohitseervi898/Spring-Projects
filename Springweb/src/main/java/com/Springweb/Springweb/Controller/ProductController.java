package com.Springweb.Springweb.Controller;

import com.Springweb.Springweb.model.Product;
import com.Springweb.Springweb.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ProductController
{
    @Autowired
    ProductService service;
    @GetMapping("/product")
    public List<Product> productList() {
        return service.getProduct();
    }

    @GetMapping("/product/{prodId}")
    public Product getproductById(@PathVariable int prodId){
        return service.getProductById(prodId);
    }
    @PostMapping("/product")
    public void addProduct(Product prod){
        service.addProduct(prod);
    }

}
