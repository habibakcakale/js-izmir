//square.js
export const name = 'square';
export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
}

//main js
import { draw } from 'square.js'

let map = document.getElementById(`canvas`)[0];
let ctx = map.getContext(`2d`)
draw(ctx, 10, 10, 10)