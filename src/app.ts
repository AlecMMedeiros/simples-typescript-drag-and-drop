
function autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn
    }
  }
  return newDescriptor;
}

class ProjectInput {
  private _templateElement: HTMLTemplateElement;
  private _hostElement: HTMLDivElement;
  private _element: HTMLFormElement;
  private _tittleInput: HTMLInputElement;
  private _descriptionInput: HTMLInputElement;
  private _peopleInput: HTMLInputElement;

  constructor() {
    this._templateElement = <HTMLTemplateElement>(
      document.getElementById("project-input")!
    );
    this._hostElement = <HTMLDivElement>document.getElementById("app")!;

    const importedHtmlContent = document.importNode(
      this._templateElement.content,
      true
    );
    this._element = <HTMLFormElement>importedHtmlContent.firstElementChild;
    this._element.id = 'user-input';

    this._tittleInput = <HTMLInputElement>this._element.querySelector('#title');
    this._descriptionInput = <HTMLInputElement>this._element.querySelector('#description');
    this._peopleInput = <HTMLInputElement>this._element.querySelector('#people');

    this.configure();
    this.attach();
  }

  @autobind
  private handleSubmit(event: Event) {
    event.preventDefault();
    console.log(this._tittleInput.value)

  }

  private configure(){
    this._element.addEventListener('submit', this.handleSubmit);
  }

  private attach() {
    this._hostElement.insertAdjacentElement("afterbegin", this._element);
  }
}

const renderProject = new ProjectInput();
