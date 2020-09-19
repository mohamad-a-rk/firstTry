package fall2020project;

import static org.junit.Assert.assertTrue;

import java.util.ArrayList;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Steps {
	int Res=0;
	ArrayList  <Product> a = new ArrayList <Product>();
	@Given("the price of a {string} is {int}")
	public void thePriceOfAIs(String string, Integer int1) {
	    // Write code here that turns the phrase above into concrete actions
		a.add(new Product(string,int1)) ;
	}

	@When("I checkout {int} {string}")
	public void iCheckout(Integer int1, String string) {
		Res+= int1 * Product.getPrice(string, a) ;
	}
	
	@Then("the total price should be {int}")
	public void theTotalPriceShouldBe(Integer int1) {
	    assertTrue(int1 ==Res);
	}
}
