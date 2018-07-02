import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../../axios-blog';
import classes from './Compra.css';
import laptop01 from '../../assets/laptop01.jpg';

const Producto = (props) => {
	return (<div className={classes.product_item} category="laptops">
		<img src={laptop01} alt="" />
		<a href="/">{props.name}</a>
		
		<p>{props.description}</p>
		<button href="/">Comprar</button>
	</div>)
}

class Compra extends Component {

	state = {
		products: []
	}
	componentDidMount(){
		axios.get('/products')
			.then(response => {
				console.log('productos',response.data.products)
				this.setState({products: response.data.products})
			})
	}
	render(){
		return (<div className={classes.home}>

			<div className={classes.wrap}>
			<h1>PRODUCTOS</h1>
			<div className={classes.store_wrapper}>
				<section className={classes.products_list}>
					{this.state.products.map(item => (<Producto
						key={item._id}
						name={item.name}
						description={item.description} />))}
				</section>
			</div>
		</div>
	</div>);
	}
}

export default Compra;