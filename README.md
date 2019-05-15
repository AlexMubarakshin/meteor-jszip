jszip
=============

A Zip package for Meteor. Create, read and edit .zip files on the client side.

This package packs [JSZip][1] and adds a `saveAs` method to the zip instance for convenience.


## Install
```
meteor add silentcicero:jszip
```


## Documnentation

Full documentation of the API at the original package [JSZip][2].


## Usage
```js
var zip = new JSZip();
zip.file("Hello.txt", "Hello World\n");
var img = zip.folder("images");
img.file("smile.gif", imgData, {base64: true});
var content = zip.generate({type:"blob"});

// see FileSaver.js
saveAs(content, "example.zip");
```
