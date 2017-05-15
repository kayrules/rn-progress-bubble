import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Baloon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			progress: props.progress,
			width: props.width,
			position: props.progress * props.width
		};
	}
	render() {

		return (
			<View style={[styles.ballonContainer, {width: this.state.width}]}>
				<View style={[styles.caretBox, {left: this.state.position}]}>
					<Icon name="caret-down" size={30} color="#bcbcbc" />
				</View>
				<View style={[styles.baloonBox, {left: this.state.position}]}>
					<Text style={styles.baloonText}>{this.props.valText}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	ballonContainer: {
		height: 16,
		flexDirection:'row'
	},
	baloonBox: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#bcbcbc',
		bottom: 7,
		borderRadius: 5,
		width: 48,
		marginLeft: -32
	},
	baloonText: {
		color:'black',
		fontSize: 10
	},
	caretBox: {
		paddingBottom: 10,
		bottom: 6,
		marginLeft: -8
	}
});
