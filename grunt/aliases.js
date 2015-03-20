module.exports = {
  'default': [
    'connect',
    'notify:server',
    'watch'
  ],

  'styles': [
    'newer:sass_globbing',
    'newer:sass',
    'newer:cssUrlEmbed',
    'newer:autoprefixer',
    'newer:combine_mq',
    'notify:styles',
    'html'
  ],

  'scripts': [
    'newer:browserify',
    'newer:modernizr',
    'notify:scripts',
    'html'
  ],

  'images': [
    'newer:imagemin',
    'notify:images'
  ],

  'html': [
    'newer:copy:html',
    'newer:inline',
    'notify:html'
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
    'html',
    'notify:build'
  ]
};
