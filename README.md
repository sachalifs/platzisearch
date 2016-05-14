![Logo de Platzi](https://static.platzi.com/static/images/logos/platzi@2x.fdf870da3a22.png)

_**Platzisearch —** Busca en el blog de Platzi_

## Características

* **ES 2016**. Utiliza `async` y `await` ([más al respecto aquí](https://jakearchibald.com/2014/es7-async-functions/)) de la mano de [Babel](https://babeljs.io)
* **Gulp**. Para generar el código utiliza Gulp
* **Commander**. Para la aplicación de consola ([más al respecto aquí](https://github.com/tj/commander.js))
* **ava**. Para correr los tests del futuro ([más al respecto aquí](https://github.com/sindresorhus/ava))


## Instalación

`npm install -g platzisearch`

## Uso

#### En consola:
![](https://cldup.com/PvkUR4jZw7.png)

#### Javascript API:
```js
import search from 'platzisearch'

async function () {
  const blogposts = await search('3d touch')
  
  console.log(blogposts[0])
  
  /**
   * Outputs:
   * {
   *   url: 'https://platzi.com/blog/3dtouch-forcetouch-web/',
   *   title: 'Agrega 3D Touch y Force Touch a tus proyectos web',
   *   author: 'Uriel Ramirez',
   *   date: 'marzo 3 2016'
   * }
   */
}
```
