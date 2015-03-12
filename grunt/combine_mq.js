module.exports = {
  default: {
    files: [{
      expand: true,
      cwd: './www/assets/styles',
      src: ['**/*.css'],
      dest: './www/assets/styles',
      ext: '.css'
    }]
  }
};
