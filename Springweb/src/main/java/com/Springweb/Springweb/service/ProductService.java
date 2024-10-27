package com.Springweb.Springweb.service;

import com.Springweb.Springweb.model.Product;
import com.Springweb.Springweb.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService
{
    @Autowired
    ProductRepo repo;

//    List<Product> products= new ArrayList<>(Arrays.asList(
//            new Product(101,"Iphone",70000),
//            new Product(102,"Victus",60000),
//            new Product(103,"MacBook",999999)));
    public List<Product> getProduct(){
        return repo.findAll();
    }
    public Optional<Product> getProductById(int prodId){
        return repo.findById(prodId); //.stream()
//                .filter(p ->p.getProdId()==prodId)
//                .findFirst().orElse(new Product(100,"NO item",000));
    }
    public void addProduct(Product prod){
        repo.save(prod);
        System.out.println(prod);
    }

    public void updateProduct(Product prod) {
        repo.save(prod);
    }

    public void deleteProduct(int prodId) {
        repo.deleteById(prodId);
    }
}
