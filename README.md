[![license](https://img.shields.io/badge/license-BSD--3--Clause-blue.svg)](https://img.shields.io/badge/license-BSD--3--Clause-blue.svg)

# <PLUGIN-NAME>

<PLUGIN-DESCRIPTION>

## Building:

```
$ npm install
$ npm run build
```

## Usage

You can use if from JSDelivr `https://cdn.jsdelivr.net/<YOUR-MODULE>/latest/<PLUGIN-NAME>.min.js` or npm package.

```html
<script>
    var player = new Clappr.Player({
      parentId: '#player',
      plugins: [<PLUGIN-MODULE-NAME>],
      source: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      height: 360,
      width: 640,
    })
</script>
```
