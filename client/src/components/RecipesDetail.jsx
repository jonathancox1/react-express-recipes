import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class RecipesDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],
            loading: true,
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`/api/v1/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    details: data,
                    loading: false
                })
            })
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        const { details, loading } = this.state
        if (this.state.loading) {
            return <div>Loading</div>
        }

        return (
            <div className="row text-center">
                <div className="col">
                    <button onClick={this.goBack}>Go Back</button>
                    <div className="card mx-auto text-center m-2 shadow p-5" style={{ width: '800px', height: '50vh' }}>
                        <Link to={`/recipes/${details.id}`}>
                            <h1>{details.name}</h1>
                        </Link>
                        <a href="#">{details.url}</a>
                        <p>{details.review}</p>
                        {details.vegan || details.vegetarian || details.gf || details.categories ? <h4>Categories: </h4> : null}
                        {details.vegan && 'Vegan '}
                        {details.vegetarian && 'Vegetarian '}
                        {details.gf && 'Gluten Free '}
                        {details.categories.map((details) => {
                            return (
                                <>{details.name} </>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
