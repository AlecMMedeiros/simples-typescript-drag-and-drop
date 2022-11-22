"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autobind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    const newDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return newDescriptor;
}
class ProjectInput {
    constructor() {
        this._templateElement = (document.getElementById("project-input"));
        this._hostElement = document.getElementById("app");
        const importedHtmlContent = document.importNode(this._templateElement.content, true);
        this._element = importedHtmlContent.firstElementChild;
        this._element.id = 'user-input';
        this._tittleInput = this._element.querySelector('#title');
        this._descriptionInput = this._element.querySelector('#description');
        this._peopleInput = this._element.querySelector('#people');
        this.configure();
        this.attach();
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this._tittleInput.value);
    }
    configure() {
        this._element.addEventListener('submit', this.handleSubmit);
    }
    attach() {
        this._hostElement.insertAdjacentElement("afterbegin", this._element);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "handleSubmit", null);
const renderProject = new ProjectInput();
