module.exports = {
  "dist": {
    "devFile": "remote",
    "outputFile": "./www/assets/javascripts/modernizr.js",
    "extra" : {
      "shiv": false,
      "printshiv": false,
      "load": false,
      "mq": false,
      "cssclasses": true
    },
    "extensibility": {
      "addtest": false,
      "prefixed": false,
      "teststyles": false,
      "testprops": false,
      "testallprops": false,
      "hasevents": false,
      "prefixes": false,
      "domprefixes": false,
      "cssclassprefix": ""
    },
    "uglify": false,
    "parseFiles": true,
    "matchCommunityTests": false,
  }
};
