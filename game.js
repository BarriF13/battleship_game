var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess ;
var hits = 0;
var guesses = 0;
var isSunk = false;

while the ship is not Sunk
GET user's guess
COMPARE the user's input to valid input values

if the user's guess in invalid
  TELL user to enter a valid Number

  ELSE 
  ADD one to guesses

    if the user's guess matches a location
      ADD one to the number of hits
      if number of hits is 3 
        SET isSunk to true
        TELL the user "You sank my battleship"

        End IF 
      END IF
    END IF
  END LOOP
  TELL user stats 

