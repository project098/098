package hello;

import java.util.ArrayList;
import java.util.List;




import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;



@ComponentScan
@EnableAutoConfiguration
public class Application {
	
	
	public static void main(String[] args) {
    	
      	
		List<HttpMessageConverter<?>> converters =  new ArrayList<HttpMessageConverter<?>> ();
    	/*ApplicationContext context = 
                new ClassPathXmlApplicationContext("/beans.xml");
         Employee te = (Employee) context.getBean("empWrapper1");*/
		SpringApplication.run(Application.class, args);
		configureMessageConverters (converters);
        
    }
	
	@SuppressWarnings("deprecation")
	public static void configureMessageConverters(List<HttpMessageConverter<?>> converters){
		System.out.println ("inside application callss");
		  /*MappingJacksonHttpMessageConverter converter=new MappingJacksonHttpMessageConverter();
		  ObjectMapper objectMapper = new ObjectMapper ();
		  objectMapper.registerSubtypes(Employee.class);
		 //converter.setObjectMapper(EmployeeWrapper.class);
		  List<MediaType> mediatypes=new ArrayList<MediaType>();
		  mediatypes.add(MediaType.APPLICATION_JSON);
		  converter.setSupportedMediaTypes(mediatypes);
		  converter.setObjectMapper(objectMapper);
		  converters.add(converter);*/
		}
	
}