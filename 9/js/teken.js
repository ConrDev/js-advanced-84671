"use strict"
var canvas = document.getElementById("appel");
var ctx = canvas.getContext("2d");

var centerX = (800 / 2);
var centerY = (600 / 2);

ctx.beginPath();
ctx.arc(centerX - 4, centerY, 25, 0, Math.PI * 2);
ctx.arc(centerX + 4, centerY, 25, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(centerX - 8, centerY- 10, 4, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.lineWidth = 2;
ctx.moveTo(centerX, centerY- 25);
ctx.arcTo(centerX + 5, centerY -32, centerX, centerY - 40, 20);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.moveTo(centerX + 2, centerY- 35);
ctx.arcTo(centerX + 9, centerY - 40, centerX + 7, centerY - 42, 5);
ctx.arcTo(centerX + 2, centerY - 35, centerX + 7, centerY - 32, 5);
ctx.fill();