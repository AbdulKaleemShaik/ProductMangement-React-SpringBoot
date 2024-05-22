package com.example.Product_Mangement_Backup.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Product_Mangement_Backup.model.Product;
import com.example.Product_Mangement_Backup.repository.ProductRepo;

@Service
public class ProductServiceImplement implements productService {
	@Autowired
	private ProductRepo repo;

	@Override
	public Product saveProduct(Product product) {
		return repo.save(product);
	}

	@Override
	public Product getProductById(Integer Id) {
		return repo.findById(Id).get();
	}

	@Override
	public String deleteProductById(Integer Id) {
		Product product = repo.findById(Id).get();
		if (product != null) {
			repo.delete(product);
			return "Deleted Successfully";
		}
		return "Something went Wrong";
	}

	@Override
	public List<Product> getAllProduct() {

		return repo.findAll();
	}

	@Override
	public Product editProduct(Product product, Integer id) {
		Product oldPro = repo.findById(id).get();
		oldPro.setId(id);
		oldPro.setProductName(product.getProductName());
		oldPro.setDescription(product.getDescription());
		oldPro.setPrice(product.getPrice());
		oldPro.setStatus(product.getStatus());
		return repo.save(oldPro);
	}

}
