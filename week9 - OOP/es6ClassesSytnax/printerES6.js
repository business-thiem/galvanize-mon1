// //Convert the following factory function into an ES6 class.
// const Printer = (name, sheetCount = 0) => {
//     return {
//       get name() {
//         return name;
//       },
//       get sheetCount() {
//         return sheetCount;
//       },
//       addSheets(numSheets) {
//         sheetCount += numSheets;
//       },
//       printJob(name, size) {
//         if (size > sheetCount)
//           throw new Error("Job failed: please refill paper tray!");
  
//         for (let i = 1; i <= size; i++) {
//           console.log(`Printing ${name} - page ${i} of ${size}`);
//         }
//         sheetCount -= size;
//       },
//     };
//   };


class Printer {
    #name; 
    #sheetCount;
    
    constructor(name, sheetCount){
        this.#name = name;
        this.#sheetCount = sheetCount || 0;
        
    }

    get name() {
        return this.#name;
    }
    get sheetCount() {
        return this.#sheetCount;
    }
    addSheets(numSheets) {
        this.#sheetCount += numSheets;
    }
    printJob(name, size) {
        if (size > this.#sheetCount)
            throw new Error("Job failed: please refill paper tray!");

        for (let i = 1; i <= size; i++) {
            console.log(`Printing ${name} - page ${i} of ${size}`);
        }
            this.#sheetCount -= size;
    }
}

const p1 = new Printer("Canon", 22)

console.log(p1)
console.log(p1.sheetCount)
console.log(p1.printJob('myPhotos', 3))