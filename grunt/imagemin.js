module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: './src/images',
      src: ['**/*.{png,jpg,jpeg,gif,ico}'],
      dest: './www/assets/images'
    }]
  }
};
