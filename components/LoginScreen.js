import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { firebase } from '../config';

const LoginScreen = () => {
	const auth = firebase.auth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigation = useNavigation();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				navigation.replace('Home');
			}
		});

		return unsubscribe;
	}, []);

	const handleSignUp = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
			})
			.catch((error) => alert(error.message));
	};

	const handleLogin = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				console.log('Logged in with:', user.email);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={'height'}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View className={'mx-auto'}>
					<Text className={'text-2xl mt-20 font-bold text-center'}>
						Welcome to BiblioTech
					</Text>
					<Text className={'mx-auto  text-base mt-10'}>
						blabla bla blabla registration blabla bla login blablljdksajdka
						blabla
					</Text>
					<View className={''}>
						<Text className={'text-base mt-5 mb-2 font-bold'}>Email</Text>
						<TextInput
							className={
								'pl-3 max-w-xs border-2 h-12 border-stone-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
							}
							placeholder="Email"
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
						<Text className={'text-base mt-5 mb-2 font-bold'}>Password</Text>
						<TextInput
							className={
								'pl-3 max-w-xs border-2 h-12 border-stone-300 rounded-md rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:border-pink-500 invalid:text-pink-600'
							}
							placeholder="Password"
							value={password}
							onChangeText={(text) => setPassword(text)}
							secureTextEntry
						/>
					</View>

					<View>
						<TouchableOpacity
							className={'mt-5 bg-sky-500 text-white py-4 px-6 rounded-lg'}
							onPress={handleLogin}
						>
							<Text className={'text-center font-bold text-white text-base'}>
								Login
							</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={handleSignUp}>
							<Text className={'text-base mt-8'}>
								Don't have an account yet?{' '}
								<Text
									className={' text-base font-bold'}
									onPress={() => navigation.navigate('Registration')}
								>
									Register
								</Text>
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

const container = {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
};

export default LoginScreen;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	inputContainer: {
// 		width: '100%',
// 	},
// 	input: {
// 		backgroundColor: 'white',
// 		paddingHorizontal: 15,
// 		paddingVertical: 10,
// 		borderRadius: 10,
// 		marginTop: 5,
// 	},
// 	buttonContainer: {
// 		width: '60%',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		marginTop: 40,
// 	},
// 	button: {
// 		backgroundColor: '#0782F9',
// 		width: '100%',
// 		padding: 15,
// 		borderRadius: 10,
// 		alignItems: 'center',
// 	},
// 	buttonOutline: {
// 		backgroundColor: 'white',
// 		marginTop: 5,
// 		borderColor: '#0782F9',
// 		borderWidth: 2,
// 	},
// 	buttonText: {
// 		color: 'white',
// 		fontWeight: '700',
// 		fontSize: 16,
// 	},
// 	buttonOutlineText: {
// 		color: '#0782F9',
// 		fontWeight: '700',
// 		fontSize: 16,
// 	},
// });
