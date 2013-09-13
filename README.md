# generator-trabian-webapp

This is an application that "does what it says on the tin." Use it to generate an instance of trabian-webapp into folder. Generator-trabian-webapp uses [Yeoman](http://yeoman.io) to generate trabian-webapp, so just cloning this repo doesn't do much.

## Getting Started

First, if you haven't already, install yeoman from the [npm](https://npmjs.org) package repository.

```
$ npm install -g yo
```

Next, to install generator-trabian-webapp from npm, run:

```
$ npm install -g git://github.com/trabian/generator-trabian-webapp.git
```

Now, you can generate a copy of trabian-webapp. Let's make a directory to create it in, and then change to that directory:

```
$ mkdir a-new-trabian-webapp
$ cd a-new-trabian-webapp
```

Now, let's generate the webapp itself. It's as easy as:

```
$ yo trabian-webapp
```

Now you're ready to go. 

## Verifying

Now that you've created an instance of trabian-webapp locally, you can read its README.md to configure it. But just to make sure everything was created correctly, try 

```
$ grunt test
```

Of course, you must have [grunt](http://gruntjs.com)'s command line interface installed for that to work. If you don't, you'll have to run

```
$ npm install -g grunt-cli
```

## Having problems?
Let us know what's going wrong (including error messages generated) by [reporting an issue](https://github.com/trabian/generator-trabian-webapp/issues).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
