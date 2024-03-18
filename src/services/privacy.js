import { Cookies as wbCookies } from '@cookies';
import { createElement, defineWebComponent } from '@/utils'

import Cookies from 'js-cookie'
/*createElement(ELEMENT_NAME);
defineWebComponent(ELEMENT_NAME, wbCookies); */

const valor_aceptada = 'aceptada';

export function isThirdPartyPrivacyAccepted(idioma) {
    const privacy = Cookies.get('privacidadTerceros');
    if (privacy !== undefined) {
      if (privacy === valor_aceptada) {
        return true;
      }
    }
    printPrivacityForm(idioma);
    return false;
}

  function printPrivacityForm(idioma) {

    createElement(wbCookies.ELEMENT_NAME);
    defineWebComponent(wbCookies.ELEMENT_NAME, wbCookies);

    // Se comprueba en el servlet si hay que solicitar la privacidad
    // Sólo se trata si no se había pintado ya previamente el formulario
    /*if (!mostrado) {
      mostrado = true;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', getUrl() + '?idioma=' + idioma, true);
      xhr.withCredentials = true;
      xhr.onload = function () {
        var resp = JSON.parse(xhr.responseText);
        console.log(resp);
        if (window.location.href.indexOf('uid=u65df3783_18d8c5a91a7__34fb') != -1 ||
          window.location.href.indexOf('uid=u60c04389_144007bfb26__7fc5') != -1) {
          return;
        }
        if (resp.result && resp.privacidad) {
          if (resp.result === 'OK' &&
          resp.privacidad === 'solicitar' && resp.html) {
            avisoCookies = document.createElement('div');
            avisoCookies.setAttribute('id', 'avisoCookies');
            avisoCookies.innerHTML = resp.html;
            avisoCookies = document.body.appendChild(avisoCookies);

            // idDivTerc = avisoCookies.querySelector('#idDivTerc');
            // idChkTerc = avisoCookies.querySelector('#idChkTerc');
            // btnOk = avisoCookies.querySelector('#btnOk');
            btnAceptar = avisoCookies.querySelector('#aceptarCookies');
            btnRechazar = avisoCookies.querySelector('#rechazarCookies');

            frmAvisoCookies = avisoCookies.querySelector('#frmAvisoCookies');
            frmAvisoCookies.setAttribute('action', getUrl());
            // idChkConf = avisoCookies.querySelector('#idChkConf');
            // idChkConf.addEventListener('change', cambiarPrivacidadConf);
            frmAvisoCookies.onsubmit = function (event) {
              sendForm(event.submitter.value === 'aceptar');
              return false;
            };
          }
        }
      };
      xhr.onerror = function (e) {
        console.error(e);
        // vg.alert.error(e);
      };
      xhr.send();
    } */
  }