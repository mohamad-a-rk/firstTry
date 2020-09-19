package fall2020project;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;

import org.junit.runner.RunWith;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;
@RunWith(Cucumber.class)
@CucumberOptions(features="use_cases",
plugin = {"html:target/cucumber/wikipedia.html"},
monochrome = true,
snippets=SnippetType.CAMELCASE,
glue= {"fall2020project"},
strict=true
)
public class Vaildition {

}

