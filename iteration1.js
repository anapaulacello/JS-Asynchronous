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

/////////S
//iteration2
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