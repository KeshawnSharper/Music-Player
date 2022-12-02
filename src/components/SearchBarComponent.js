import React from "react";
import "./SearchBarComponent.css"
const SearchBarComponent = (width,color) => {
return (
    <div className="search" style={{"borderColor":color}}>
				<form className="search-form">
					<input type="text" placeholder="Search for books, authors, categories and more.." />
					<input type="submit" value="Submit" style={{"backgroundColor":color}} />
				</form>
			</div>
)
}

export default SearchBarComponent;