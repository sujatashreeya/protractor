//var {getElement, getAllElement, getAllChildren, getChildren, getAttribute} =  require ("../../../commonFunction/getAction");
var {enterTextBox} = require("../../../commonFunction/inputAction.js");
var {clickOnElement, evenNum} = require("../../../commonFunction/clickAction.js");
var {verifyfyElementText, verifyElementPresent} = require("../../../commonFunction/verfyAction.js");
// var {testUsername, testPassword} = require ("../testData/test.js");
// var {adminObj} = require("../adminPage/adminLocator.js")
var {userName, Password, loginButton } =  require("../../loginLocator/loginLocator.js");
const verfyAction = require("../../../commonFunction/verfyAction.js");
const adminLocator = require("./adminLocator.js");
const adminTestData = require("./adminTestData.js");
var {verifyElementText} = require("../../../commonFunction/verfyAction.js");
var {dropDownSelect} = require("../../../commonFunction/inputAction.js");
var {configuration, configDrop} = require("../adminPage/adminLocator.js");
var {qaliNav, userManagement, job, qualiLanguages, corporateBranding, qualiMember, nationalities} = require("../adminPage/adminLocator.js");
var {oddNum, evenNum} = require("../../../commonFunction/clickAction.js");
 

   var adminLogin = async (username, password) => {
    await enterTextBox("XPATH",userName, username);
    await enterTextBox("XPATH",Password, password);
    
    await clickOnElement("XPATH", loginButton);

   }


   var adminPageDropDown = async (valuee) => {
      await clickOnElement("XPATH", userManagement);
       await browser.sleep(5000);
       await clickOnElement("XPATH", job);
       await browser.sleep(5000);
       await dropDownSelect("XPATH", qaliNav, valuee);
       await browser.sleep(5000);

      //  await clickOnElement("XPATH", qualiLanguages);
      //  await browser.sleep(5000);
       
       

   }

     
   var adminPageVerify = async () => {

      await verfyAction.verifyElementPresent("XPATH",corporateBranding);
      await browser.sleep(5000);
     }

   
   var oddEven = () =>{
      oddNum();
      evenNum();
   }

module.exports = {adminLogin, adminPageVerify, adminPageDropDown, oddEven };

