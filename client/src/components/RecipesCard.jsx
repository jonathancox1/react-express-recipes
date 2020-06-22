import React from 'react'
import { Link } from 'react-router-dom';

export default function RecipesCard({ item }) {
    return (
        <div className="card mx-auto text-center m-2 shadow p-2" style={{ width: '500px' }}>
            <Link to={`/recipes/${item.id}`}>
                <h1>{item.name}</h1>
            </Link>
            {item.id}
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
