import {scrapCards} from "./src/scrapper";
import {solve} from "./src/solve";
import {clickSolution} from "./src/hinter";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
    while (clickSolution(solve(scrapCards()))) {
        await sleep(1000);
    }
}

main();
