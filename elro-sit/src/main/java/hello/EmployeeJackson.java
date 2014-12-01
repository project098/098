package hello;
import com.fasterxml.jackson.annotation.JsonProperty;
public class EmployeeJackson {

@JsonProperty("firstName")
String firstName;
@JsonProperty("lastName")
String lastName;
@JsonProperty("age")
int age;
@JsonProperty("department")
int oldPasswordExpiry;
@JsonProperty("id")
String realName;
public EmployeeJackson(String firstName, String lastName, int age,
		int oldPasswordExpiry, String realName, String salary) {
	super();
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.oldPasswordExpiry = oldPasswordExpiry;
	this.realName = realName;
	this.salary = salary;
}
public EmployeeJackson() {
	super();
}
@Override
public String toString() {
	return "EmployeeJackson [firstName=" + firstName + ", lastName=" + lastName
			+ ", age=" + age + ", oldPasswordExpiry=" + oldPasswordExpiry
			+ ", realName=" + realName + ", salary=" + salary + "]";
}
@JsonProperty("salary")
String salary;

}