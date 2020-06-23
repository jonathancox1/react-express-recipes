import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { addLike } from '../redux/actions/action'
import { useSelector, useDispatch } from 'react-redux'
import LikesButton from './LikesButton'



export default function RecipesCard({ item }) {
    const likes = useSelector(state => state.likes)
    const dispatch = useDispatch();

    return (
        <div className="card text-center m-2 shadow p-2 w-100" style={{ width: '25vw' }}>
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
            <LikesButton id={item.id}></LikesButton>

            <br />
        </div>
    )
}
