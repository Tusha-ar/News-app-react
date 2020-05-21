import React, { useState } from 'react';
import back from '../Assets/back.mp4'
import Axios from 'axios';
import Load from './Load';

const ReadNews= () =>{
    const[title, setTitle] = useState('news')
    const[news, setNews] = useState([])
    const[loading, setLoading] = useState(false)

    const gettitle = (e) =>{
        setTitle(e.target.value)
    }
    const handleClick =()=>{
        setLoading(true)
        Axios.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${title}&pageSize=20&apiKey=ee0c2aec14c44913bd890cc4840eee79`)
            .then(res=>{
                console.log(res)
                setNews(res.data.articles)
                setLoading(false)
            })
    }   

    return(
        loading? 
        <div>
            <Load/>
        </div>:
            <div className='readNews'>
                <div className='searchSec'>
                    <input type='text' placeholder='Search News Here' onBlur={gettitle}/>
                    <button onClick={handleClick}>Search</button>
                    <video autoPlay loop>
                        <source src={back}></source>
                    </video>
                </div>

                {
                    news.map(news=>
                        <div className='newsSearch' key={Math.random()}>
                            <img src={news.urlToImage} alt='photu'></img>
                            <div className='content'>
                            <h1><a href={news.url} target='_.'>{news.title}</a></h1>
                            <p>{news.description}</p>
                            </div>
                        </div>)
                }
            </div>
    )
}


export default ReadNews