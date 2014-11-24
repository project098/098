package hello;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeeWrapper implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	//@JsonProperty ("empList")
	private List <Employee> empList;

	public List<Employee> getEmpList() {
		return empList;
	}
	//@JsonProperty ("empList")
	public void setEmpList(List<Employee> empList) {
		this.empList = empList;
		
	}

	@Override
	public String toString() {
		return "EmployeeWrapper [empList=" + empList + ", getEmpList()="
				+ getEmpList() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	

}
