package hello;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class EmployeeListController {
	//@Autowired
	//@Qualifier ("empWrapper1")
	//Employee empWrapper1;
	@RequestMapping (value ="/createListOfEmployee")
	public EmployeeWrapper create (EmployeeWrapper empWrapper1) {
		//List <Employee> empList = empWrapper.getEmpList();
		System.out.println ("hellow123");
		System.out.println ("size of the list--> "+empWrapper1.getEmpList().size());
		List <Employee> empList1 =  new ArrayList<Employee> ();
		/*for (Employee employee:empList) {
			System.out.println ("hellowow1");
			System.out.println (employee.getFirstName());
		}*/
		
		Employee emp1 = new Employee ("shameer","syed",779079,2,"2000","2");
		Employee emp2 = new Employee ("shameer2","syed2",779079,2,"2000","2");
		empList1.add(emp1);
		empList1.add (emp2);
		EmployeeWrapper empWrapper = new EmployeeWrapper ();
		empWrapper.setEmpList(empList1);
		return empWrapper;
	}
	@RequestMapping ("/getListOfEmployee")
	public List<Employee> getEmployee (Employee employee) {
		List <Employee> empList = new ArrayList<Employee> ();
				return empList;
	}
	@RequestMapping ("/updateListOfEmployee")
	public List<Employee> update (Employee employee) {
		List <Employee> empList = new ArrayList<Employee> ();
		return empList;
	}
	@RequestMapping ("/deleteEmployee")
	public String delete (Employee employee) {		
		return "Employee deleted from the database - Employee ID  : " + employee.id; 
	}
	@RequestMapping ("/deleteListOfEmployee")
	public String deleteEmployees (List <Employee> employee) {		
		return "List of employee deleted from the database"; 
	}
	
}
