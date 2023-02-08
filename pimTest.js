var {pimObj, conifiguration, addEmployee, firstName, middleName, lastName, saveButton, employeeList} = require("../pimPage/pimPageLocator.js");
var {clickOnElement} =  require("../../../commonFunction/clickAction.js");
var {enterTextBox} = require("../../../commonFunction/inputAction.js");

var pimPage = async () => {
    await clickOnElement("XPATH", pimObj);
    await browser.sleep(3000);
    await clickOnElement("XPATH", conifiguration);
    await browser.sleep(5000);
    await clickOnElement("XPATH",employeeList);
    await browser.sleep(5000);
    
    await clickOnElement("XPATH",addEmployee);
    await browser.sleep(5000);

    await enterTextBox("XPATH",firstName, 'Sujata');
    await browser.sleep(2000);
    await enterTextBox("XPATH",middleName, 'Shreeya');
    await browser.sleep(2000);
    await enterTextBox("XPATH",lastName, 'Dash');
    await browser.sleep(2000);
    
    await clickOnElement("XPATH", saveButton);
    await browser.sleep(5000);




}

module.exports = {pimPage};