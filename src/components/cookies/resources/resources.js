import Polyglot from 'node-polyglot';

import { getLang } from '@/utils';
import languages from '@cookies/resources'

const language = getLang();

const polyglot = new Polyglot({
    locale: language, 
    phrases: languages[language] || languages['es']
});

export function getResource(nombre) {
    return polyglot.t(nombre);
};