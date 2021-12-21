# set-with-friends-solver

Solves the set game, copy paste in console to win at https://setwithfriends.com

Current script:

```js
(() => {
  const twelve = document.querySelectorAll('div[style*="visibility: visible"]');
  const nombres = Array.from(twelve).map(
    (card) => card.firstChild.children.length - 1
  );
  const shape = Array.from(twelve)
    .map((card) => card.firstChild.firstChild.firstChild.getAttribute("href"))
    .map((shape) => {
      if (shape === "#squiggle") return 0; // S
      if (shape === "#oval") return 1; // rond
      if (shape === "#diamond") return 2; // losange
      return undefined;
    });
  const couleurs = Array.from(twelve)
    .map((card) =>
      card.firstChild.firstChild.children[1].getAttribute("stroke")
    )
    .map((color) => {
      if (color === "#800080") return 0; // violet
      if (color === "#008002") return 1; // green
      if (color === "#ff0101") return 2; // red
      return undefined;
    });
  const motifs = Array.from(twelve).map((card) => {
    if (
      card.firstChild.firstChild.children[0].getAttribute("fill") ===
      "transparent"
    )
      return 0; // transparent
    if (
      card.firstChild.firstChild.children[0]
        .getAttribute("mask")
        .includes("mask-stripe")
    )
      return 1; // stripe
    return 2; // full
  });
  console.log(nombres);
  console.log(shape);
  console.log(couleurs);
  console.log(motifs);
})();
```

## Setup:

Stack:

- TS
- Jest
- Prettier

```
yarn install
```

Build the output:

```
yarn build
```

Retrieve the script built in `build/index.js`
