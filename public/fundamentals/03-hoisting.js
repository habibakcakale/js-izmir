"use strict";
let title = document.querySelector('main h1');
// console.log(app); // cannot use app here as because it is being declared with let keyword
let app = document.createElement('div');
style = {
    width: "250px",
    height: "250px",
    display: "table-cell",
    border: "1px solid black",
    textAlign: "center",
    verticalAlign: "middle"
};
Object.assign(app.style, style);
var style; // if you remove this style will be a global variable in non strict mode, in strict mode object ref will throw exception.

console.log(`{content} variable accessible in here but its value is ${content}`);
var content = `App Block`;
app.innerHTML = content;
title.after(app)