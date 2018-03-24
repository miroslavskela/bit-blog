import React from 'react'
 const SinglePostCard = ({data, data1}) => {
   
   //console.log(data1);
   
     return (
        <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title center">{data.title}</span>
              <div className="card-action center ">
              <a href="#">{data1.name}</a>
            </div>
              <p>{data.body}</p>
            </div>
          </div>
        </div>
      </div>
     )
 }
 export default SinglePostCard 