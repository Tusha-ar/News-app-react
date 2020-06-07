import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Load from './Load';

const Home =()=>{
    const[news, setNews] = useState([]);
    const[loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=IN&pageSize=10&apiKey=7df471d01cb8406893727f71c461303e')
            .then((res)=>{
                setNews(res.data.articles)
                setLoading(false)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])
        return(
            loading?
            <Load/>:
            <div className='home'>
                <h1>Read Latest News</h1>
                {
                    news.map((headline)=>
                        <div className='news' key={headline.title}>
                            <img src={headline.urlToImage} alt='img'/>
                            <div className='content'>
                                <a href={headline.url}><h2 className='title'>{headline.title}</h2></a>
                                <p>{headline.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }


export default Home