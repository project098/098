package com.elro.model.impl;

import com.elro.model.bean.Employee;


/**
 * 
 */

public interface EmployeeImpl {	
	
	public void insert(Employee employee);
	public Employee findByCustomerId(String empId);
	
	
}
