package com.diogo.apijava.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diogo.apijava.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
