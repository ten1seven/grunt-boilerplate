module.exports = {
  default: {
    options: {
      sourcemap: 'none'
    },
    files: [{
      expand: true,
      cwd: './src/scss',
      src: ['*.scss'],
      dest: './www/assets/stylesheets',
      ext: '.css'
    }]
  }
};
