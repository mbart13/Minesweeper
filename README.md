# Minesweeper

![image](https://user-images.githubusercontent.com/36601103/112132582-114fda80-8bcb-11eb-9ac8-5be0f05a8354.png)

This is react version of the classic game.
To see the live project go [here](https://minesweeper-mbart13.vercel.app)

## About Project
This was a challenging project, not only this was my first react project, but also I had to implement various algorithms (one of them recursive) to make the game work.

Project is part of Jetbrains Academy frontend developer track and it consisted of 5 stages, during each you have to implement some functionality according to requirements you are given. To pass a stage all unit tests prepared by Jetbrains team need to pass.

## Tools and techniques
In this project I used:
- react with hooks (useState, useEffect, useContext, useHistory and also a custom hook)
- react router
- css grid for minefield
- react-modal

## Original requirements
- place 10 bombs randomly on the field
- if player's first move is a bomb, field should be recreated
- player can uncover field with a click and flag field with a right click
- uncovered cell should display number indicating how many mines surround this cell
- if uncovered cell is blank, all adjacent non-mined cells should automatically be uncovered recursively
- timer starting immediately after first click and stopping when player either wins or loses

I added some extra things:
- intro page
- modal with help
- rotating bomb synchronized with timer
- emoji reflecting current game status :)

## Main Challenges
This was my first react project, which was a challenge itself, but also I had to implement various algorithms (one of them recursive) to make the game work.  
I learned how to break the app into smaller components, manage state using functional components. I also used Context API for passing data between components. 
I didn't focus much on styling in this project, but more on functionalities.
