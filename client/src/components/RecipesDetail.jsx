import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';


export default class RecipesDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],
            loading: true,
            redirect: false
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`/api/v1/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    details: data,
                    loading: false,
                    redirect: false,
                })
            })
    }

    goBack = () => {
        this.props.history.goBack();
    }

    deleteItem = () => {
        try {
            fetch(`/api/v1/recipes/${this.state.details.id}`, {
                method: 'DELETE'
            })
                .then((data) => {
                    this.setState({ redirect: !this.state.redirect })
                    console.log(data);
                })
        } catch (err) {
            console.log(err);
        }
        // this.props.history.push('/')
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/" />
        }

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
                        <button onClick={this.deleteItem}>Delete : {details.id}</button>
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
