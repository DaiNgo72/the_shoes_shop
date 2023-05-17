import { Carousel } from 'antd';
import { Fragment, useEffect, useRef } from 'react';

const contentStyle = {
	margin: 0,
	color: '#fff',
	textAlign: 'center',
	background: '#364d79',
};

function CarouselHome() {
	const carouselRef = useRef();

	const onChange = (currentSlide) => {
		console.log(currentSlide);
	};

	return (
		<Fragment>
			<button
				onClick={() => {
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
			<Carousel
				ref={carouselRef}
				effect={'scrollx'}
				dotPosition='top'
				afterChange={onChange}>
				<div style={contentStyle}>
					<img
						src='https://i.pravatar.cc?img=1'
						style={{
							height: 530,
							width: '100%',
							objectFit: 'cover',
						}}
					/>
				</div>
				<div style={contentStyle}>
					<img
						src='https://i.pravatar.cc?img=2'
						style={{
							height: 530,
							objectFit: 'cover',
							width: '100%',
						}}
					/>
				</div>
				<div style={contentStyle}>
					<img
						src='https://i.pravatar.cc?img=3'
						style={{
							height: 530,
							objectFit: 'cover',
							width: '100%',
						}}
					/>
				</div>
				<div style={contentStyle}>
					<img
						src='https://i.pravatar.cc?img=4'
						style={{
							height: 530,
							objectFit: 'cover',
							width: '100%',
						}}
					/>
				</div>
			</Carousel>
		</Fragment>
	);
}

export default CarouselHome;
