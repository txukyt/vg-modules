import { getResource } from '@cookies/resources/resources'

const template = document.createElement("template");
template.innerHTML = `
    <style>
    @import " ${import.meta.env.VITE_WEBCOMPONENT_COOKIES}";
    </style>
    <section id="avisoCookies" class="container-cookies">
        <!-- AVISO COOKIES -->
        <p>${getResource("paragraph.one")}</p>
        <p>${getResource("paragraph.two")}</p>
        <form class="form form--inline" id="frmAvisoCookies" action="/we001/was/PrivacidadServlet">
            <button id="aceptarCookies" value="aceptar" class="btn" type="submit"><p>${getResource("button.accept")}</p></button> 
            <button id="rechazarCookies" value="rechazar" class="btn" type="reset">${getResource("button.decline")}</button> 
        </form>
        <a href="/wb021/was/contenidoAction.do?idioma=es&amp;uid=u65df3783_18d8c5a91a7__34fb" class="btn">${getResource("button.manage")}</a> 
    </section>`;

export default template;