import React from 'react';

function Search() {
	const getProductById = async (id) => {
		const action = getProductByIdAction();
		dispatch(action);
	};

	return <div>Search</div>;
}

export default Search;
