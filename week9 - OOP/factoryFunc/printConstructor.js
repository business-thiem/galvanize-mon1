const Printer = (name, sheetCount) => {
    

    return {
        name,
        sheetCount: sheetCount || 0,
        addSheets(num) {
            return this.sheetCount += num;
        },
        printJob(name, size) {
            if(size > sheetCount){
                throw new Error('Job failed: please refill paper tray!')
            }
            let currentPage = 1;

            //recursive function to print
            const printing = (currentPage) => {
                console.log(`Printing ${name} - page ${currentPage} of ${size}`)
                currentPage++;
                if(currentPage <= size){
                    printing(currentPage);
                } else {
                    return;
                }
            }
            printing(currentPage); //recursive call

            // Subtract sheets from sheetCount
            this.sheetCount -= size;
        },
    }
};

const p1 = Printer("Canon", 5)
console.log(p1)

console.log(p1.addSheets(3))
console.log(p1)

p1.printJob('myPhotos', 3)
// p1.printJob('myPhotos', 6); //will error
