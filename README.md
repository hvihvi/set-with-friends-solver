# set-with-friends-solver

Solves the Set game, copy paste `dist/main.js` script in console to win at https://setwithfriends.com

## Setup:

```
yarn install
```

Build the output:

```
yarn build
```

Retrieve the script built in `dist/main.js`

## TODO

Implement `src/solve.ts`'s solve function. It takes a list of cards as input, and outputs 3 cards.
These 3 cards are from the input, and each of their criteira (color/shape/number/motif) should be either equal or all distinct.
Rules available here: https://setwithfriends.com/help

## Stack

- TS
- Jest
- Prettier
- Webpack

The command `yarn build` first compiles all ts files to js in `./build`, then webpack reads `./build/index.js` to build the final "single file" script `dist/main.js`.
