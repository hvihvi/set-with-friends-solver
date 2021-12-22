import {format} from "./src/format";
import {scrapCards} from "./src/scrapper";
import {solve} from "./src/solve";
import {clickSolution} from "./src/hinter";

const solution = solve(scrapCards());
console.log(format(solution));
clickSolution(solution);
