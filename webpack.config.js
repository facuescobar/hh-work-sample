'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./webpack/webpack.prod.js');
} else {
    module.exports = require('./webpack/webpack.dev.js');
}
