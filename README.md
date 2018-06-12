# [Samer Buna] Learning Full-Stack JavaScript Development: MongoDB, Node and React [2016, ENG]

<br/>
<hr/>
<br/>

**Original src:**

https://github.com/jscomplete/learn-fullstack-javascript

<br/>
<hr/>
<br/>

## My env

<br/>

**Host**

    $ lsb_release -a
    No LSB modules are available.
    Distributor ID:	Ubuntu
    Description:	Ubuntu 14.04.5 LTS
    Release:	14.04
    Codename:	trusty

<br/>

    $ docker -v
    Docker version 18.03.0-ce, build 0520e24

<br/>

**Inside container:**

<br/>

    $ node -v
    v10.4.0

<br/>

    $ npm -v
    6.1.0

<br/>
<hr/>
<br/>

<br/>

**Visual Studio Code Settings:**

    {
        "editor.fontSize": 26,
        "editor.tabSize": 2,
        "editor.wordWrap": "on",
        "terminal.integrated.fontSize": 26,
        "emmet.includeLanguages": {
            "javascript": "javascriptreact"
        },
        "emmet.syntaxProfiles": {
            "javascript": "jsx"
        },
        "editor.formatOnSave": true,
        "[ejs]": {
            "editor.formatOnSave": true
        },
        "files.autoSave": "afterDelay",
        "files.autoSaveDelay": 10000,
        "prettier.singleQuote": true
    }

<br/>

**Visual Studio Code Plugins:**

- ES7 React/Redux/React-Native/JS snippets
- Bracket Pair Colorizer
- Prettier formatter for Visual Studio Code
- Live Server
- Node.js Modules Intellisense
- EJS Language Support
- VS Code ESLint extension

<br/>
<hr/>
<br/>

### 004 Setup and configurations

    $ npm init -y

    $ npm install --save express
    $ npm install --save mongodb
    $ npm install --save react react-dom

    $ npm install --save-dev nodemon
    $ npm install --save-dev webpac webpack-cli
    $ npm install --save-dev babel-cli babel-loader babel-preset-es2015 babel-preset-stage-2 babel-preset-react
    $ npm install --save-dev eslint eslint-plugin-react babel-eslint

<br/>

### 005 Node modules

<br/>

### 006 The HTTP-HTTPS modules

<br/>

### 007 Creating an Express server

    $ npm start

http://localhost/api

<br/>

![Application](/img/pic-01.png?raw=true)

<br/>

### 008 Using the EJS template language

    $ npm install --save ejs

<br/>

### 009 React elements and JSX

    $ npm run dev
    $ npm run start

<br/>

![Application](/img/pic-02.png?raw=true)

<br/>

### 010 React components

<br/>

### 011 Component composability

<br/>

### 012 Components with modules

<br/>

### 013 Component state

<br/>

### 014 Component life cycle

<br/>

### 015 Loading the test data

    $ npm install --save json-loader

<br/>

### 016 Displaying a list of objects

<br/>

![Application](/img/pic-03.png?raw=true)

<br/><br/>

---

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
