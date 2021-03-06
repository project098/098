package com.elro.db;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.elro.model.bean.Employee;

public class CreateDataSource {
	Connection conn = null;
	Statement stmt = null;
public CreateDataSource (){
	try {
		Class.forName("com.mysql.jdbc.Driver").newInstance();
	} catch (InstantiationException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (IllegalAccessException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (ClassNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
}

public Connection setUPConnection () {	
	
	try {
		conn =DriverManager.getConnection("jdbc:mysql://e098.ch4yhyghsujs.us-west-2.rds.amazonaws.com:3306/testDB?" +
			                                   "user=shameergokul&password=test1234$");
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return conn;	
}
public Statement getStatement () throws SQLException {	
	stmt =conn.createStatement();
	return stmt;
}

public List <Employee> getEmployees () throws SQLException {
	
	List<Employee> employees = new ArrayList <Employee> ();
	Connection conn = setUPConnection ();
	//stmt = conn.createStatement();
	stmt = getStatement ();
	ResultSet rs = stmt.executeQuery("select * from Employee");
	
	
	while (rs.next()) {
	
		Employee employee = new Employee ();
		employee.setFirstName(rs.getString("firstName"));
		employee.setLastName(rs.getString("firstName"));
		employee.setAge((rs.getString("age")));
		employee.setDepartment(rs.getString("Department"));
		employee.setSalary(rs.getString("firstName"));
		employees.add(employee);		
	}
	
	return employees;	
}

}
