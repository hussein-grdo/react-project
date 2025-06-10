import './welcom.css'

const students = [
    { name: "Aiden Carter", level: 1, averageScore: 88 },
    { name: "Bella Thompson", level: 2, averageScore: 91 },
    { name: "Caleb Johnson", level: 3, averageScore: 84 },
    { name: "Daisy Nguyen", level: 3, averageScore: 93 },
    { name: "Ethan Wright", level: 1, averageScore: 76 },
    { name: "Fiona Lopez", level: 3, averageScore: 89 },
    { name: "Gavin Smith", level: 2, averageScore: 82 },
    { name: "Hannah Patel", level: 3, averageScore: 95 },
    { name: "Isaac Chen", level: 1, averageScore: 79 },
    { name: "Jasmine Rivera", level: 2, averageScore: 87 }
];
 type variaple={m:number}
let levelStudent= [
     { name: "", level: 0, averageScore: 0 },
       { name: "", level: 0, averageScore: 0 },
        { name: "", level: 0, averageScore: 0 },
         { name: "", level: 0, averageScore: 0 },
          { name: "", level: 0, averageScore: 0 },
           { name: "", level: 0, averageScore: 0 },
            { name: "", level: 0, averageScore: 0 },
             { name: "", level: 0, averageScore: 0 },
              { name: "", level: 0, averageScore: 0 },
               { name: "", level: 0, averageScore: 0 }
];
export default function Welcom({m}:variaple)
{ if(m==0){
    for(let i=0;i<10;i++){
        levelStudent[i]=students[i];}

}
else{ 
    let b=0;
for(let i=0;i<10;i++){
if(students[i].level==m){
    levelStudent[b]=students[i];
    b++;
} 
}
for(let i=b;i<10;i++){levelStudent[i]={  name: "", level: 0, averageScore: 0 };}
 }
   
return( 
    <> 
<table className="root">
        <tr>
            <td colSpan={2}>Name</td>
            <td>Level</td>
            <td>Average Score</td>
        </tr>
<Tablet r={0}/>
<Tablet r={1}/>
<Tablet r={2}/>
<Tablet r={3}/>
<Tablet r={4}/>
<Tablet r={5}/>
<Tablet r={6}/>
<Tablet r={7}/>
<Tablet r={8}/>
<Tablet r={9}/>

</table>

</>)
}

type props={r:number}

function Tablet ( {r}:props){
 if(levelStudent[r].level!=0){
return (
<tr>
    <td colSpan={2}>{  levelStudent[r].name} </td>
    <td>{levelStudent[r].level}</td>
    <td  >  {levelStudent[r].averageScore}</td>
</tr>
)}
else{return(<></>)}


}


