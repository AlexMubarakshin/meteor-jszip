jszip
=============

A Zip package for Meteor. Create, read and edit .zip files on the client side.

This package packs [JSZip][1] and adds a `saveAs` method to the zip instance for convenience.


##Install
```
meteor add silentcicero:jszip
```


##Documnentation

Full documentation of the API at the original package [JSZip][2].


##Usage
```js
var zip = new JSZip();
zip.file("Hello.txt", "Hello World\n");
var img = zip.folder("images");
img.file("smile.gif", imgData, {base64: true});
var content = zip.generate({type:"blob"});

// see FileSaver.js
saveAs(content, "example.zip");
```

In an older Meteor version (before 0.6.5?) you could get to the public folder via `Meteor.chroot`.

For creating a zip on the fly, here is an example with an [Iron Router][3] route:

```js
Router.map(function() {
  this.route('zip', {
    where: 'server',
    path: 'zip',
    action: function() {
      var self = this;
            
      // Create zip
      var zip = new JSZip();
      
      // Add a file to the zip
      zip.file('textfile.txt', 'Hello World');
      
      // Generate zip stream
      var output = zip.generate({
        type:        "nodebuffer",
        compression: "DEFLATE"
      });
      
      // Set headers
      self.response.setHeader("Content-Type", "application/octet-stream");
      self.response.setHeader("Content-disposition", "attachment; filename=filename.zip");
      self.response.writeHead(200);
      
      // Send content
      self.response.end(output);
    }
  });
});
```

  [1]: http://stuk.github.io/jszip/
  [2]: http://stuk.github.io/jszip/documentation/api_jszip.html
  [3]: https://github.com/EventedMind/iron-router
