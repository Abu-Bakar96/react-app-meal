import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList';
import { PreLoader } from '../components/PreLoader';


function Category() {
    const [meals, setMeals] = useState([])
    console.log(meals);
    const {name} = useParams()
    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals))
    }, [name])

    return (
    <>
        {!meals.length ? <PreLoader/> : <MealList meals={meals}/>}
        
    </>
  )
}

export {Category}