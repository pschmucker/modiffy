import { configuration } from 'modiffy';
import { PersonFormatter } from "./formatter/PersonFormatter";
import { ReviewFormatter } from "./formatter/ReviewFormatter";
import i18n from './i18n';

configuration
    .addFormatter(new PersonFormatter())
    .addFormatter(new ReviewFormatter())
    .applyOptions({
        ignoredProperties: [
            'imdbId'
        ]
    })
    .usei18n(i18n, 'modiffy')
;
