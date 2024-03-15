export function defineWebComponent(nombre, constructor) {
  customElements.define(nombre, constructor);
}
  