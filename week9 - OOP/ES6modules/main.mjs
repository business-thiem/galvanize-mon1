//main.mjs -- note: need to use .mjs for node to recognize module usage
//for browsers: use <script type="module" src="main.js"></script>
import { add, subtract } from "./math.mjs";

console.log(add(1,2))