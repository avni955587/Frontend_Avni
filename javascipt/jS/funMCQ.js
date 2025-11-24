//Synchronous Callback

let msg=(name)=> {
    let getText ="Hello" +name;
    console.log(getText);
}

let getData=(text)=>{
    let getElement="Hi"+text
    console.log(getElement)
}

let nextmsg=(outer,callback)=>{
    console.log(outer)
    callback(" SEction R js session")
}
nextmsg("code red" , getData);

//Asynchronous Callback
console.log("async call back ,first",1)
setTimeout( ()=> {
    console.log("waiting stage",2)
},5000)

console.log("last call",3)


// api call using async and await

async function get_Data() {
    console.log("Start")

try{
    const reponse = await fetch ("")
    const data = await reponse.json()

    console.log("data :",data)
}
catch (error){
    console.error("Error :",error)
}
}

    console.log("Req Complete")
    getData()
