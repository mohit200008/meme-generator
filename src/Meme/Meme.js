import React, { useEffect, useState } from 'react';
import './styles.modules.css';

export const Meme= () => {

    const [memes, setMemes]= useState([]);
    const [memeIndex,setMemeIndex]=useState(0);
    const [captions, setCaptions]= useState([]);


    const shuffleMemes = (array) => {
        for(let i=array.length-1;i>0;i--){
            const j= Math.floor(Math.random()*1);
            const temp= array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    };

    useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes').then(res=>{
            res.json().then(res=> {
               const _memes= res.data.memes;
               shuffleMemes(_memes);
               setMemes(_memes);
            });
        });
    },[]);

    useEffect(()=> {
        if(memes.length){
            setCaptions(Array(memes[memeIndex].box_count).fill(''));

        }

    },[memeIndex,memes]);

    useEffect(()=> {
        console.log(captions);
    },[captions]);



    return (
        memes.length ? 
       <div className= "container">
         <button onClick={()=> console.log('Generate!')}  className= "generate">Generate</button> 
         <button onClick={()=> setMemeIndex(memeIndex+1)}  className= "skip">Skip</button> 
         {
             captions.map((c,index)=> (
                 <input key={index} />
             ))
         }
         <img src={memes[memeIndex].url}/> 
       </div> : 
        <></>
    );
};