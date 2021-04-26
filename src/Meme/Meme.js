import React, { useEffect, useState } from 'react';
import './styles.modules.css';

export const Meme= () => {

    const [memes, setMemes]= useState([]);
    const [memeIndex,setMemeIndex]=useState(0);


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



    return (
        memes.length ? 
       <div className= "container">
         <button onClick={()=> setMemeIndex(memeIndex+1)}  className= "skip">Skip</button> 
         <img src={memes[memeIndex].url}/> 
       </div> : 
        <></>
    );
};