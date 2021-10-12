const newDiv=document.querySelector('.iterationOne');

const getAllData=async()=>{
    const result=await fetch(`https://api.agify.io?name=michael`);
    const reultJson=await result.json();

    const dataHTML=`<p>${reultJson.name}</p>
                    <p>${reultJson.age}</p>
                    <p>${reultJson.count}</p> `;
    newDiv.innerHTML=dataHTML;
};
getAllData();

//TODO ultimos ejercicios de la iteracion1
let newDivDos=document.querySelector('.ejercicioDosUno');
let nameInput=document.querySelector('.ejercicioDosUno__input');

let getData=async()=>{
let result=await fetch(`https://api.nationalize.io?name=${nameInput.value}`);
let resultToJson=await result.json();
let nameDataHTML=`el nombre <p>${resultToJson.name}</p>
    tiene un <p>${resultToJson.country[0].probability}</p> porciento de ser 
    <p>${resultToJson.country[0].country_id}</p> y un <p>${resultToJson.country[1].probability}</p> porciento de ser 
    <p>${resultToJson.country[1].country_id}</p>`

           newDivDos.innerHTML=nameDataHTML
}

document.querySelector('.ejercicioDosUno__btn').addEventListener('click',getData)


/////////S
//iteration2
//TODO ejercicio 1 de esta iteration
const newRickAndMorty__container=document.querySelector('.RickAndMorty__container');
const getAllDataRickAndMorty= async()=>{
    const result=await fetch(`https://rickandmortyapi.com/api/character`);
    const resultToJson= await result.json();

    const characters=resultToJson.results.map((element)=>({
        id:element.id,
        name:element.name,
        status:element.status
    }));
    console.log(characters);

    const charactersHTML=characters.map((element)=>
    `
    <h1>${element.id}</h1>
    <h2>${element.name}</h1>
    <h3>${element.status}</h1>
    `
    ).join("");
    newRickAndMorty__container.innerHTML=charactersHTML;
}
document.querySelector('.rAndm__btn').addEventListener('click',getAllDataRickAndMorty);

/* 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
async-await.
const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

runTimeOut(); */