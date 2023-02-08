var {enterTextBox} = require("../commonFunction/inputAction.js");
var {firstField, secondField, goButton, operator } = require("../src/loginLocator/loginLocator.js");
const { clickOnElement } = require("./clickAction.js");
const {dropDownSelect} = require("../commonFunction/inputAction.js");

const julieCalculator = async (value1, value2, Operator) => {
    await enterTextBox("XPATH",firstField,value1);
    await browser.sleep(2000);

    await dropDownSelect("XPATH",operator,Operator);
    await browser.sleep(2000);

    await enterTextBox("XPATH",secondField,value2);
    await browser.sleep(2000);
      
    await clickOnElement("XPATH", goButton);
   
}

module.exports= {julieCalculator};