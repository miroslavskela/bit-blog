import React from 'react'
import { Component } from 'react'
import SinglePostCard from './SinglePostCard'
import MoreSinglePosts from './MoreSinglePosts'
import { postService } from '../../service/PostService'
class MainSinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            author: {},
            posts:[]
        }
    }
    goodAuthor = (id) => {
        if (id > 0 && id < 10) {
            return id = 1;
        }
        else if (id > 9 && id < 20) {
            return id = 2;
        }
        else if (id > 19 && id < 30) {
            return id = 3;
        }
        else if (id > 29 && id < 40) {
            return id = 4;
        }
        else if (id > 39 && id < 50) {
            return id = 5;
        }
        else if (id > 49 && id < 60) {
            return id = 6;
        }
        else if (id > 59 && id < 70) {
            return id = 7;
        }
        else if (id > 69 && id < 80) {
            return id = 8;
        }
        else if (id > 79 && id < 90) {
            return id = 9;
        }
        else if (id > 89 && id < 100) {
            return id = 10;
        }
    }


    componentDidMount() {
        postService.fetchSinglePost(this.props.match.params.id)
            .then(post => {
                this.setState({ post })

            })
        postService.fetchAuthor(this.goodAuthor(this.props.match.params.id))
            .then(author => {
                this.setState({ author })
            })
            postService.fetchUserPosts(this.goodAuthor(this.props.match.params.id))
            .then(userPosts => {
                this.setState({ posts:userPosts })
            })

    }

    render() {
        return (
            <div className="container">
                <a href="#">back</a>
                <SinglePostCard data={this.state.post} data1={this.state.author} />
                <MoreSinglePosts data={this.state.posts} />
            </div>
        )
    }
}
export default MainSinglePost