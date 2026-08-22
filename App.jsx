import React,{useState} from 'react';
import words from './data/filmVocabulary.json';
export default function App(){
const [i,setI]=useState(0),[show,setShow]=useState(false);
let w=words[i];
return <main><header><h1>🎬 SceneWord 3.0</h1><p>戏剧影视专业英语</p></header>
<div className="card" onClick={()=>setShow(!show)}><h1>{w.word}</h1><p>{w.field}</p>{show&&<h3>{w.meaning}</h3>}</div>
<button onClick={()=>setI((i+1)%words.length)}>不认识</button><button onClick={()=>setI((i+1)%words.length)}>认识</button></main>
}