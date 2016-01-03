import Rx from 'rx'
import {DOM} from 'rx-dom'

let el=document.getElementById('content')

let source$ = DOM.mousemove(el)

let clicks$ = source$
    .filter(e => e.buttons === 1)
    .selectMany(e => {return Rx.Observable.just({
        X: e.offsetX,
        Y: e.offsetY,
        B: e.buttons,
        All: e
    })
})

let box = {
    left: 200,
    top: 100,
    width: 200,
    height: 200
}

let drawDot = function(x,y, color, el){
    let newElement = document.createElementNS('http://www.w3.org/2000/svg','rect')
    newElement.setAttribute('fill',color)
    newElement.setAttribute('x',x)
    newElement.setAttribute('y',y)
    newElement.setAttribute('width', '2')
    newElement.setAttribute('height', '2')
    el.appendChild(newElement)
}

let inside$ = clicks$.select(i => i.X >= box.left 
                            && i.X <= box.left + box.width 
                            && i.Y >= box.top 
                            && i.Y <= box.top + box.height)

clicks$
    .withLatestFrom(
        inside$,
        (c, i) => {
            return {
                click: c,
                inside: i
            }
        }
    )
    .subscribe(
        e => {
            if(e.inside) {
                drawDot(e.click.X, e.click.Y, '#00FF00', el)
            } else {
                drawDot(e.click.X, e.click.Y, '#FF0000', el)                
            }
            console.log(e)
        }
)
