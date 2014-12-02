package com.elro.restservices;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import com.elro.model.bean.Employee;
import com.elro.model.wrapper.EmployeeWrapper;
//headers = "content-type=application/x-www-form-urlencoded"
@RestController
public class EmployeeController {
	
	//Working and Tested
	@RequestMapping (value ="/createEmp")	
	public  Employee create (@RequestBody Employee employee) {	
		System.out.println ("hellowow Single Employee");
		return employee;
	}
	//Working and Tested , http://localhost:8080/updateEmployees
	//Test Data is 
	
	/*
{
  "empList": [
    {
      "firstName": "shameer",
      "lastName": "syed",
      "age": 779079,
      "department": 2,
      "id": "2",
      "salary": "2000"
    },
    {
      "firstName": "shameer2",
      "lastName": "syed2",
      "age": 779079,
      "department": 2,
      "id": "2",
      "salary": "2000"
    }
  ]
}
	 * 
	 * 
	 * 
	 */
	@RequestMapping ("/updateEmployees")
	public EmployeeWrapper update (@RequestBody EmployeeWrapper employeeWrapper) {
		System.out.println ("hellowow Multiple Employees");
		return employeeWrapper;
	}
	
	@RequestMapping ("/getEmp")
	public @ResponseBody Employee getEmployee (@RequestBody Employee employee) {
		return employee;
	}
		@RequestMapping ("/deleteEmp")
	public String delete (@RequestBody Employee employee) {		
		return "Employee deleted from the database - Employee ID  : " ;
	}
}
