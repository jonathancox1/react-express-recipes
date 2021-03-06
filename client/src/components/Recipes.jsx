import React, { Component } from 'react'
import RecipesCard from './RecipesCard'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch, connect } from 'react-redux'
import { fetchData } from '../redux/actions/action'



class Recipes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            count: 0,
            page: 1,
            orderASC: true,
        }
    }

    componentDidMount() {
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

    componentDidUpdate(prevState, prevProps, snapshot) {
        if (prevProps.page !== this.state.page || prevProps.orderASC !== this.state.orderASC) {
            try {
                fetch(`/api/v1/recipes/?limit=5&order=${this.state.orderASC ? 'ASC' : 'DESC'}&page=${this.state.page}`)
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
        } else {
            return;
        }
    }

    pageForward = () => {
        this.setState({ page: this.state.page + 1 });
    }

    pageBackwards = () => {
        if (this.state.page !== 1) {
            this.setState({ page: this.state.page - 1 });
        }
    }

    changeOrder = () => {
        this.setState({ orderASC: !this.state.orderASC });
    }

    render() {
        return (
            <div className="border">
                <div className="text-center">
                    <button onClick={this.changeOrder}>Displaying {this.state.orderASC ? 'Ascending ' : 'Descending '} Order</button>
                    <br />
                    <div>Page: {this.state.page}</div>
                    <button onClick={this.pageBackwards}>Back</button>
                    <button onClick={this.pageForward}>Next</button>
                    <br />
                    <Link to="/recipes/new">
                        <button>Submit a new Recipe</button>
                    </Link>
                </div>
                <div className="border row flex-wrap mx-auto justify-content-center" style={{ maxWidth: '70vw' }}>
                    {this.state.recipes.map((item) => {
                        return (
                            <div className="" key={item.id}>
                                <RecipesCard item={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
// const mapDispatchToProps = (dispatch) => {
//     recipes: dispatch(fetchData())
// }

// function mapStateToProps(state) {
//     return {
//         recipes: state.recipes
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         recipes: () => dispatch({ type: 'FETCH_DATA', payload: this.state })
//     };
// }

export default connect(null, null)(Recipes)



