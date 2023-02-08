var log4js = require('log4js');
process.env['finalResult'] = "PASS"


exports.config = {
  framework: 'jasmine2',

  params: {
    
    screenshots: {
        UseScreenshotComparison: true,
        TakeScreenshotAtTheEndOfTest: true
    }
},

suites: {
    smoke: '../src/spec/smoke',
    regression: '../src/spec/regression'
},

  specs: ['../src/spec/spec.js'],

  getPageTimeout: 10000,
  allScriptsTimeout: 10000,

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 360000
},


  capabilities: {
    browserName: 'chrome',
    version: '',
    platForm: 'ANY',
    chromeOptions: {
      args: ['no-sandbox', 'start-maximized', "--disable-gpu", "--window-size=1366,768"],
      prefs: {
          download: {
              'prompt_for_download': false,
              'directory_upgrade': true,
              'default_directory': process.cwd() + '/Resources/Downloads/'
          }
      }
  }
    
  },


  beforeLaunch: function () {
    log4js.configure({
        appenders: {
            fileLog: {type: "file", filename: "./Logs/ExecutionLog.log"},
            console: {type: "log4js-protractor-appender"}
        },
        categories: {
            file: {appenders: ['fileLog'], level: 'error'},
            default: {appenders: ['console', 'fileLog'], level: 'trace'}
        }
    })
  },

  allScriptsTimeout: 160000,

  onPrepare: async function () {
    browser.manage().timeouts().implicitlyWait(6000);
    var AllureReporter = require('jasmine-allure-reporter');
jasmine.getEnv().addReporter(new AllureReporter({
  resultsDir: 'allure-results'
}));
    // browser.ignoreSynchronization = true;
    await browser.waitForAngularEnabled(false);
    require('babel-register')({
        'presets': ['es2015']
    });
    browser.driver.getCapabilities().then(function(caps){
        browser.browserName = caps.get('browserName');
    });
 var appendIRISlogs = function appendIRISlogs(reporter) {   
        let orgMethods = {};
        orgMethods.suiteStarted = reporter.suiteStarted;
        reporter.suiteStarted = function (result) {
            browser.logger.info(' ');
            browser.logger.trace('--------------------------------[SUITE_BEGIN] : ' + result.description + '----------------------');
            orgMethods.suiteStarted.apply(reporter, arguments);
        }

        orgMethods.suiteDone = reporter.suiteDone;
        reporter.suiteDone = function (result) {
            orgMethods.suiteDone.apply(reporter, arguments);
            browser.logger.trace('--------------------------------[SUITE_DONE] : ' + result.description + '----------------------');   
        }
        orgMethods.specStarted = reporter.specStarted;
        reporter.specStarted = function (result) {
            browser.logger.info(' ');
            browser.logger.trace('**********[SPEC_BEGIN] : ' + result.description);
            orgMethods.specStarted.apply(reporter, arguments);
        }
        orgMethods.specDone = reporter.specDone;
        reporter.specDone = function (result) {
            orgMethods.specDone.apply(reporter, arguments);
            browser.logger.trace('**********[SPEC_END] : ' + result.description);
        }


      }
       
              
      var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
      var reporter;
      reporter = new SpecReporter({
          spec: {
              displayStacktrace: true
          },
          stacktrace: {
              filter: function (stacktrace) {
                  let excludeFolderRegEx = /(jasmine[^\/]*\.js|Timer\.listOnTimeout)|node_modules/;
                  let newLine = '\n';
                  let redLineBegin = '\x1b[31m';

                  return stacktrace.split(newLine)
                      .filter(line => !excludeFolderRegEx.test(line))
                      .map(line => (line.startsWith(redLineBegin) ? '' :redLineBegin) + line)
                      .join(newLine)
              }

            },
            print: function (message) {
                let redLineBegin = '\x1b[31m';
                message.indexOf(redLineBegin)!==-1 ?
                    browser.logger.error(message) :
                    browser.logger.info(message);
            }
        });

        appendIRISlogs(reporter);
        jasmine.getEnv().addReporter(reporter);

        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'Testresults/Reports/',
            screenshotsFolder: 'Screenshots',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures                                                                                  : true,
            fixedScreenshotName: true,
            showPassed: true,
            fileName: 'ProjectReport',
            fileNameSeparator: '_',
            fileNameDateSuffix: true,
        }));
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'Testresults',
            filePrefix: 'xmloutput'
        }));
        browser.logger = log4js.getLogger('protractorLog4js');

        const protractorImageComparison = require('protractor-image-comparison');
        browser.protractorImageComparison = new protractorImageComparison(
            {
                autoSaveBaseline: true,    //saves the expected screenshot in Resources/BaselineScrShots upon first run
                baselineFolder: 'Resources/BaselineScrShots/',
                screenshotPath: 'Resources/ActualScrShots/'
            })

          },
    
        
        

  baseUrl: "https://opensource-demo.orangehrmlive.com"

    
};