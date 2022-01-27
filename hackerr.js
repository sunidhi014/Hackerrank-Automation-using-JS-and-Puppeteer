let puppeteer = require('puppeteer')
const codeObj = require('./codes')

let page;

let browseropenPromise = puppeteer.launch({headless: false,});

browseropenPromise.then(function(browser) {
    let pagearrpromise = browser.pages();
    return pagearrpromise;
})
.then(function(pages) {
    page = pages[0];
    return page.goto('https://www.hackerrank.com/auth/login');
})
.then(function() {
    return page.waitForSelector('input[name="username"]');
})
.then(function() {
    return page.type('input[name="username"]', 'Your Email id');
    //return page.type('input[name="username"]', 'abc@gmail.com');
})
.then(function() {
    return page.type('input[name="password"]', 'Your Password');
    //return page.type('input[name="password"]', 'xyz');
})
.then(function() {
    return page.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
})
.then(function() {
    return page.waitForSelector('div[data-automation = "data-structures"]');
})
.then(function() {
    return page.click('div[data-automation = "data-structures"]');
})
.then(function() {
    return page.waitForSelector('.ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled');
})
.then(function(){
    return page.click('.ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled');
})
.then(function() {
    return page.waitForSelector('.checkbox-wrap input[type="checkbox"]');
})
.then(function(){
    let waitfor=page.waitForSelector('div.css-1hwfws3',{visible: true})
    return waitfor;
})
.then(function(){
    return page.click('div.css-1hwfws3');
})
.then(function(){
    //select language in which you want to code
    return page.type('div.css-1hwfws3','PYTHON 3');
})
.then(function(){
    //press enter
    let pressenter=page.keyboard.press("Enter");
    return pressenter;
})
.then(function(){
    return page.click('.checkbox-wrap input[type="checkbox"]');
})
.then(function(){
    return page.type('.checkbox-wrap input[type="checkbox"]',codeObj.answers);
})
.then(function(){
    // to select text use keyboard 
    let pressEnterPromise = page.keyboard.down('Control');
    let pressEnterPromise1 = page.keyboard.press('A');
    let totalkey = pressEnterPromise+pressEnterPromise1;
    return totalkey;
})
.then(function(){
    // to cut text use keyboard 
    let pressEnterPromise = page.keyboard.down('Control');
    let pressEnterPromise1 = page.keyboard.press('X');
    let totalkey = pressEnterPromise+pressEnterPromise1;
    return totalkey;
})
.then(function(){
    return page.click('.monaco-editor.no-user-select.vs');
})
.then(function(){
    let pressEnterPromise = page.keyboard.down('Control');
    let pressA = page.keyboard.press('A')
    let pressEnterPromise1 = page.keyboard.press('V');
    let totalkey = pressEnterPromise+pressA+pressEnterPromise1;
    return totalkey;
})
.then(function(){
    return page.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled')
})
