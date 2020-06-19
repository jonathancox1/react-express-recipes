import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RecipesDetail from './RecipesDetail';

export default function RecipesCard({ item }) {
    return (
        <div className="card mx-auto" style={{ width: '300px' }}>
            <Link to={`/recipes/${item.id}`}>
                <h1>{item.name}</h1>
            </Link>
            <a href="#">{item.url}</a>
            <p>{item.review}</p>
            {item.vegan || item.vegetarian || item.gf || item.categories ? <h4>Categories: </h4> : null}
            {item.vegan && 'Vegan '}
            {item.vegetarian && 'Vegetarian '}
            {item.gf && 'Gluten Free '}
            {item.categories.map((item) => {
                return (
                    <>{item.name} </>
                )
            })}
        </div>
    )
}
