const inspect = (obj) => {
    // Your code here.
    const propCollector = [];
    const deprecatedPat = /__.*__/

    function getAllProperties(currentObj){
        if(currentObj === null || currentObj === undefined){
            return //at the top level
        }
        const propList = Object.getOwnPropertyNames(currentObj)
        const matchedProperties = propList.filter(prop => !prop.match(deprecatedPat))
        propCollector.push(...matchedProperties)
        
        getAllProperties(Object.getPrototypeOf(currentObj)) //recursivecall
    }
    getAllProperties(obj) //1st call

    const uniqueProps = [... new Set(propCollector)] //Set only allows unique values
    const sortedProps = uniqueProps.sort();
    
    return sortedProps;
};

const obj1 = {
    name: "bob",
    __a__: 3,
    __b__: 4,
    ___e___: 7,
    hello(){
        console.log("hello")
    }
}

// inspect(obj1)

console.log(inspect(obj1))