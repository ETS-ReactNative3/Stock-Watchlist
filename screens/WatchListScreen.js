import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import Header from '../components/header/headerLoginPage';
import WatchList from '../components/watchlist';

const WatchListScreen = () => {
	return (
		<SafeAreaView style={styles.screen}>
			<Header />
			<WatchList />
			<StatusBar backgroundColor='#11468f' style='light' />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#f0f8ff',
	},
});

export default WatchListScreen;
