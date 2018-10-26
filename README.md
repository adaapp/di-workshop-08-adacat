# AdaCat

AdaCat is a tamagotchi style game representing the pet cat of an Ada student.
Run the game and try playing for a while. Read through the code - look at the
index.js, AdaCat.js, and CommandLineApp.js files - try to understand what
they’re doing and how they work. Do the same with the unit tests in
AdaCat.test.js.

## Get set up

1. Clone this repo and `cd` into it
1. Install dependencies: `npm install`
1. Check that everything's working by running the tests: `npm test`
1. Start the app: `node index.js`
   - Try feeding and playing with the cat!
   - Tell the cat to nap and wake up again!
   - Press 0 to quit

## Core tasks - most should be able to complete these

Complete the following tasks, using TDD throughout - writing unit tests first,
then code, in a red/green/refactor cycle.

1. Add comments across the code base explaining what everything does
1. Add a new attribute to AdaCat called `tiredness`. Feeding the cat increases
   tiredness by 1. Playing with the cat increases tiredness by 3. Telling the
   cat to nap resets tiredness to 0. Tiredness can be between 0 and 15. Include
   tiredness in `getDescription`
1. Add a new attribute to AdaCat called `message` that holds the cat’s status
   message. It starts off empty, but each time a method like feed or play gets
   called it gets updated. E.g. when play is called message is updated to “the
   cat is playing”. Include this message in `getDescription`
1. Currently, the cat can be fed while it’s asleep. Modify the code so that this
   cannot happen and provide some feedback that you’re trying to feed a sleeping
   cat using the message attribute.
1. Extend the AdaCat class to check that if the cat’s health goes below a
   certain value that a warning message appears in the description like “take
   your cat to the vet”

## Challenges - try these if you finish the core tasks

- Extend the cat with more behaviours and statistics to make the game more
  interesting
- Copy the AdaCat class into a new P5 sketch. Can you provide a graphic
  interface to AdaCat without modifying the class?
- Allow the user to have more than one cat at once
