# pull flat merge

A transform that takes a stream of streams and emits their values, in the order they arrive.

## example
```js
var test = require('tape')
var S = require('pull-stream')
var flatMerge = require('../')

test('flat merge', function (t) {
    t.plan(2)
    var ss = S.values([
        S.values([1,2,3]),
        S.values(['a', 'b', 'c'])
    ])

    S(
        ss,
        flatMerge(),
        S.collect(function (err, evs) {
            t.error(err)
            t.deepEqual(evs, [1,2,3,'a','b','c'], 'should emit the events')
        })
    )
})
```
