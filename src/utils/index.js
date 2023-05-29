export const mergeClassName = (...classNames) => {
	// classNames => array.
	console.log(classNames);
	console.log(classNames.join(' '));

	// loại bỏ không phải string.
	return classNames
		.filter((cn) => {
			return typeof cn === 'string';
		})
		.join(' '); // ["a","b","c"].join('-') => 'a-b-c'
};

export const saveLocalStorage = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

export const deleteKey = (key) => {
	localStorage.removeItem(key);
};
