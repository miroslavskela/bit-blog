import React from 'react'

const MoreSinglePostsList = ({data}) => {
    console.log(data);
    
    return (
        <div className="col s12">
          <h6>Title:{data.title}</h6><hr/>
        </div>
    )
}

export default MoreSinglePostsList