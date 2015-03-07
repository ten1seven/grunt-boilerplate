module.exports = {
  encode: {
    options: {
      skipUrlsLargerThan: '1 KB'
    },
    expand: true,
    cwd: './www/assets/stylesheets',
    src: [ '**/*.css' ],
    dest: './www/assets/stylesheets'
  }
};
