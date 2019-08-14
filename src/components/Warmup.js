import React from 'react';
import { connect } from 'react-redux';
import { Select } from './Components';
import { changeType, changeDistance, addExcercise } from '../redux/actions';
import { throwStatement } from '@babel/types';

class Warmup extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			data: [{ key: 0, value: 0, option: 'sprint' }]
		}
		this.createInputField = this.createInputField.bind(this);
		this.addField = this.addField.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleNum = this.handleNum.bind(this)
	}
	handleChange(event) {
		console.log(event.target.value);
		console.log(event.target.name);
		this.props.changeType(event.target.name, 0, event.target.value);
		this.forceUpdate();
	}
	handleNum(event) {
		console.log(event.target.value);
		console.log(event.target.name);
		this.props.changeDistance(event.target.name, 0, event.target.value);
		this.forceUpdate();
	}
	addField() {
		this.props.addExcercise(0);
		this.forceUpdate();
	}
	createInputField(item) {
		console.log(item)
		return (
			<li key={item.key}>
				<input name={item.key.toString()} type="text" pattern="[0-9]*" onInput={this.handleNum.bind(this)} />
				<Select num={item.key.toString()} value={item.option} handleChange={this.handleChange} />
			</li>
		);
	}
	render() {
		console.log(this.props)
		return (
			<div>
				<h2>Warmup</h2>
				<ul>
					{this.props.warmup.map(this.createInputField)}
				</ul>
				<button onClick={this.addField}>+</button>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return state;
}
const mapDispatchToProps = {
	changeDistance,
	changeType,
	addExcercise
}
export default connect(mapStateToProps, mapDispatchToProps)(Warmup);