// Entire script will be in script mode
"use strict";

import {Canvas} from './Canvas.js';

export class Food{
    constructor(context, foodColor, foodBorderColor, foodPos, width, height, gameWindow){
        this.context = context;
        this.foodColor = foodColor;
        this.foodBorderColor = foodBorderColor;
        this.foodPos = foodPos;
        this.width = width;
        this.height = height;
        this.gameWindow = gameWindow;

        this.drawFood = function(){
            let foodOPP = new Canvas(context, this.foodPos.x, this.foodPos.y, 10, 10, foodColor, foodBorderColor);
            foodOPP.draw();
        };
        this.drawFood();
    }

    eatingFood(snakePosition){
        if (snakePosition[0].xPos == this.foodPos.x && snakePosition[0].yPos == this.foodPos.y){
            return true;
        }
        return false;
    }

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
            if (snakePosition[i].xPos == this.foodPos.x && snakePosition[i].yPos == this.foodPos.y){
                console.log("ayttyo");
                this.generateFoodLocationRandom(snakePosition);
            }
        }
    }
}