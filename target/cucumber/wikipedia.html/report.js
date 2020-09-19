$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:use_cases/FirstTry.feature");
formatter.feature({
  "name": "Checkout",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Two banans scanned separately",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the price of a \"banana\" is 40",
  "keyword": "Given "
});
formatter.match({
  "location": "fall2020project.Steps.thePriceOfAIs(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checkout 1 \"banana\"",
  "keyword": "When "
});
formatter.match({
  "location": "fall2020project.Steps.iCheckout(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checkout 1 \"banana\"",
  "keyword": "And "
});
formatter.match({
  "location": "fall2020project.Steps.iCheckout(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total price should be 80",
  "keyword": "Then "
});
formatter.match({
  "location": "fall2020project.Steps.theTotalPriceShouldBe(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A banana and Apple",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the price of a \"banana\" is 40",
  "keyword": "Given "
});
formatter.match({
  "location": "fall2020project.Steps.thePriceOfAIs(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the price of a \"apple\" is 25",
  "keyword": "And "
});
formatter.match({
  "location": "fall2020project.Steps.thePriceOfAIs(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checkout 1 \"banana\"",
  "keyword": "When "
});
formatter.match({
  "location": "fall2020project.Steps.iCheckout(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I checkout 1 \"apple\"",
  "keyword": "And "
});
formatter.match({
  "location": "fall2020project.Steps.iCheckout(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total price should be 65",
  "keyword": "Then "
});
formatter.match({
  "location": "fall2020project.Steps.theTotalPriceShouldBe(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
});