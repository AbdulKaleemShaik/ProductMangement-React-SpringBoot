package com.example.Product_Mangement_Backup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Product_Mangement_Backup.model.Product;
import com.example.Product_Mangement_Backup.service.productService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	@Autowired
	private productService prodser;

	@PostMapping("/saveProduct")
	public ResponseEntity<?> saveProduct(@RequestBody Product product) {
		return new ResponseEntity<>(prodser.saveProduct(product), HttpStatus.CREATED);

	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getProductById(@PathVariable Integer id) {
		return new ResponseEntity<>(prodser.getProductById(id), HttpStatus.OK);
	}

	// @GetMapping("/delete/{id}")
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteProductById(@PathVariable Integer id) {
		return new ResponseEntity<>(prodser.deleteProductById(id), HttpStatus.OK);
	}

	@GetMapping("/")
	public ResponseEntity<?> getAllProducts() {
		return new ResponseEntity<>(prodser.getAllProduct(), HttpStatus.OK);
	}

	@PostMapping("/editProduct/{id}")
	public ResponseEntity<?> editProduct(@PathVariable Integer id, @RequestBody Product product) {
		return new ResponseEntity<>(prodser.editProduct(product, id), HttpStatus.CREATED);
	}

}
