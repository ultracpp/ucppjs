/*

Author : Chauhan Pruthviraj

Website : https://ultracpp.github.io/ucppjs/;

Copyright : Copyright By ultracpp

Email : ultracpp@vk.com

note : this is a javascript library 

*/
``
class ultracpp {
    constructor(elementName = "div") {
        this.element = document.createElement(elementName);
        this.parent = null;
        this.data = null;
    }
    addAttribute(attributeName, attributeValue) {
        this.element.setAttribute(attributeName, attributeValue);
    }
    addEvent(eventName, func) {
        this.element.addEventListener(eventName, func);
    }
    insertData(data) {
        this.element.innerHTML = data;
        this.data = data;
    }
    insertStyle(style = {}) {
        for (let prop in style) {
            this.element.style[prop] = style[prop];
        }
    }
    insertInto(parentElement) {
        parentElement.insertChild(this);
    }
    insertChild(element) {
        this.element.append(element.element);
    }
    clearData() {
        this.element.innerHTML = null;
    }
    insertFirstChild(parentElement, childElement) {
        parentElement.clearData();
        parentElement.insertChild(childElement);
    }
    importData(data, removeScript = true) {
        let script = new zenic("script");
        script.addAttribute("type", "module");
        this.insertChild(script);
        script.addData(data);
        if (removeScript === true) {
            script.clear();
        }
    }

    static runScript(filePath, targetElement) {

        let script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.src = filePath;

        let element = document.createElement("shiva-script-runner");
        document.querySelector(targetElement).append(element)
        element.append(script)
        element.parentNode.removeChild(element);
        return 0;
    }

    render(where = ".root") {
        document.querySelector(where).append(this.element);
    }
    clear() {
        this.element.parentElement.removeChild(this.element);
        this.element = null;
    }
}

export { ultracpp }
