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
