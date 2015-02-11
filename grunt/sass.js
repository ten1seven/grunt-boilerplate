module.exports = {
  default: {
    files: [{
      expand: true,
      cwd: './src/scss',
      src: ['*.scss'],
      dest: './www/assets/stylesheets',
      ext: '.css'
    }]
  }
};
