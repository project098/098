package hello;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.xml.MarshallingHttpMessageConverter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@EnableWebMvc
@Configuration
@ComponentScan({ "hello" })
public class WebConfig extends WebMvcConfigurerAdapter {


	
	
	/* @Override
	    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
	        messageConverters.add(createXmlHttpMessageConverter());
	        messageConverters.add(new MappingJackson2HttpMessageConverter());
	 
	        super.configureMessageConverters(converters);
	    }
	    private HttpMessageConverter<Object> createXmlHttpMessageConverter() {
	        MarshallingHttpMessageConverter xmlConverter = 
	          new MarshallingHttpMessageConverter();
	 
	        XStreamMarshaller xstreamMarshaller = new XStreamMarshaller();
	        xmlConverter.setMarshaller(xstreamMarshaller);
	        xmlConverter.setUnmarshaller(xstreamMarshaller);
	 
	        return xmlConverter;
	    }*/
}
