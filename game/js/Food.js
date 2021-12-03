// Entire script will be in script mode
"use strict";

// import class from other modules
import {Canvas} from './Canvas.js';

// class Food
export class Food{
    // constructor functions
    constructor(context, foodColor, foodBorderColor, foodPos, width, height, gameWindow){
        this.context = context;
        this.foodColor = foodColor;
        this.foodBorderColor = foodBorderColor;
        this.foodPos = foodPos;
        this.width = width;
        this.height = height;
        this.gameWindow = gameWindow;

        // draw food function
        this.drawFood = function(){
            let foodCanvas = new Canvas(context, this.foodPos.x, this.foodPos.y, 10, 10, foodColor, foodBorderColor);
            foodCanvas.draw();
        };
        this.drawFood();
    }

    // check if snake ate food
    eatingFood(snakePosition){
        // check if snake position equals to foof position
        if (snakePosition[0].xPos == this.foodPos.x && snakePosition[0].yPos == this.foodPos.y){
            return true;
        }
        return false;
    }

    // generate a new food location randomly
    generateFoodLocationRandom(snakePosition){
        // random function to produce x and y position
        function randomPosition(min, max)
        {
            return Math.round((Math.random() * (max-min) + min) / 10) * 10;
        }
        // generate random location for food
        this.foodPos.x = randomPosition(0, this.gameWindow.width - 10);
        this.foodPos.y = randomPosition(0, this.gameWindow.height - 10);
        
        for (let i = 0; i < snakePosition.length; i++){
            // check if snake position is not same as food location
            if (snakePosition[i].xPos == this.foodPos.x && snakePosition[i].yPos == this.foodPos.y){
                this.generateFoodLocationRandom(snakePosition);
            }
        }
    }
}