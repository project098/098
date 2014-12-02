package com.elro.db;


import java.sql.SQLException;
import java.util.List;

import com.elro.model.bean.Employee;

public class TestDBConnection {

	public static void main(String[] args) throws SQLException {
		// TODO Auto-generated method stub
		
		CreateDataSource ds = new CreateDataSource ();
		List<Employee> employees = ds.getEmployees();
		
		for (Employee employee: employees) {
			System.out.println (employee.getFirstName());
			
		}

	}

}
