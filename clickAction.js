const getAction = require('../commonFunction/getAction.js');
var {getElement} = require ('../commonFunction/getAction.js');


module.exports = {
    async clickOnElement (findby, prop) {
        // console.log(findby, prop);
        var createFreeObj = await getAction.getElement(findby, prop);
        await createFreeObj.click();
    },


    
 

  oddNum() {
    for(var i=1; i<10; i++)
       if(i%2 != 0){
            //  console.log((i),':the number is Odd');
             console.log(`the number ${i} is odd`);
        } 
    
 },
 

  evenNum() {
    for(var i=1; i<10; i++)
       if(i%2 == 0){
        // console.log((i),':the number is Even');
        console.log(`${i} - the number is even`);
             
        }

    
 }

}

 
