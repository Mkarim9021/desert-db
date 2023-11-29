import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { fa-solid fa - cake - candles} from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
    const { handleOrder, meal } = props;
    const { strMeal, strInstructions, strMealThumb, strCategory } = props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p><small>Name: {strCategory}</small></p>
            <p><small>Instructions: {strInstructions.slice(0, 100)}</small></p>
            <button className='img-cart' onClick={() => handleOrder(meal)}>Add your Desert</button>
            <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </div >
    );
};

export default Meal;