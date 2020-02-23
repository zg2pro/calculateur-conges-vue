# calculateur-conges-vue

The project has been generated following this model : https://dev.to/georgehanson/building-vuejs-applications-with-typescript-1j2n : vue create calculateur-conges-vue 
tout en manuel

## Generation of a vuejs project compatible with NestJS

1- 
```bash
$ npm install -g @vue/cli
$ vue create vue-app
```

2- Using your arrow keys, choose `Manually select features`.

3- Next, you just need to ensure you have selected the `TypeScript`, VueX, Router options. 

4- Select `class-style component syntax`

5-
```bash
$ npm install --save vue-template-loader webpack-stream cache-manager class-transformer class-validator core-js vuetify vue-typescript-inject
```

6-To add your nest API also add this line in the package.json script :
```js
"scripts": {
    "update:zg2pro-org": "npm install @your-org/app-api@latest --save"
```
your-org being your subsection in your npm registry, and app-api the artifact id of your nestjs API.

7-Then go to the tsconfig.json and check the following properties :
```js
    "importHelpers": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "allowSyntheticDefaultImports": true,
```

8-Enable the dependency injection in your vuejs app (the engine will come from NestJS)

8.1- Add the `plugin/injector.ts` file with:
```js
import Vue from 'vue';
import 'reflect-metadata';
import VueTypeScriptInject from 'vue-typescript-inject';

Vue.use(VueTypeScriptInject);
```

8.2- Add the import in `main.ts`:
```js
import './plugins/injector';
```

## Make an old js project become Typescript

Beyond the tsconfig file, notice how the `<script>` tags, bear the `lang="ts"` attribute, it boils down to this. Just adapt your code with these elements and the above libs, and you'll have a ts enabled project.
