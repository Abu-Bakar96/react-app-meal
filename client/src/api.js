import {APII_URLL} from './config'

const getMealById = async (mealId) => {
    const response = await fetch(APII_URLL + 'lookup.php?i=' + mealId)
    return await response.json()
}

const getAllCategories = async () => {
    const response = await fetch(APII_URLL + 'categories.php')
    return await response.json()
}

const getFilteredCategory = async (catName) => {
    console.log(catName);
    const response = await fetch(APII_URLL + 'filter.php?c=' + catName)
    return await response.json()
}

export {getMealById, getAllCategories, getFilteredCategory}
