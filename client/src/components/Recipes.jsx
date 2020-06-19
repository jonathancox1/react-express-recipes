import React, { Component } from 'react'
import RecipesCard from './RecipesCard'

export default class Recipes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            count: 0,
            page: 1,
        }
    }

    componentDidUpdate() {
        try {
            fetch(`/api/v1/recipes/?limit=5&order=ASC&page=${this.state.page}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        recipes: data.rows,
                        count: data.count
                    })
                })
        } catch (err) {
            console.log(err)
        }
    }

    pageForward = () => {
        this.setState({ page: this.state.page + 1 });
    }

    render() {
        return (
            <div>
                {this.state.recipes.map((item) => {
                    return (
                        <div className="row" key={item.id}>
                            <RecipesCard item={item} />
                        </div>
                    )
                })}
                <button onClick={this.pageForward}>Next</button>
            </div>
        )
    }
}
