#!/usr/bin/env node

'use strict';

var program = require('commander'),
  downloadStuff = require('./authenticate.js'),
  // extractStuff = require('./extract.js'),
  path = require('path'),
  fs = require('fs');

  function configFileDir(){
    var configPath = path.join(__dirname, '../config');
    console.log(configPath)
    fs.readdirSync(configPath, function(e,d){
      if(e) return e;
      return d;
      console.log(e)
      console.log(d)
    });
  }

//add config file to your app
program
  .command('add-config [inPath] [name]')
  .description('this allows you to add a config file')
  // .option("-t, --types <type>", "file types you want to download. string or array of strings")
  .action(function(inPath) {

    //check to make sure the inPath is a file
    fs.access(inPath, fs.W_OK, function(err) {
      if (err) console.log(err)

      //set global config file
    //   var config = require(inPath);
    //   console.log(config)
    })

    // downloadStuff.downloadAll(inURL, outDIR, options);
  });
program
  .command('list-config')
  .description('this allows you to list config files you have saved')
  // .option("-t, --types <type>", "file types you want to download. string or array of strings")
  .action(function() {
    //check to make sure the outURL is writable by the user
    configFileDir();

    // downloadStuff.downloadAll(inURL, outDIR, options);
  });
program
    .command('delete-config [name]')
  .description('this allows you to delete a config file by name')
  // .option("-t, --types <type>", "file types you want to download. string or array of strings")
  .action(function(inPath) {
    //check to make sure the outURL is writable by the user
    fs.access(inPath, fs.W_OK, function(err) {
      if (err) console.log(err)

      //set global config file
      var config = require(inPath);
      console.log(config)
    })

    // downloadStuff.downloadAll(inURL, outDIR, options);
  });

//go through all zips in a folder and extract the data
// program
//   .command('extract [inDIR]')
//   .description('this looks at an input url and downloads all the zip files on ' +
//     'that page to the destination folder of your choice')
//   .option("-f, --flatten", "extracted files will be taken out of folders and")
//   .action(function(inDIR, options) {
//     if (options.flatten) {
//       console.log('flatten flag set to ', options.flatten)
//     }
//     extractStuff.extractAll(inDIR);
//   });

program.parse(process.argv);
