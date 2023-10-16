let obj = {
    name: 'Darcy',
    salesTeam: [
        { name: 'Alice', quota: '500'},
        { name: 'Bob', quota: '240'},
        { name: 'Charlie', quota: '10'},
    ],
    district: {
        name: 'ATX',
        offices: 10,
        remote: true
    }
}

let body = document.getElementsByTagName('body')[0]

function htmlFromManager(obj) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let h3A = document.createElement('h3')
    let h3B = document.createElement('h3')
    let ul = document.createElement('ul')
    let li;
    let quotaTotal = 0;



    obj.salesTeam.forEach(person => {
        li = document.createElement('li')
        li.textContent = person.name
        ul.appendChild(li)

        quotaTotal += Number(person.quota)
    })

    div.classList.add(`district-sales`)
    h1.textContent = obj.name;
    h3A.textContent = `Total quota is: ${quotaTotal}`
    h3B.textContent = `${obj.district.name} Sales Team`


    div.appendChild(h1);
    div.appendChild(h3A);
    div.appendChild(h3B);
    div.appendChild(ul);
    // body.appendChild(div);

    return div
}


console.log(htmlFromManager(obj))
