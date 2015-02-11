module.exports = {
  configFiles: {
    files: ['Gruntfile.js'],
    options: {
      reload: true
    }
  },

  scripts: {
    files: [
      './src/javascripts/**/*.js'
    ],
    tasks: ['scripts'],
    options: {
      spawn: false
    }
  },

  styles: {
    files: './src/scss/**/*.scss',
    tasks: ['styles'],
    options: {
      spawn: false
    }
  },

  images: {
    files: './src/images/**/*.{png,jpg,jpeg,gif}',
    tasks: ['images'],
    options: {
      spawn: false
    }
  }
};
