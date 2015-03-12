module.exports = {
  default: {
    options: {
      sourcemap: 'none'
    },
    files: [{
      expand: true,
      cwd: './src/styles',
      src: ['*.scss'],
      dest: './www/assets/styles',
      ext: '.css'
    }]
  }
};
