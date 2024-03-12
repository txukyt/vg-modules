
const template = document.createElement("template");
template.innerHTML = `
    <style>
    @import "https://localhost.vitoria-gasteiz.org/http/comun/j38-01/css/web-component.css";
    </style>
    <div id="avisoCookies">
    <!-- Cabecera aviso cookies -->
        <section class="container content">
            <div id="avisoCookiesIzq">
                <form class="form form--inline" id="frmAvisoCookies" action="https://dwww.vitoria-gasteiz.org/we001/was/PrivacidadServlet">
                    <p>En el Ayuntamiento utilizamos cookies propias esenciales para el funcionamiento de nuestro sitio web.</p>
                    <p>Además, si nos das tu consentimiento para utilizar cookies opcionales de entidades externas podremos medir el tráfico y conocer tus hábitos de navegación en nuestra web, y así, mejorar nuestros servicios.</p>
                    <div>
                        <button id="aceptarCookies" value="aceptar" class="form__submit btn" type="submit">Aceptar cookies opcionales</button> 
                        <button id="rechazarCookies" value="rechazar" class="form__submit btn" type="submit">Rechazar cookies opcionales</button> 
                        <a href="https://dwww.vitoria-gasteiz.org/wb021/was/contenidoAction.do?idioma=es&amp;uid=u65df3783_18d8c5a91a7__34fb" class="btn">Administrar cookies</a> 
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

      (async () => {

        await import('cookies.js');
      
        console.log(docCookies.getItem('privacidadConfiguracion'));
      
      })();
  }
}