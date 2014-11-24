package hello;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@RequestMapping ("/addService/{data1}/data2/{data2}")
	public int addRestService (@PathVariable String data1,@PathVariable String data2)
	{
		int sum = Integer.parseInt(data1) + Integer.parseInt(data2);
		return new Integer (sum);
	}
	
	@RequestMapping ("/subService")
	public int subRestService (int data1 , int data2) {		
		return data1 - data2;		
	}
	
	@RequestMapping ("/mulService")
	public double mulRestService (double data1 , double data2) {	
		return data1 * data2;
	}
	
	@RequestMapping ("/divService")
	public double divRestService (double data1 , double data2 ) {	
		return data1 / data2;
	}
	
	@RequestMapping ("/replyService")
	public String replyString (String inputStr)
	{
		return "Hai " + inputStr;
	}
	
	@RequestMapping ("/welcomeService/{data1}")
	public String welcomeString (@PathVariable String [] data1)
	{
		return "Hai all welcome to MGO" ;
	}
	
}
