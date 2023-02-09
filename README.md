# Modiffy

Meaningful objects diff


## Installation
```
npm install modiffy
```


## Usage
```
<Diff oldValue={{ name: 'diff' }} newValue={{ name: 'modiffy' }} expanded={true} />
```

See [example project](https://github.com/pschmucker/modiffy/tree/main/example)


## Local development
- npm install
- cd example && npm install
- cd node_modules/react && npm link
- cd ../../.. && npm link react
- Do modifications on lib
- npm run link
- cd example && npm link modiffy
- npm start


## Upcoming features
- Custom formatters
- Ignore properties
- Object preview
- i18n
- Expand / collapse all
- Customizable theme
- Empty values
- Date formatting
- Agnostic Web component


## Credits

Built by following this article:
https://betterprogramming.pub/how-to-create-and-publish-react-typescript-npm-package-with-demo-and-automated-build-80c40ec28aca
