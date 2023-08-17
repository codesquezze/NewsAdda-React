import React, { useEffect,useState } from 'react'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
import Newsitem from './Newsitem'
const News =(props)=>{
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
const capitaliseFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase()+ string.slice(1);
    }
    
    const updateNews=async()=> {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true); 
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloading(false);  
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitaliseFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    },[])
    

const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page+1);
        setloading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
        setloading(false);  
      };

    // handlePreviousClick = async () => {
    //     setpage(page-1)
    //     updateNews();
    // }

    // handleNextClick = async () => {
    //     if (setpage(page+1) > Math.ceil(totalResults / props.pageSize)) {

    //     }
    //     else {
    //         setpage(page+1)
    //         updateNews();
    //     }
    // }
        return (
            <>
                <h1 className="text-center" style={{marginTop:'3rem'}}>NewsAdda-Top {capitaliseFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length!==totalResults}
                    loader={<Spinner/>}
                    >
                        <div className="container">
                    <div className="row mb-4">
                        {/*!setloading(true) &&*/ articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title ? element.title.slice(0, 48) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.livemint.com/lm-img/img/2023/08/11/600x338/ONGC_1690031098626_1691767952616.jpg"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} publishedAt={element.publishedAt ? element.publishedAt : "Date Not Specified"} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" class="btn btn-primary" onClick={handlePreviousClick} >&larr;Previous</button>
                    <button disabled={page + 1 > Math.ceil(state.totalResults / props.pageSize)} type="button" class="btn btn-primary" onClick={handleNextClick}>	Next&rarr;</button>
                </div> */}
            </>
        )
    }

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

}

export default News


