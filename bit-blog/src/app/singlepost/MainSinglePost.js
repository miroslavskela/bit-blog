import React from 'react'
import {Component} from 'react'
import SinglePostCard from './SinglePostCard'
import MoreSinglePosts from './MoreSinglePosts'
import {postService} from '../../service/PostService'
class MainSinglePost extends Component{
    constructor(props){
        super(props);
        this.state={
          post:{},
          author:{}
        
        }
      }

      componentDidMount() {
        postService.fetchSinglePost(this.props.match.params.id)
          .then(post => {
            this.setState({ post })
            
          })
          postService.fetchAuthors(this.props.match.params.id)
          .then (author => {
              this.setState({author})

          })
          
      }
      render() {
return (
        <div className="container">
         <a href="#">back</a>
        <SinglePostCard data ={this.state.post} data1={this.state.author} />
        <MoreSinglePosts />
        </div>
                )
    }
}
export default MainSinglePost