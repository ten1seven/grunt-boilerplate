module.exports = {
  configFiles: {
    files: [
      'Gruntfile.js'
    ]
  },
  images: {
    files: [
      './src/images/**/*.{png,jpg,jpeg,gif}'
    ],
    tasks: ['images']
  },
  markup: {
    files: [
      './pages/**/*.html'
    ],
    tasks: ['html']
  },
  scripts: {
    files: [
      './src/scripts/**/*.js'
    ],
    tasks: ['scripts']
  },
  styles: {
    files: [
      './src/styles/**/*.scss'
    ],
    tasks: ['styles']
  }
};
