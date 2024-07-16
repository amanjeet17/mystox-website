import React, { useEffect,useState } from 'react';

export default function Redirection(){
const [num,setNum]= useState(1)
  let ref=null
  useEffect(()=>{
    ref= setInterval(()=>{
      console.log('loader interval running');
      window.postMessage('redirection')
      window.postMessage(JSON.stringify({type: "click", message : "ok"}));
      setNum((prevState)=>{
        if(prevState===3){
          return 1
        }
        return prevState+1
      })
    },300)
    return ()=>{
      clearInterval(ref)
    }
    
  },[])
    return(
        <div style={{
            display:'flex',
            flex:1,
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor: '#5211A0',
            height: '100vh',
        }}>
        {num===1 && <img src={require('./assets/loader_1.png')} style={{width:127,height:120}} />}
        {num===2 &&<img src={require('./assets/loader_2.png')} style={{width:127,height:120}} />}
        {num===3 &&<img src={require('./assets/loader_3.png')} style={{width:127,height:120}} />}
        </div>
    )
}
