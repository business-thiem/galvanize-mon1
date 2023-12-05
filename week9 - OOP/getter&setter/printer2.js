const Printer = (name, sheetCount = 0) => {
    return {
        //name and sheetCount are read-only
        get name() {
            return name;
        },
        get sheetCount() {
            return sheetCount
        },
        addSheets(numSheets) {
            sheetCount += numSheets;
        },
        printJob(name, size) {
            if(size > this.sheetCount) throw new Error("Job failed: please refill paper tray!");
    
            for(let i = 1; i <= size; i++) {
            console.log(`Printing ${name} - page ${i} of ${size}`);
            }
            sheetCount -= size;
        }
    }
  };


const p1 = Printer("Canon", 5)
console.log(p1)

p1.name = "Nikon" // doesn't change name

console.log(p1.name)

p1.printJob("myPhotos", 4)
console.log(p1.sheetCount)
p1.addSheets(30);
console.log(p1.sheetCount)
p1.printJob("myPhotos2", 2)
console.log(p1.sheetCount)
