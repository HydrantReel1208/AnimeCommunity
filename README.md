# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) / Webstorm

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
![image](https://user-images.githubusercontent.com/91511075/148640873-34e338d5-8ae9-46da-bd9e-5c38ce5b3107.png)
![image](https://user-images.githubusercontent.com/91511075/150359750-96aafb14-acd0-46f8-b2bd-77537d439704.png)
![image](https://user-images.githubusercontent.com/91511075/150360227-276ea596-fcb3-4a9c-bc15-3af67a452b5c.png)

