// Spread Operator

const heroArr1:string[]=["Khan","jalil","siam"];
const heroArr2:string[]=["hero","alom",'faruk'];

heroArr1.push(...heroArr2)
// console.log(heroArr1);

// rest parameter

const heroScore=(...score:number[]):number =>{
   let sum:number=0
   score.map(n=>{
    sum=sum+n
   })
    return sum
}
// console.log(heroScore(2,4,5,6,7,8,9,3));

const heroString=(...strings:string[]):void=>{
    strings.map(str=>console.log(str))
 
}

heroString("Programming",'Hero',"web","next","level");