import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch'])

	const onAddCategory = (newCategory) => {
		// categories.push(newCategory)
		if (categories.includes(newCategory)) return;
		setCategories([newCategory,...categories]);
		// setCategories(cat => [...cat, 'demon slayer']);
		// console.log(newCategory)
	}

	return (
		<>
			{/* titulo */}
			<h1>GifExpertApp</h1>
			{/* Input */}
			<AddCategory onNewCategory={ (value) => onAddCategory(value)} />
			{/* onSetCategories={ setCategories } */}
			{/* listado de GIF */}
			{/* <button onClick={onAddCategory}>Agregar</button> */}
			{ categories.map((category) => (
					<GifGrid
						key={ category }
						category={category}
					/>
				))
			}
			{/* GIF Item */}
		</>
	)
}