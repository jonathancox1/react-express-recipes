import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './RecipeForm.module.css';


export default function SubmitForm(props) {
    let history = useHistory();
    const [redirect, setRedirect] = useState(false);
    const [megaState, setMegaState] = useState({
        name: '',
        url: '',
        description: '',
        review: '',
        likes: 0,
        vegetarian: false,
        vegan: false,
        gf: false,
        categories: ''
    })

    function sendData(e) {
        e.preventDefault();
        fetch('/api/v1/recipes', {
            method: 'POST',
            body: JSON.stringify(megaState),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then(res => res.json())
            .then(data => {
                history.push(`/recipes/${data.id}`)
                console.log(data.id);
            })
    }

    return (
        <div className="row mx-auto border">
            <div className="col mx-auto border">
                <div className={styles.RecipeForm}>
                    <h3>Submit New Recipe</h3>
                    <form onSubmit={sendData} >
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input id="name" value={megaState.name} onChange={e => setMegaState({ ...megaState, name: e.target.value })}></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="url">url</label>
                            <input id="url" value={megaState.url} onChange={e => setMegaState({ ...megaState, url: e.target.value })}></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="description">description</label>
                            <input id="description" value={megaState.description} onChange={e => setMegaState({ ...megaState, description: e.target.value })}></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="review">Recipe Review</label>
                            <textarea type="text" id="review" name="review" value={megaState.review} onChange={e => setMegaState({ ...megaState, review: e.target.value })} />
                        </div>
                        <div className={styles.formGroup}>
                            <ul>
                                <li>
                                    <input type="checkbox" id="vegetarian" name="vegetarian" checked={megaState.vegetarian} onChange={e => setMegaState({ ...megaState, vegetarian: e.target.checked })} />
                                    <label htmlFor="vegetarian">Vegetarian</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="vegan" name="vegan" checked={megaState.vegan} onChange={e => setMegaState({ ...megaState, vegan: e.target.checked })} />
                                    <label htmlFor="vegan">Vegan</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="glutenfree" name="glutenfree" checked={megaState.gf} onChange={e => setMegaState({ ...megaState, gf: e.target.checked })} />
                                    <label htmlFor="glutenfree">Gluten Free</label>
                                </li>
                            </ul>
                            <button type="submit">Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

