Package.describe({
  summary: "Create, read and edit .zip files on the client",
  version: "0.0.4",
  name: 'silentcicero:jszip',
  git: "https://github.com/silentcicero/meteor-jszip.git",
  environments: 'client',
  documentation: 'README.md',
});

Package.on_use(function (api) {
  api.versionsFrom('1.0.3.2');
    
  api.export(['JSZip'], ['client']);

  api.add_files('lib/jszip.js', 'client');
  api.add_files('lib/saveas.js', 'client');
  api.add_files('package-init.js', 'client');
});
