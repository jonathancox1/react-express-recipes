import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Likes = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    return (
        <div>

        </div>
    )
}

export default Likes
