module.exports = {
  'default': [
    'connect',
    'open',
    'watch'
  ],

  'styles': [
    'sass',
    'autoprefixer',
    'html'
  ],

  'scripts': [
    'browserify',
    'modernizr',
    'html'
  ],

  'images': [
    'imagemin'
  ],

  'html': [
    'copy:html',
    'inline'
  ],

  'compile': [
    'clean',
    'sass',
    'autoprefixer',
    'browserify',
    'modernizr',
    'html',
    'images'
  ]
};
