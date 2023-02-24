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

## Supported features

- [x] Custom formatters
- [x] Ignored properties
- [ ] i18n
- [ ] Object preview
- [ ] Expand / collapse all
- [ ] Customizable theme
- [ ] Empty values
- [ ] Date formatting
- [ ] Agnostic Web component

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
