var S = require('pull-stream/pull')
S.drain = require('pull-stream/sinks/drain')
var many = require('pull-many')

module.exports = function flatMerge () {
    return function sink (source) {
        var m = many()
        S(source, S.drain(function onEvent (s) {
            m.add(s)
        }, function onEnd (err) {
            m.cap()
        }))
        return m
    }
}

