module.exports = {
  'default': [
    'connect',
    'watch'
  ],

  'styles': [
    'sass_globbing',
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

  'build': [
    'clean',
    'images',
    'sass_globbing',
    'sass',
    'cssUrlEmbed',
    'autoprefixer',
    'combine_mq',
    'browserify',
    'modernizr',
    'html'
  ]
};
