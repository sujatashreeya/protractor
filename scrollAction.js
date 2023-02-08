module.exports = {
    async scrolIntoView (el) {
        await browser.executeScript(function(el){
               el.scrolIntoView();

        }, el.getWebElement());

    }
}