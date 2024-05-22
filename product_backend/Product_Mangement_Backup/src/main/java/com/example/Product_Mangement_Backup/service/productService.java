package com.example.Product_Mangement_Backup.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Product_Mangement_Backup.model.Product;

@Service
public interface productService {
	public Product saveProduct(Product product);

	public Product getProductById(Integer Id);

	public String deleteProductById(Integer Id);

	public List<Product> getAllProduct();

	public Product editProduct(Product product, Integer id);

}
