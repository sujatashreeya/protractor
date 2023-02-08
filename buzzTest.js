var {clickOnElement} =  require("../../../commonFunction/clickAction.js");
var {enterTextBox} = require("../../../commonFunction/inputAction.js");
var {buzzObj, recentPost, mostCommentedPost, onYourMind, clickOnPost, userObj, logoutObj } = require("../buzzPage/buzzPageLocator.js");


var buzzPages = async () => {
    await clickOnElement("XPATH", buzzObj);
    await browser.sleep(3000);
      
    await clickOnElement("XPATH", recentPost);
    await browser.sleep(3000);
    
     await clickOnElement("XPATH", mostCommentedPost);
     await browser.sleep(3000);
 
     await clickOnElement("XPATH", onYourMind);
     await browser.sleep(3000);
     await enterTextBox("XPATH",onYourMind, "hello !!!! how are you !!");
     await browser.sleep(3000);
     await clickOnElement("XPATH", clickOnPost);
     await browser.sleep(3000);
     


}


var logout = async () => {
    await clickOnElement("XPATH", userObj);
    await browser.sleep(3000);
    await clickOnElement("XPATH", logoutObj);
    await browser.sleep(3000);

   

}

module.exports={buzzPages, logout};