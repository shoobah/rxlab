import Rx from 'rx';

let el=document.getElementById('contentDiv')

let source = Rx.Observable.fromEvent(el, 'mousemove')

let r = source
    .filter(e => e.buttons > 0)
    .selectMany(e => {return Rx.Observable.just({
        X: e.offsetX,
        Y: e.offsetY,
        B: e.buttons,
        All: e
    })
})

r.subscribe(
    x => {
        console.log(x)
    },
    (err) => console.log('ERROR:', err)
    );

    