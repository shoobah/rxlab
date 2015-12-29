var Rx = require('rx');

var source1 = Rx.Observable.interval(40).take(9).select(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]);
var source2 = Rx.Observable.interval(30).take(9).select(i => ['7', 'poo', '8', '12', '5', '11', '2', 'kaka', '0'][i]);

var numbers = source1
    .amb(source2)
    .select(x => parseInt(x))
    .filter(x => !isNaN(x) && x > 0)

var max = numbers.max();
var min = numbers.min();

numbers.subscribe(
    x => console.log(x),
    (err) => console.log('ERROR:', err)
    );

max.subscribe(m => console.log('Max: ', m))
min.subscribe(m => console.log('Min: ', m))
   