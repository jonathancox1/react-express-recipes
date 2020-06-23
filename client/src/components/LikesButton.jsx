import React, { Component } from 'react'

export default class LikesButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            likes: 0
        }
    }

    componentDidMount() {
        const { id } = this.props;
        fetch(`/api/v1/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    likes: data.likes
                })
            })
    }


    increaseLikes = () => {
        const { id } = this.props;
        fetch(`/api/v1/recipes/${id}/likes`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    likes: data
                })
            })
    }


    render() {
        return (
            <div>
                <button onClick={this.increaseLikes}>
                    <span role="img" aria-label="Likes: ">👍</span> {this.state.likes}
                </button>

            </div>
        )
    }
}
