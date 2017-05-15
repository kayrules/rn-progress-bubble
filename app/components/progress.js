import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Dimensions,
	Text
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import Baloon from './baloon';

const widthGap = 15;

export default class Progress extends Component {
	constructor(props) {
		super(props);

		this.state = {
			progress: this.props.progress
		};
	}
	render() {
		// setTimeout((function() {
		// 	this.setState({ progress: this.state.progress + (0.4 * Math.random())});
		// }).bind(this), 1000);

		return (
			<View style={[styles.container, {width: this.props.width}]}>
				<Text style={styles.caption}>{this.props.caption}</Text>
				<Baloon width={this.props.width-widthGap*2} progress={this.state.progress} valText={this.props.valText} />
				<ProgressBar progress={this.state.progress} width={this.props.width-widthGap*2} color="#494949" height={4} animated={true}/>
				<View style={styles.quotaValue}>
					<Text style={styles.minQuota}>{this.props.minText}</Text>
					<Text style={styles.maxQuota}>{this.props.maxText}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e0e0e0',
		height: 75,
		borderRadius: 10,
		marginBottom: 5
	},
	caption: {
		left: widthGap,
		top: -8,
		width: '100%',
		fontSize: 11,
		fontWeight: 'bold',
		color: 'black'
	},
	quotaValue: {
		width: '100%',
		flexDirection: 'row'
	},
	minQuota: {
		left: widthGap,
		flex: 0.5,
		fontSize: 10,
		fontWeight: 'bold',
		color: 'black'
	},
	maxQuota: {
		right: widthGap,
		textAlign: 'right',
		flex: 0.5,
		fontSize: 10,
		fontWeight: 'bold',
		color: 'black'
	}
});
