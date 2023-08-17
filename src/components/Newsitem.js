import React from 'react'
import { Link } from 'react-router-dom'
const Newsitem =(props)=> {
        let { title, description, imageUrl, newsUrl, author, publishedAt ,source } = props;
        return (
            <div className="container my-3">
                {/* can write  our custom style as style={{ width: "18rem" }}*/}
                <div className="card">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-warning" style={{left:'77%', zIndex:'1'}}>
                            {source}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    <img src={imageUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-body-secondary">By {author} On {new Date(publishedAt).toGMTString()}</small></p>
                        <Link rel="noreferrer" to={newsUrl} target="_blank" className="btn btn-sm btn-primary bg-dark">Read more</Link>
                    </div>
                </div>
            </div>
        )
    }
    export default Newsitem
