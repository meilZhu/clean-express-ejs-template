#!/usr/bin/env node

/**
 * Module dependencies.
 */
var fs = require('fs');
const path = require('path');

writeFetchConfig();
writeFileConfig();

function writeFetchConfig() {
  const dtFetchUrl =
    process.env.npm_config_dtfetchurl || 'http://192.168.16.13:9501';
  console.log('__dirname', __dirname);
  fs.readFile(
    path.join(__dirname, './config/fetch-url.config.js'),
    'utf8',
    async function(err, data) {
      const content = `module.exports = "${dtFetchUrl}";`;
      await fs.writeFile(
        './config/fetch-url.config.js',
        content,
        'utf8',
        err => {
          if (err) throw err;
          console.log(
            'Success write fetch api done',
            process.env.npm_config_dtfetchurl
          );
        }
      );
    }
  );
}

function writeFileConfig(cb) {
  const dtFileUrl =
    process.env.npm_config_dtfileurl || 'http://192.168.16.13:9501';

  fs.readFile(
    path.join(__dirname, './config/file-url.config.js'),
    'utf8',
    async function(err, data) {
      const content = `module.exports = "${dtFileUrl}";`;
      await fs.writeFile(
        './config/file-url.config.js',
        content,
        'utf8',
        err => {
          if (err) throw err;
          console.log(
            'Success write file api done',
            process.env.npm_config_dtfileurl
          );
        }
      );
    }
  );
}
