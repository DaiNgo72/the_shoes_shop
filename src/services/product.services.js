import axios from 'axios';

// function async: trả về một promise.
export const getProductByIdApi = async (id) => {
	// try catch: không chỉ dùng ở trong async await;

	// try {
	// 	const ID = 10;
	// 	undefined.map();
	// } catch (err) {
	// 	console.log(err);
	// }

	try {
		const resp = await axios.get(
			`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
		);

		return resp; // resolve()
	} catch (err) {
		// trả về error.

		// return giống việc các bạn trả về kết quả thành công
		// return err; // resolve

		// nếu muốn trả về lỗi:
		throw new Error(err);
	}
};
