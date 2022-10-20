import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyBooksStack from './MyBookStack';
import RequestBookstack from './RequestBookStack';
import AddBook from './components/AddBook';
import ProfileStack from './ProfileStack';


const home = 'Book';




const Tab = createBottomTabNavigator();

const MainContainer = () => {
	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator
				initialRouteName={home}
				screenOptions={({ route }) => ({
					headerShown: false,

					tabBarStyle: {
						height: 60,
						padding: 8,
					},
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						let routeName = route.name;

						if (routeName === 'My Books') {
							iconName = focused ? 'book' : 'book-outline';
						} else if (routeName === 'Browse Books') {
							iconName = focused ? 'library' : 'library-outline';
						} else if (routeName === 'Add Book') {
							iconName = focused ? 'add-circle' : 'add-circle-outline';
						} else if (routeName === 'My Profile') {
							iconName = focused ? 'person' : 'person-outline';
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarLabelPosition: 'below-icon',
				})}
			>
				<Tab.Screen name={'Browse Books'} component={RequestBookstack} />
				<Tab.Screen name={'My Books'} component={MyBooksStack} />
				<Tab.Screen name={'Add Book'} component={AddBook} />
				<Tab.Screen name={'My Profile'} component={ProfileStack} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default MainContainer;
