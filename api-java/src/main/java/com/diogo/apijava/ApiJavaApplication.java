package com.diogo.apijava;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.diogo.apijava.model.Course;
import com.diogo.apijava.repository.CourseRepository;

@SpringBootApplication
public class ApiJavaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiJavaApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Course a = new Course();
			a.setName("React");
			a.setCategory("front-end");
			courseRepository.save(a);

			Course b = new Course();
			b.setName("PHP");
			b.setCategory("back-end");
			courseRepository.save(b);

			Course c = new Course();
			c.setName("Angular");
			c.setCategory("front-end");
			courseRepository.save(c);

			Course d = new Course();
			d.setName("Java");
			d.setCategory("back-end");
			courseRepository.save(d);
		};
	}
}
