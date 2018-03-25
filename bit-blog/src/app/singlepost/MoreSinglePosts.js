import React from 'react'
import MoreSinglePostsList from './MoreSinglePostsList'

const MoreSinglePosts = ({data}) => {
    return(
        <div className="row">
        <h2>More Posts from Same Author</h2>
        {data.slice(1,4).map((post,index) =>  <MoreSinglePostsList key={index} data={post}/>)}  
        
        </div>
    )
}


export default MoreSinglePosts