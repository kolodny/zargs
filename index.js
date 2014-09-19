module.exports = zarg;

function zarg(options) {
    var yargs = require('yargs');
    (options || []).forEach(function(option) {
        var key = option.key;
        yargs = yargs.options(key, {});

        'alias default demand describe type'.split(' ').forEach(function(method) {
            if (method in option) {
                yargs = yargs[method](key, option[method]);
            }
        });
    });
    return yargs;
}
