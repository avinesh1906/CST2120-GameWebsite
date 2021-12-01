// Entire script will be in script mode
"use strict";

import {Canvas} from './Canvas.js';

export class Snake{
    constructor(context, snakeColor, borderColor, position, xPosStep, yPosStep, gameWindow, score){
        this.context = context;
        this.snakeColor = snakeColor;
        this.borderColor = borderColor;
        this.position = position;
        this.xPosStep = xPosStep;
        this.yPosStep = yPosStep;
        this.gameWindow = gameWindow;
        this.nextX = this.position[0].xPos;
        this.nextY = this.position[0].yPos;
        this.score = score;

        this.drawSnake = function() {
            this.position.forEach((element,index) => {
                if (index ==0){
                    let snakeOOP = new Canvas(this.context, element.xPos, element.yPos, 10, 10, "red", this.borderColor);
                    snakeOOP.draw();
                } else {
                    let snakeOOP = new Canvas(this.context, element.xPos, element.yPos, 10, 10, this.snakeColor, this.borderColor);
                    snakeOOP.draw();
                }

            })
        };
        this.drawSnake();
    }

    // Function for horizontal and vertical Movement for the snake
    /* Horizontal Movement
    To move the snake to the right by 10px, we should increase
    the x-coordinate by 10px and to left decrease by -10px*/

    /*  Vertifcal Movement 
    To move the snake vertically, we should only modify the y-coordinate of 
    the head to prevent the snake to shift upside down. */
    snakeMovement(foodOPP) {
        let snakeHead = {
            xPos: this.position[0].xPos + this.xPosStep,
            yPos: this.position[0].yPos + this.yPosStep
        }; 

        let FoodEaten;

        // Add the head to the beginning
        this.position.unshift(snakeHead);

        FoodEaten = foodOPP.eatingFood(this.position);

        if (FoodEaten){
            // increase score
            this.score += 10;
            
            // generate a new food location
            foodOPP.generateFoodLocationRandom(this.position);
        } else {
            // Remove the last element of the snake
            this.position.pop();
        }
        return this.score;
    }

    noWall() {
        for (let i = 0; i < this.position.length; i++){
            if (this.position[i].xPos < 0) {
                this.position[i].xPos = this.position[i].xPos + this.gameWindow.width;
            }
            if (this.position[i].xPos == (this.gameWindow.width - 10)) {
                this.position[i].xPos = this.position[i].xPos - this.gameWindow.width;
            }
            if (this.position[i].yPos < 0) {
                this.position[i].yPos = this.position[i].yPos + this.gameWindow.height;
            }
            if (this.position[i].yPos == (this.gameWindow.height - 10)) {
                this.position[i].yPos = this.position[i].yPos - this.gameWindow.height;
            }
        }
    }

    touchWall() {
        // detect whether snake hits the wall
        let TOPWALLHIT = this.nextY < 0;
        let BOTTONWALLHIT = this.nextY > (this.gameWindow.height - 10);
        let LEFTWALLHIT = this.nextX < 0;
        let RIGHTWALLHIT = this.nextX > (this.gameWindow.width - 10);

        return (LEFTWALLHIT || RIGHTWALLHIT || TOPWALLHIT || BOTTONWALLHIT);
    }

    ownDeath() {
        for (let i = 1; i < this.position.length; i++){
            if (this.position[0].xPos == this.position[i].xPos && this.position[0].yPos == this.position[i].yPos){
                return true;
            }
        }
        return false;
    }

}

