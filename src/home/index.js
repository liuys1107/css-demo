import React, {Component} from 'react';
import {connect} from 'dva';
import {Radio} from 'antd';
import {Demo1} from '../demo1';
import {Demo2} from '../demo2';
import {Demo3} from '../demo3';
import {Demo4} from '../demo4';
import {Demo5} from '../demo5';
import {Demo6} from '../demo6';
import './index.less';

@connect(state => ({home: state.home}))
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: 'demo1'
		};
	}

	handleSizeChange = (e) => {
		this.setState({type: e.target.value});
	};
	/* eslint-disable no-console */
	render() {
		const {type} = this.state;
		return (
			<div className="home">
				<h1>
					css-demo
				</h1>
				<div className="home-tabs">
					<Radio.Group value={type} onChange={this.handleSizeChange}>
						<Radio.Button value="demo1">demo1</Radio.Button>
						<Radio.Button value="demo2">demo2</Radio.Button>
						<Radio.Button value="demo3">demo3</Radio.Button>
						<Radio.Button value="demo4">demo4</Radio.Button>
						<Radio.Button value="demo5">demo5</Radio.Button>
						<Radio.Button value="demo6">demo6</Radio.Button>
					</Radio.Group>
				</div>
                {type === 'demo1' && (<Demo1/>)}
                {type === 'demo2' && (<Demo2/>)}
                {type === 'demo3' && (<Demo3/>)}
                {type === 'demo4' && (<Demo4/>)}
                {type === 'demo5' && (<Demo5/>)}
                {type === 'demo6' && (<Demo6/>)}
			</div>
		);
	}
}

export default Home;
