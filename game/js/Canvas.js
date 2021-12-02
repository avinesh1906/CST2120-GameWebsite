// Entire script will be in script mode
"use strict";

export class Canvas{
    // Canvas context
    context;
    // x pos of the canvas
    x; 
    // y pos of the canvas
    y;
    // game window width
    width;
    // game window height
    height;
    // game window color
    color;
    // border colr
    borderColor;

    // constructor functions
    constructor(context, x, y, width, height, color, borderColor){
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.borderColor = borderColor;
    }
    
    // functions to draw the canvas
    draw()
    {
        // color
        this.context.fillStyle = this.color;
        //  outline colour
        this.context.strokestyle = this.borderColor;
        //  draw the object
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.strokeRect(this.x, this.y, this.width, this.height);

    }
}