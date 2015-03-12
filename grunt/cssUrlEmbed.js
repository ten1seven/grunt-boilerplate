module.exports = {
  encode: {
    options: {
      skipUrlsLargerThan: '1 KB'
    },
    expand: true,
    cwd: './www/assets/styles',
    src: [ '**/*.css' ],
    dest: './www/assets/styles'
  }
};
