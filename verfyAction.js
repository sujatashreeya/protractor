var {inputAction} = require ("../commonFunction/inputAction.js");


//var {clickAction} = require ("../commonFunction/clickAction.js");

const getAction = require('../commonFunction/getAction.js');
var {getElement} = require ('../commonFunction/getAction.js');


module.exports = {       

    async verifyfyElementText ( findby, prop, value ) {
              var elementObj = await getAction.getElement(findby, prop);
              var text = await elementObj.getText();
              expect(text).toEqual(value);

    },

    async verifyElementPresent ( findby,prop ) {
            var elementObj = await getAction.getElement(findby,prop);
            var elementPresent = await elementObj.isPresent();
            expect(elementPresent).toBeTruthy();
    },

    async verifyElementDisplayed ( findby, prop ) {
              var diplayObj = await getAction.getElement(findby, prop);
              var elementDisplayed = await diplayObj.isDisplayed();
              excpect(elementDisplayed).toBeTruthy();

    },

    async verifyDropDown(findBy,prop,value){
        var DropDownObj=await getAction.getElement(findBy,prop);
        await DropDownObj.click();
        var allChild=await getAction.getAllChildren(DropDownObj,"tagname","option");  
        for (let i=0;i<allChild.length;i++){
         
          expect(allChild[i].getText()).toContain(value[i]);
        }
      },

    async verifyAttribute( findby, prop, attributeProp, attributeValue ) {
            var attribute = await getAction.getAttribute( findby, prop, attributeProp);
            expect(attribute).toContain(attributeValue);

    },

    async verifyEnabled(findBy,prop){
        var enabledObj=await getAction.getElement(findBy,prop);
        var verifyEnabledObj=await enabledObj.isEnabled();
        expect(verifyEnabledObj).toBeTruthy();
          
        },

    async accountServiceFunction(label,type,input){
        const parentXp = "//*[text()='"+label+"']";
          var parentUserIDPassword= await getAction.getElement("xpath", parentXp);
               switch(type){
                  case "inputBox":

                    const childXp = "//*[text()='"+label+"']/..//input";
                    var childUserIdPassword=await getAction.getElement("xpath", childXp);
                    
                    await childUserIdPassword.click();
                    
                    var inputField=await inputAction.enterTextBox("xpath", childUserIdPassword, input)
                      return true

                  case "chcekBox":
                    var checkBoxObj=await getAction.getElement("xpath",parentXp);
                    await checkBoxObj.click();
                }
        
        }    
        

}