/*
Exercise 2:
Write a script that determines the Football Points of a given team record.
Create a function expression that takes 3 parameters, the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
- wins get 3 points
- draws get 1 point
- losses get 0 points
*/

const WIN_POINTS = 3;
const DRAW_POINTS = 1;
const LOSS_POINTS = 0;

function calculatePoints(wins, draws, losses) {
  if (wins >= 0 && draws >= 0 && losses >= 0) {
    return wins * WIN_POINTS + draws * DRAW_POINTS + losses * LOSS_POINTS;
  } 
  else {
    return "Parameters must be equal or greater than zero"
  }
}