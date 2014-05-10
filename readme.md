# webmontag-kassel.de – Website

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

## Dependencies

The Website is built with Grunt and uses Bower as front-end package manager. Therefore you will need to install some stuff, if you haven't already.

Majors:

* Node.js
* Git

After you've set this stuff up please run:

	$ npm install -g grunt-cli bower

This installs the Grunt command line tools and bower.
Afterwards please run:

	$ npm install

in the project's directory.

This will install all the things you need for running the grunt-tasks
automatically and all Bower components defined in `bower.json`.

Also it will create a folder `bower_components` which holds all vendor dependencies
managed by Bower.

## Creating a Build

Please use [Grunt.js](https://github.com/gruntjs/grunt) for building a
production-state of the website. The `Gruntfile.js` has tasks for concatenating and minifing CSS and JavaScript.

Just run 

	$ grunt

in the project's directory to run default built task.

	$ grunt watch

to watch files and compile, minify, concat etc. automatically after saving files.

Additional information on this project is stored in `package.json`.

## License

Please be aware of the licenses of the components we use in this project.
Everything else that has been developed by the contributions to this project is under [MIT License](LICENSE.md).