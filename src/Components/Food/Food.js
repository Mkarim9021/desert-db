import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Food.css'
import Order from '../Order/Order';
import { addToDb, getStoredCart } from '../../utilities/fakeDb';

const Food = () => {
    const [meals, setMeals] = useState([]);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    useEffect(() => {
        const storedOrder = getStoredCart()
        const savedOrder = [];
        for (const id in storedOrder) {
            const addedMeal = meals.find(meal => meal.idMeal === id);
            if (addedMeal) {
                const quantity = storedOrder[id];
                addedMeal.quantity = quantity;
                savedOrder.push(addedMeal);
            }
        }
        setOrders(savedOrder);
    }, [meals])

    const handleOrder = (meal) => {
        let newOrders = [];
        const exists = orders.find(m => m.idMeal === meal.idMeal);
        if (exists) {
            const rest = orders.filter(m => m.idMeal !== meal.idMeal);
            exists.quantity = exists.quantity + 1;
            newOrders = [...rest, exists];
        }
        else {
            meal.quantity = 1
            newOrders = [...orders, meal]
        }

        setOrders(newOrders);
        addToDb(meal.idMeal);

    }
    return (
        <div className='food-container'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        handleOrder={handleOrder}
                    ></Meal>)
                }

            </div>
            <div className='orderlist'>
                <Order order={orders}></Order>

            </div>
        </div>
    );
};

export default Food;