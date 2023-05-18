import { Carousel } from 'antd';
import { useRef } from 'react';
const contentStyle = {
	margin: 0,
	height: '160px',
	color: '#fff',
	textAlign: 'center',
	background: '#364d79',
};
function CarouselHome() {
	// 1. tao ref;
	const carouselRef = useRef();

	const onChange = (currentSlide) => {
		console.log(currentSlide);
	};

	return (
		<>
			<button
				onClick={() => {
					// 3.
					carouselRef.current.prev();
				}}>
				Back
			</button>
			<button
				onClick={() => {
					carouselRef.current.next();
				}}>
				Next
			</button>
			{/* truyen ref vao */}
			<Carousel ref={carouselRef} afterChange={onChange} dotPosition='top'>
				<div style={contentStyle}>
					<img
						src='https://i.pravatar.cc?img=1'
						style={{
							width: '100%',
							height: 530,
							objectFit: 'cover',
						}}
					/>
				</div>
				<div style={contentStyle}>
					<img
						src='https://i.pravatar.cc?img=2'
						style={{
							width: '100%',

							height: 530,
							objectFit: 'cover',
						}}
					/>
				</div>
				<div style={contentStyle}>
					<img
						src='https://i.pravatar.cc?img=13'
						style={{
							height: 530,
							objectFit: 'cover',
							width: '100%',
						}}
					/>
				</div>
				<div style={contentStyle}>
					<img
						src='https://i.pravatar.cc?img=14'
						style={{
							height: 530,
							objectFit: 'cover',
							width: '100%',
						}}
					/>
				</div>
			</Carousel>
		</>
	);
}

export default CarouselHome;
