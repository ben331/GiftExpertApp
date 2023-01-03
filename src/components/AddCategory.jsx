import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {

    const [search, setSearch] = useState('')
    const onInputChange = ({target}) =>{
        setSearch(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if( search.trim().length <=1 ) return;
        onAddCategory(search);
        setSearch('');
    }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ search }
        onChange = { onInputChange }
      />
    </form>
  )
}