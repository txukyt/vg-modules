import template from "@cookies/template";

const ELEMENT_NAME = 'vg-cookies';

export class Cookies extends HTMLElement {

  static get ELEMENT_NAME() {
    return ELEMENT_NAME;
  }

  constructor() {
      super();
      
      const templateContent = template.content;
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(templateContent.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#frmAvisoCookies').addEventListener('submit', () => console.log('aceptada'));
  }

  disconnectedCallback() {
    
  }
}