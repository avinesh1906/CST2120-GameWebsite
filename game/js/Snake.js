export class Snake{
    // snake position
    position;
    // canvas context
    context; 
    // snake color
    snake_color;
    // snake border color
    snake_border_color;

    constructor(context, position, snake_color, snake_border_color){
        this.context = context;
        this.position = position;
        this.snake_color = snake_color;
        this.snake_border_color = snake_border_color;
    }

    drawSnake(){
        // loop through snake variable to print each snake element
        // making use of arrow function
        this.position.forEach(element => {
            drawSnakeElement(element)
        });
    }

    // function to print each snake element
    drawSnakeElement(element)
    {
        // Snake color
        this.context.fillStyle = snake_color;
        // Snake border color
        this.context.strokestyle = snake_border_color;

        // Draw a rect to mark the snake element
        this.context.fillRect(element.xPos, element.yPos, 10, 10);
        // Draw the snake border for each element
        this.context.strokeRect(element.xPos, element.yPos, 10, 10);
    }

}