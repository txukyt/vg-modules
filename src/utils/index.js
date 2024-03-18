export function getLang() {
    return document.documentElement.lang || 'es';
}

export function createElement(name) {
    const element = document.createElement(name);
    document.body.appendChild(element);
}

export function defineWebComponent(name, constructor) {
    customElements.define(name, constructor);
  }
    