import { format } from "./src/format";
import { scrapCards } from "./src/scrapper";
import { solve } from "./src/solve";

console.log(format(solve(scrapCards())));
