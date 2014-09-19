var assert = require('assert');
var zargs = require('..');

describe('zargs', function() {
    it('should work without any args', function() {
        assert.doesNotThrow(function() {
            zargs().parse('');
        });
    });

    it('should use demand', function() {
        assert.throws(function() {
            zargs({key: 'r', demand: true}).parse('');
        });
    });

    it('should use default', function() {
        var args = zargs([{
            key: 'd',
            default: 123
        }]).parse('');
        assert.equal(args.d, 123);
    });

    it('should use describe', function() {
        var describe = 'this is desc';
        var args = zargs([{
            key: 'd',
            describe: describe
        }]);
       assert(args.help().indexOf(describe) > -1);

    });

});