module.exports = {
  options: {
    enabled: true,
    max_jshint_notifications: 5,
    title: projTitle,
    success: false,
    duration: 3
  },
  build: {
    options: {
      title: 'Build complete',
      message: 'Tasks finished running.'
    }
  },
  html: {
    options: {
      message: 'HTML task finished running.',
    }
  },
  images: {
    options: {
      message: 'Images task finished running.',
    }
  },
  server: {
    options: {
      message: 'Server is ready.'
    }
  },
  scripts: {
    options: {
      message: 'Scripts task finished running.',
    }
  },
  styles: {
    options: {
      message: 'Styles task finished running.',
    }
  }
};
