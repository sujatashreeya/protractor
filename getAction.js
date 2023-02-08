module.exports = {
    async getElement(findBy,prop){
        var ele;
        switch(findBy){
            case "XPATH":
                ele = await element(by.xpath(prop));
                let a = ele.isPresent().then((isPresent) => {
                    if(isPresent){
                        return ele;
                    }
                })
                return a;
                // let a= await ele.isPresent();
                // if(a)
                // return ele;
            case "id":
                ele = element(by.id(prop));
                let b = ele.isPresent().then((isPresent) => {
                    if(isPresent){
                        return ele;
                    }
                })    
                return b;
            case "classname":
                ele = await element(by.className(prop));
                return ele;
            case "name":
                ele = await element(by.name(prop));
                return ele;
            case "tagname":
                ele = await element(by.tagName(prop));
                return ele;
            case "css":
                ele = await element(by.css(prop));
                return ele;
            case "linktext":
                ele = await element(by.linkText(prop));
                return ele;
            case "partiallinktext":
                ele = await element(by.partialLinkText(prop));
                return ele;
            case "binding":
                ele = await element(by.binding(prop));
                return ele;
            case "buttonText":
                ele = await element(by.buttonText(prop));
                return ele;
            case "partialbuttontext":
                ele = await element( by.partialButtonText(prop));
                return ele;
            case "modelname":
                ele = await element(by.modelName(prop));
                return ele;
            case "default":
                browser.logger.info("findBy not matched with the case");


            }    


    },



    async getAllElement (findBy, prop) {
        var ele;
        switch(findBy){
            case "XPATH":
                ele= await element.all(by.xpath(prop));
                return ele;
            case "id":
                ele= await element.all(by.id(prop));
                return ele;
            case "classname":
                ele= await element.all(by.className(prop));
                return ele;
            case "name":
                ele = await element.all(by.name(prop));
                return ele;
            case "tagname":
                ele=await element.all (by.tagName(prop));
                return ele;
            case "css":
                ele = await element.all(by.css(prop));
                return ele;
            case "linktext":
                ele = await element.all (by.linkText(prop));
                return ele;
            case "partiallinktext":
                ele = await element.all(by.partialLinkText(prop));
                return ele;
            case "binding":
                ele = await element.all(by.binding(prop));
                return ele;
            case "buttontext":
                ele = await element.all(by.buttonText(prop));
                return ele;
            case "partialbuttontext":
                ele = await element.all( by.partialButtonText(prop));
                return ele;
            case "modelname":
                ele = await element.all(by.modelName(prop));
                return ele;
            case "default":
                browser.logger.info ("findBy not matched with the case");


            }   

    },
        
        
    async getAllChildren(parentObj,findBy,prop){
            var ele;
            switch(findBy){
                case "XPATH":
                    ele= await parentObj.all(by.xpath(prop));
                    return ele;
                case "id":
                    ele= await parentObj.all(by.id(prop));
                    return ele;
                case "classname":
                    ele= await parentObj.all(by.className(prop));
                    return ele;
                case "name":
                    ele = await parentObj.all(by.name(prop));
                    return ele;
                case "tagname":
                    ele=await parentObj.all(by.tagName(prop));
                    return ele;
                case "css":
                    ele = await parentObj.all(by.css(prop));
                    return ele;
                case "linktext":
                    ele = await parentObj.all (by.linkText(prop));
                    return ele;
                case "partiallinktext":
                    ele = await parentObj.all(by.partialLinkText(prop));
                    return ele;
                case "binding":
                    ele = await parentObj.all(by.binding(prop));
                    return ele;
                case "buttontext":
                    ele = await parentObj.all(by.buttonText(prop));
                    return ele;
                case "partialbuttontext":
                    ele = await parentObj.all( by.partialButtonText(prop));
                    return ele;
                case "modelname":
                    ele = await parentObj.all(by.modelName(prop));
                    return ele;
                case "default":
                    browser.logger.info ("findBy not matched with the case");

            }
    },    


    async getChildren(parentObj,findBy,prop) {
            var ele;
            switch(findBy){
                case "XPATH":
                    ele= await parentObj(by.xpath(prop));
                    return ele;
                case "id":
                    ele= await parentObj(by.id(prop));
                    return ele;
                case "classname":
                    ele= await parentObj(by.className(prop));
                    return ele;
                case "name":
                    ele = await parentObj(by.name(prop));
                    return ele;
                case "tagname":
                    ele=await parentObj(by.tagName(prop));
                    return ele;
                case "css":
                    ele = await parentObj(by.css(prop));
                    return ele;
                case "linktext":
                    ele = await parentObj(by.linkText(prop));
                    return ele;
                case "partiallinktext":
                    ele = await parentObj(by.partialLinkText(prop));
                    return ele;
                case "binding":
                    ele = await parentObj(by.binding(prop));
                    return ele;
                case "buttontext":
                    ele = await parentObj(by.buttonText(prop));
                    return ele;
                case "partialbuttontext":
                    ele = await parentObj(by.partialButtonText(prop));
                    return ele;
                case "modelname":
                    ele = await parentObj(by.modelName(prop));
                    return ele;
                case "default":
                    browser.logger.info ("findBy not matched with the case");

            }
    },  



    async getAttribute(findby, prop, attributeProperty) {
        var attributeObj = await this.getElement(findby, prop);
        var attributeValue = await attributeObj.getAttribute(attributeProperty);
        return attributeValue;
   }
  

   
}