import { configuration } from 'modiffy';
import { PersonFormatter } from "./formatter/PersonFormatter";
import { ReviewFormatter } from "./formatter/ReviewFormatter";

configuration
    .applyOptions({
        ignoredProperties: [
            'imdbId'
        ]
    })
    .addFormatter(new PersonFormatter())
    .addFormatter(new ReviewFormatter())
;
