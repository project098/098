package com.elro.model.bean;

import java.io.Serializable;









import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonProperty;

//@XmlRootElement
public class Employee implements Serializable {

	
	/**
	 * 
	 */
	//@Autowired
	private static final long serialVersionUID = 1L;
	//@JsonProperty ("firstName")
	String firstName;
	//@JsonProperty ("lastName")
	String lastName;
	//@JsonProperty ("age")
	String age;
	//@JsonProperty ("department")
	String department;
	//@JsonProperty ("Salary")
	String Salary;
	//@JsonProperty ("id")
	String id;
	
	
	
	
	public String getFirstName() {
		return firstName;
	}
	//@JsonProperty ("firstName")
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	//@JsonProperty ("lastName")
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getAge() {
		return age;
	}
	//@JsonProperty ("age")
	public void setAge(String age) {
		this.age = age;
	}
	public String getDepartment() {
		return department;
	}
	//@JsonProperty ("department")
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getSalary() {
		return Salary;
	}
	//@JsonProperty ("salary")
	public void setSalary(String salary) {
		Salary = salary;
	}
	

	public Employee(String firstName, String lastName, int age, int department,
			String salary, String id) {		
		
	}
	
	
	public Employee() {
		super();
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
}
