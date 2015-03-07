module.exports = {
  'default': [
    'connect',
    'open',
    'watch'
  ],

  'styles': [
    'sass',
    'cssUrlEmbed',
    'autoprefixer',
    'combine_mq',
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
    'images',
    'sass',
    'cssUrlEmbed',
    'autoprefixer',
    'combine_mq',
    'browserify',
    'modernizr',
    'html'
  ]
};
