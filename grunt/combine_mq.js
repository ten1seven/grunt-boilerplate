module.exports = {
  default: {
    files: [{
      expand: true,
      cwd: './www/assets/stylesheets',
      src: ['**/*.css'],
      dest: './www/assets/stylesheets',
      ext: '.css'
    }]
  }
};
