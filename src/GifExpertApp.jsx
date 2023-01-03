import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Super'])

    const onAddCategory = (newCategory) =>{
        if( categories.includes(newCategory)) return;
        const categories2 = [newCategory, ...categories]
        setCategories(categories2)
    }

    return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategory onAddCategory={onAddCategory}/>
        {
            categories.map( category =>(
                <GifGrid key={category} category={category}/>
            ))
        }
    </>
  )
}

export default GifExpertApp
