import React,{useState} from 'react'
import words from './data/words.json'

export default function App(){
 const [index,setIndex]=useState(0)
 const [show,setShow]=useState(false)
 const word=words[index]

 return (
 <div>
  <header>
   <h1>🎬 SceneWord 3.0</h1>
   <p>戏剧影视专业英语智能学习</p>
  </header>

  <div className="dashboard">
   今日任务：50词<br/>
   记忆保持率：88%
  </div>

  <div className="card" onClick={()=>setShow(!show)}>
   <h1>{word.word}</h1>
   <p>{word.field}</p>
   {show && <div>
    <h3>{word.meaning}</h3>
    <p>{word.example}</p>
   </div>}
  </div>

  <button onClick={()=>setIndex((index+1)%words.length)}>不认识</button>
  <button onClick={()=>setIndex((index+1)%words.length)}>模糊</button>
  <button onClick={()=>setIndex((index+1)%words.length)}>认识</button>
 </div>
 )
}
