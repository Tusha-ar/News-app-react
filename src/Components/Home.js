import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Home =()=>{
    const[news, setNews] = useState([]);

    useEffect(()=>{
        axios.get('https://newspi.org/v2/top-headlines?country=us&pageSize=10&apiKey=630d082fbc9045c8aec87aa809a1b681')
            .then((res)=>{
                setNews(res.data.articles)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])
        return(
            <div className='home'>
                <h1>Read Latest News</h1>
                {
                    news.map((headline)=>
                        <div className='news' key={headline.title}>
                            <img src={headline.urlToImage} alt='img'/>
                            <div className='content'>
                                <h2 className='title'>{headline.title}</h2>
                                <p>{headline.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }


export default Home