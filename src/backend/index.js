require = require('esm')(module, {
    mode: 'all'
});

require('module-alias/register');

module.exports = require('./app');
