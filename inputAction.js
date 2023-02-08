var getAction = require ("../commonFunction/getAction.js");


module.exports = {

    async dropDownSelect (findby,prop,value){

    var dropDownObj = await getAction.getElement(findby,prop);

    dropDownObj.click();
    await browser.sleep(2000);
    var allObj=await getAction.getAllChildren(dropDownObj,"tagname","li");

    for(let i=0; i<allObj.length; i++){

        var text = await allObj[i].getText();
        if (text==value) {
            allObj[i].click();
            return true;
            
            
        }
      }
    
    },


      async enterTextBox (findby, prop, value) {

          var inputObj = await getAction.getElement(findby, prop);
          inputObj.sendKeys(value);
      },

      

      async enterTextBoxNull(findBy,prop,value){

        var inputObj=await getAction.getElement(findBy,prop);
        inputObj.sendKeys(value).clear();
      },

      async getTextPromise(findBy,prop){

        var inputObj= getAction.getElement(findBy,prop);
          return inputObj.getText().then((text) => {
          return text;

          })
      }

}