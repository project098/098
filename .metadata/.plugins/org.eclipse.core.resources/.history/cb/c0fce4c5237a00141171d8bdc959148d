package com.elro.db.test;


import com.elro.model.Employee.bean.Employee;


import java.sql.SQLException;
import java.util.List;

import org.junit.Test;

public class TestEmployees {

	@Test 
	public void testGetEmployees () {
		
		com.elro.db.CreateDataSource ds = new com.elro.db.CreateDataSource ();
		List<Employee> employees = null;
		try {
			employees = ds.getEmployees();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		for (Employee employee: employees) {
			System.out.println (employee.getFirstName());
			
		}
	}
	
	
	
}
