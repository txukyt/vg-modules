import { getResource } from '@/cookies/resources/resources'

const template = document.createElement("template");
template.innerHTML = `
    <style>
    @import " ${import.meta.env.VITE_WEBCOMPONENT_COOKIES}";
    </style>
    <div id="avisoCookies">
    <!-- Cabecera aviso cookies -->
        <section class="container content">
            <div id="avisoCookiesIzq">
                <form class="form form--inline" id="frmAvisoCookies" action="/we001/was/PrivacidadServlet">
                    <p>${getResource("paragraph.one")}</p>
                    <p>${getResource("paragraph.two")}</p>
                    <div>
                        <button id="aceptarCookies" value="aceptar" class="form__submit btn" type="submit"><p>${getResource("button.accept")}</p></button> 
                        <button id="rechazarCookies" value="rechazar" class="form__submit btn" type="submit">${getResource("button.decline")}</button> 
                        <a href="/wb021/was/contenidoAction.do?idioma=es&amp;uid=u65df3783_18d8c5a91a7__34fb" class="btn">${getResource("button.manage")}</a> 
                    </div>
                </form>
            </div>
        </section>
    </div>`;

export class Cookies extends HTMLElement {
  constructor() {
      super();
      
      const templateContent = template.content;
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(templateContent.cloneNode(true));
  }
}