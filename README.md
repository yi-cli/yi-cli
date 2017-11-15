## yi-cli

A simple CLI for scaffolding projects.

### Installation  ➡ [Document ✈](https://yi-cli.github.io/yi-cli/)

Prerequisites: `node`、`npm`、`git`

```js
$ npm install -g yi-cli
```

### appliance

```js
$ yi <template-name> <project-name>
```

example:

```js
$ yi vue-simple project-test
```
The above command pull the template from yi-cli/vue-simple, prompts for some information, and generates the project at ./project-test/.

### My Templates

It's all my work in peacetime some of the templates are often used, These include *vue*、 *react* multi page and single page and so on. you can check project templates [yi-cli-templates](https://github.com/yi-cli)

Current available templates include:

- [vue-simple](https://github.com/yi-cli/vue-simple) - A Vue Single page program

- [vue-multiple](https://github.com/yi-cli/vue-multiple) - A Vue Msultiple page program

- [react-simple](https://github.com/yi-cli/react-simple) - A React Single program

- [react-multiple](https://github.com/yi-cli/react-multiple) - A React Msultiple page program




### Vue Templates

You can use yi-cli generate vue official templates. you can check all official project templates [vuejs-templates organization](https://github.com/vuejs-templates) you will run `yi <template-name> <project-name>`. For Example `yi vuejs-templates/webpack project-name`

Current available templates include:

- [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack) - full-featured-webpack

- [vuejs-templates/webpack-simple](https://github.com/vuejs-templates/webpack-simple) - simple-webpack

- [vuejs-templates/browserify](https://github.com/vuejs-templates/browserify) - full-featured-browserify

- [vuejs-templates/pwa](https://github.com/vuejs-templates/pwa) - PWA template

- [vuejs-templates/simple](https://github.com/vuejs-templates/simple) - simplest

### License
[MIT](https://github.com/yi-cli/yi-cli/blob/master/LICENSE)