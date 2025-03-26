

// Objekat
const firstAndLastName = [

        { firstName: "Denis", lastName: "Simeunovic", age: "59" },
        { firstName: "Jelena", lastName: "Paunovic", age: "65" },
        { firstName: "Ivana", lastName: "Dimitrijevic", age: "25" },
        { firstName: "Dragan", lastName: "Radenovic", age: "41" },
        { firstName: "Marina", lastName: "Prvulovic", age: "18" },
        { firstName: "Miroljub", lastName: "Golubovic", age: "21" },
        { firstName: "Nikola", lastName: "Simic", age: "33" },
        { firstName: "Ivan", lastName: "Jovanovic", age: "28" },
        { firstName: "Djuro", lastName: "Ivankovic", age: "29" },  
];



/* // Iscitavanje niza kroz index
const names = ['Miodrag'];

function showName(getFirstName, getLastName) {
    return getFirstName + " " + getLastName;
}

document.querySelector('.firstname').textContent = showName(firstAndLastName[0].firstName,firstAndLastName[0].lastName); */





// Iscitavanje podataka pomocu petlje FOR

function showName(getFirstName, getLastName, getAge) {
    return getFirstName + " " + getLastName + " " + getAge;
}

for (let i = 0; i < firstAndLastName.length; i++) {
    let p = document.createElement('p'); // kreiranje novog p elementa u HTML-u
    let petlja = document.querySelector('.petlja')
    p.textContent += showName(firstAndLastName[i].firstName, firstAndLastName[i].lastName, firstAndLastName[i].age);
    petlja.appendChild(p);

}



