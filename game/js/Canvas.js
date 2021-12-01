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

    constructor(context, x,y, width, height, color){
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    clearCanvas(){   
        // set the drawing color
        this.context.fillStyle = this.color;

        // Context has a method for drawing rectangles
        this.context.fillRect(this.x, this.y, this.width, this.height);   
        
        // Draw a border around the canvas 
        // This will be helpful to detect whether the snake touches the wall or not
        this.context.strokeRect(this.x, this.y, this.width, this.height);
    }
}