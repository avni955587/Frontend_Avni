let word="javascript"

let count=0;

for(let i=0;i<word.length;i++)
{
    let w2=word[i].toLowerCase()
    if(w2=="a" || w2=="e"||w2=="i"||w2=="o"||w2=="u")
        count++
}
console.log(count)