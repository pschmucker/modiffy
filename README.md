# Modiffy

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

**Meaningful objects diff**

Provides a React component to easily view all meaningful differences between 2 objects.

[**Live demo**](https://pschmucker.github.io/modiffy/)

<br>

## Installation

```bash
npm install modiffy
```

<br>

## Usage

```js
<Diff oldValue={{ name: 'diff' }} newValue={{ name: 'modiffy' }} expanded={true} />
```

<br>

## Supported features

| | Feature | Since |
| --- | --- | --- |
| &check; | [Custom formatters](#markdown-header-formatters) | [![Formatter][formatter-version]][formatter-url] |
| &check; | [Ignored properties](#markdown-header-ignored-properties) | [![Ignored properties][ignored-properties-version]][ignored-properties-url] |
| &check; | [i18n](#markdown-header-i18n) | [![i18n][i18n-version]][i18n-url] |
| | Object preview |
| | Expand / collapse all |
| | Customizable theme |
| | Empty values |
| | Date formatting |
| | Agnostic Web component |

<br>

## Configuration

### Formatters

When a changed node is not a simple value (like a number, string or boolean), the library displays an "object" badge.
You can display something more meaningful by implementing your own formatter:

```js
import { Formatter } from 'modiffy'

export class PersonFormatter implements Formatter {

    matches(value: any): boolean {
        return Object.hasOwn(value ?? {}, 'firstName');
    }
    
    format(value: any): JSX.Element {
        return value.firstName;
    }
}
```

```js
import { configuration } from 'modiffy';
import { PersonFormatter } from "./PersonFormatter";

configuration.addFormatter(new PersonFormatter());
```

```js
<Diff expanded={true}
    oldValue={ [] }
    newValue={ [{ firstName: 'Phil', age: 35 }] }
/>
```

<br>

### Ignored properties

Some properties may be irrelevant like technical identifiers for endusers. 
You can ignore such properties with the **ignoredProperties** option:

```js
import { configuration } from 'modiffy';

configuration.applyOptions({
    ignoredProperties: [
        'id'
    ]
});
```

<br>

### i18n

By default, labels in the **&lt;Diff&gt;** component are written in english and properties are not translated.
If your application uses the [react-i18next](https://github.com/i18next/react-i18next) library, you can adapt the component's language
to the endusers and provide your own translations for the properties.

The translation key for your properties should be formatted like this: **property.*&lt;name of your property&gt;***

```js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const i18nResources = {
    en: {
        translation: {
            "property": {
                "age": "age",
                "firstName": "first name"
            }
        }
    },
    fr: {
        translation: {
            "property": {
                "age": "âge",
                "firstName": "prénom"
            }
        }
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: i18nResources,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;

```

```js
import { configuration } from 'modiffy';
import i18n from './i18n';

configuration.usei18n(i18n);
```

If you want to put translations in a dedicated [namespace](https://www.i18next.com/principles/namespaces) to avoid conflicts, you must specify in the configuration which namespace the modiffy library has to use (*translation* will be used if not specified):

```js
import { configuration } from 'modiffy';
import i18n from './i18n';

configuration.usei18n(i18n, 'modiffy');
```

<br>

## Local development

```bash
npm install
cd example && npm install
cd node_modules/react && npm link
cd ../../.. && npm link react
npm run link
cd example && npm link modiffy
npm start
```

<br>

## Credits

Built by following this article:
https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca



[npm-url]: https://www.npmjs.com/package/modiffy
[npm-image]: https://img.shields.io/npm/v/modiffy
[github-license]: https://img.shields.io/github/license/pschmucker/modiffy
[github-license-url]: https://github.com/pschmucker/modiffy/blob/master/LICENSE
[github-build]: https://github.com/pschmucker/modiffy/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/pschmucker/modiffy/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/modiffy
[formatter-version]: https://img.shields.io/static/v1?label=modiffy&message=v1.1.0&color=blue
[formatter-url]: https://github.com/pschmucker/modiffy/releases/tag/v1.1.0
[ignored-properties-version]: https://img.shields.io/static/v1?label=modiffy&message=v1.2.0&color=blue
[ignored-properties-url]: https://github.com/pschmucker/modiffy/releases/tag/v1.2.0
[i18n-version]: https://img.shields.io/static/v1?label=modiffy&message=v1.3.0&color=blue
[i18n-url]: https://github.com/pschmucker/modiffy/releases/tag/v1.3.0
