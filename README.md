# protractor
protractor framework

var {userName, Password, loginButton, forgotPassword, forgotPasswordCancel } =  require ("../loginLocator/loginLocator.js");
var {userManagement, job, qaliNav} = require ("../pages/adminPage/adminLocator.js");
var {testUsername, testPassword} = require ("../testData/test.js")

//var {getElement} = require ("../../commonFunction/getAction.js");
var {inputAction, enterTextBox, dropDownSelect} = require("../../commonFunction/inputAction");
var { clickOnElement } = require("../../commonFunction/clickAction.js");
var {adminObj} = require("../pages/adminPage/adminLocator");
var {leavePageObj} = require("../pages/leavePage/leaveLocator.js")
var {buzzObj, mostCommentedPost, onYourMind, clickOnPost} = require("../pages/buzzPage/buzzPageLocator.js");
var { adminLogin, corporateBrandingObj } = require("../pages/adminPage/adminPageTest.js");

var {addition, multiply, subtraction, division} = require ("../../commonFunction/calculation.js");
var {adminPageVerify, adminPageDropDown} = require ("../pages/adminPage/adminPageTest.js");
var {job, configuration, corporateBranding, qualiLanguages } = require("../pages/adminPage/adminLocator.js");
var {julieCalculator} = require("../../commonFunction/juliemerDemo.js");
const adminTestData = require("../pages/adminPage/adminTestData.js");
var {oddEven} = require("../pages/adminPage/adminPageTest.js");
var {buzzPages, logout} = require("../pages/buzzPage/buzzTest.js");
var {pimPage} = require("../pages/pimPage/pimTest.js"); 
var {getTextPromise} = require("../../commonFunction/inputAction.js");





describe('Protractor demo', () => {
   beforeAll(async ()=>{
       browser.ignoreSynchronization = true;
       browser.driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
       await browser.sleep(5000);
       await adminLogin(testUsername,testPassword);
       await browser.sleep(5000);
       console.log('in all It blocks beforeAll');
       
   })

   beforeEach(async () => {
            
      console.log('in each It blocks beforeAll');
      
   })

   afterAll(async () =>{
       
      console.log('in all It blocks afterAll');
      await logout();
      browser.sleep(2000);

   })

   afterEach(async() => {

      console.log('in each It blocks afterAll');
      
   })





   it ('should be test in Admin Page', async() => {
      //  browser.ignoreSynchronization = true;
      //  browser.driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      //  await browser.sleep(5000);
       
      //  console.log(addition(2, 3));
      //  console.log(multiply (20,20));
      //  console.log(subtraction(30,5));
      //  //const div = division(100,5);
      //  //console.log(div); 
      //  console.log(division(100,5));

        

      
      //  let ele = await getElement(loginButton, "buttonText");
      //  var EC = protractor.ExpectedConditions;
      //  var isClickable = EC.elementToBeClickable(ele);

   //  await adminLogin(testUsername,testPassword);
   //  await browser.sleep(5000);

    await clickOnElement("XPATH", adminObj);
    await browser.sleep(5000);

    await adminPageDropDown("Memberships");
    await browser.sleep(2000);

   //  await  expect(element(by.id('Nationalities')).isPresent()).toBe(false);

    
   //  await browser.navigate().to('https://webdriver.io/');
    
   //  await clickOnElement("XPATH", job);
   //  await browser.sleep(3000);
   //  await clickOnElement("XPATH", configuration);
   //  await browser.sleep(3000);

   //  browser.navigate().to('https://www.google.com/');
   //  await browser.sleep(3000)
   //  await browser.switchTo().activeElement().sendKeys('cricket', protractor.Key.ENTER);
   //  await browser.sleep(3000)

      // await browser.navigate().to('https://juliemr.github.io/protractor-demo/')
      // await browser.sleep(3000);
      // await julieCalculator(500, 50, "SUBTRACTION"); 
      // await browser.sleep(3000);

      await adminPageVerify();
      await browser.sleep(3000);

      // await getTextPromise("XPATH", configuration);
      // await browser.sleep(3000);


      // await oddEven();
      // await browser.sleep(1000);
   })
 
   it('should be test in Buzz Page', async () => {
      await buzzPages();
      await browser.sleep(3000);
      
   })

   it('should be in PIM Page', async () => {
      await pimPage();
      await browser.sleep(3000);

   })
    
})
