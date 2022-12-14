import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { firebase } from '../../config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/core';

const Profile = () => {
	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				navigation.replace('LoginScreen');
			})
			.catch((error) => alert(error.message));
	};
	const navToUpdate = () => {
		navigation.replace('Update Profile');
	};
	const navigation = useNavigation();
	const auth = firebase.auth();
	const db = firebase.firestore();
	const [userDetails, setUserDetails] = React.useState('');

	React.useEffect(() => {
		db.collection('users')
			.doc(auth.currentUser?.uid)
			.get()
			.then((snapshot) => {
				setUserDetails(snapshot.data());
			});
	}, []);

	return (
		<View>
			<View style={styles.container}>
				<Image
					style={styles.profileImg}
					source={require('../../assets/avatar_03.png')}
				/>
				<Text style={styles.fullName}>
					{userDetails.firstName} {userDetails.lastName}
				</Text>
				<Text style={styles.username}>@{userDetails.username}</Text>
				<View style={styles.locationWrapper}>
					<Ionicons name="md-location-sharp" style={styles.icon} />
					<Text style={styles.location}>{userDetails.location}</Text>
				</View>
				<TouchableOpacity onPress={navToUpdate}>
					<View style={styles.editWrapper}>
						<Icon name="edit" style={styles.iconProfile} />
						<Text style={styles.editProfile}>Edit profile</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.booksWrapper}>
				<View style={styles.bookContainer}>
					<Text style={styles.books}>Books borrowed</Text>
					<Text style={styles.bookNumber}>{userDetails.booksBorrowed}</Text>
				</View>
				<View style={styles.bookContainer}>
					<Text style={styles.books}>Books for lending</Text>
					<Text style={styles.bookNumber}>{userDetails.booksForLend}</Text>
				</View>
			</View>
			<View>
				<TouchableOpacity style={styles.button} onPress={handleSignOut}>
					<Text style={styles.textButton}>Sign out</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	profileImg: {
		width: 220,
		height: 125,
		resizeMode: 'contain',
	},
	container: {
		marginTop: '4rem',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	fullName: {
		fontSize: '1.2rem',
		fontWeight: 'bold',
		marginTop: '1rem',
	},
	username: {
		marginTop: '.5rem',
		fontSize: '1rem',
	},
	locationWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'baseline',
		marginTop: '.1rem',
		gap: '.2rem',
	},
	location: {
		marginTop: '.5rem',
		fontSize: '1rem',
	},
	editProfile: {
		fontSize: '1rem',
		fontWeight: '500',
		color: '#808080',
		paddingRight: '.3rem',
		paddingBottom: '.3rem',
		paddingTop: '.3rem',
	},
	editWrapper: {
		flex: 1,
		flexDirection: 'row',
		marginTop: '2.4rem',
		gap: '.2rem',
		alignItems: 'center',
		borderWidth: 2,
		borderRadius: '.5rem',
		borderColor: '#808080',
	},
	icon: {
		fontSize: '1.2rem',
	},
	iconProfile: {
		fontSize: '1.2rem',
		color: '#808080',
		paddingLeft: '.3rem',
	},
	booksWrapper: {
		marginTop: '4rem',
		marginLeft: '1rem',
		marginRight: '1rem',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		gap: '1rem',
	},
	bookContainer: {
		height: '6rem',
		flex: 1,
		alignItems: 'center',
		borderRadius: '.5rem',
		borderWidth: '.1rem',
		borderColor: '#E9E9E9',
		backgroundColor: '#F5F5F5',
	},
	books: {
		paddingTop: '1rem',
		fontSize: '1rem',
	},
	bookNumber: {
		paddingTop: '1rem',
		fontSize: '1.5rem',
		fontWeight: 'bold',
	},
	button: {
		marginTop: '-3rem',
		marginLeft: '1rem',
		marginRight: '1rem',
		alignItems: 'center',
		paddingVertical: 12,
		paddingHorizontal: 18,
		borderRadius: '0.5rem',
		elevation: 3,
		borderWidth: '.1rem',
		borderColor: '#007fff',
	},
	textButton: {
		fontSize: '1.1rem',
		fontWeight: 'bold',
		color: '#007fff',
	},
});

export default Profile;
