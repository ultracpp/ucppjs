/*

Author : Chauhan Pruthviraj

Website : https://ultracpp.github.io/ucppjs/;

Copyright : Copyright By ultracpp

Email : ultracpp@vk.com

note : this is a javascript library 

*/
``
class ultracpp {
    /**
     * 
     * @constructor
     * @param {string} elementName enter an element name which you want to create such h1,div,span etc 
    */
    constructor(elementName = "div") {
        // this function is a constructor which creates div element by default
        this.element = document.createElement(elementName);
        this.parent = null;
        this.data = null;
    }
    /**
     * 
     * @param {string} attributeName enter attribute you want to apply element
     * @param {string} attributeValue enter the value of attribute you want to apply
     */
    addAttribute(attributeName, attributeValue) {
        // give attribute to your element through invoking method
        this.element.setAttribute(attributeName, attributeValue);
    }
    /**
     * 
     * @param {string} eventName add event name such click, mouseover etc
     * @param {string} func add function that you want to add as event
     */
    addEvent(eventName, func) {
        // add event for your element through invoking function;
        this.element.addEventListener(eventName, func);
    }
    /**
     * 
     * @param {string} data add plain text data into element through invoking this method
     */
    insertData(data) {
        this.element.innerHTML = data;
        this.data = data;
    }
    /**
     * 
     * @param {object} style apply style on your element, passing object which contains style such 
     * {height:"100px",width:"200px",color:"red"}; ..etc
     */
    insertStyle(style = {}) {
        for (let prop in style) {
            this.element.style[prop] = style[prop];
        }
    }
    /**
     * 
     * @param {HTMLElement} parentElement enter object where you want to mount your current element.
     * for example you have created two element like this
     * 
     * let element1 = new ultracpp;
     * let element2 = new ultracpp;
     * 
     * if you want to insert element2 into element1 then you can invoke this method
     * 
     * element2.insertInto(element1);
     * 
     * this method inserts element2 into element1
     */
    insertInto(parentElement) {
        parentElement.insertChild(this);
    }
    /**
     * 
     * @param {HTMLElement} element enter child element. for example you have created two elements of ultracpp class 
     * 
     * and you want to insert child element into parent element then you can use this method like this
     * 
     * let parent = new ultracpp;
     * 
     * let child = new ultracpp;
     * 
     * parent.insertChild(child);
     * 
     * insertChild method takes parameter of child element which will be inserted into parent element
     * 
     * this method should be run on parent element. 
     * 
     */
    insertChild(element) {
        this.element.append(element.element);
    }
    /**
     * clear Data method erase all the data of element 
     */
    clearData() {
        this.element.innerHTML = null;
    }
    insertFirstChild(parentElement, childElement) {
        parentElement.clearData();
        parentElement.insertChild(childElement);
    }
    /**
     * 
     * @param {string} data this parameter executes script, to import data from any file you can use this method
     * 
     * for example assume that there is a file name is yandex.js which contains data variable, that is exported 
     * now you can import the data from yandex.js file through invoking this method. to do this you have to run following code
     * 
     * let element = new ultracpp; // created new element
     * element.importData('import {data} from './yandex.js');
     * @param {bool} removeScript it is by default true, this parameter removes the script from dom so you can't see this script
     */
    importData(data, removeScript = true) {
        let script = new zenic("script");
        script.addAttribute("type", "module");
        this.insertChild(script);
        script.addData(data);
        if (removeScript === true) {
            script.clear();
        }
    }

    /**
     * 
     * @param {string} filePath enter the path name of javascript file, if file path is correct then this function executes that javascript
     * @param {string} targetElement enter element class name where script will be injected and run and then disappear 
     * 
     * for example there is a file name is yandex.js which is located at  /data/yandex.js from root. and if you want to execute the script of yandex.js at header element then you can do this by following way
     * 
     * ultracpp::runScript('./data/yandex.js/','.header');
     * 
     * this method creates script, then run script from file whose path you pass through argument, then the script will be injected for a few time into target element , after script executed it will be removed from dom
     */
    static runScript(filePath, targetElement) {

        let script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.src = filePath;

        let element = document.createElement("shiva-script-runner");
        document.querySelector(targetElement).append(element)
        element.append(script)
        element.parentNode.removeChild(element);
    }
    /**
     * 
     * @param {string} where enter the name of class of element where you want to render element
     * for example there is a body and it's attribute of class is main-screen and you want to render your element at body then you can do this by following way
     * 
     * let element = new ultracpp;
     * element.render(".main-screen");
     * 
     * this method mounts element at body
     */
    render(where = ".root") {
        document.querySelector(where).append(this.element);
    }
    /**
     * clear method remove the element from dom and clear memory
     */
    clear() {
        this.element.parentElement.removeChild(this.element);
        this.element = null;
    }
}

export { ultracpp }
