import React from 'react'
import {View, Text, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import {Stack} from 'expo-router'
import { useThemeContext, useAuth } from "../../context/auth";
import { stylesLight, stylesDark} from '../../assets/styles/authStyle'

const Dashboard = () => {
	const {credentials, clearCredentials} = useAuth();
	const {theme} = useThemeContext()
	const {username} = credentials
	console.log(theme)
	return (
		<ScrollView 
			showsVerticalScrollIndicator={false} 
			showsHorizontalScrollIndicator={false}
			refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => {}} /> }
		>
			<Drawer.Screen
				options={{
					headerShown: true,
					headerStyle: {
						backgroundColor: theme == 'light' ? COLORS.white : COLORS.dark,
					},
					headerTitleStyle: {
						fontFamily: 'DMMedium'
					},
					headerTintColor: theme == 'light' ? COLORS.dark : COLORS.white ,
					headerTitle: `Dashboard`,
					headerTitleAlign: 'center',
					headerRight: () => (
						<TouchableOpacity style={{paddingRight: 12}} onPress={() => {}}>
							<Entypo name="user" color={theme == 'light' ? COLORS.dark : COLORS.white } size={20} />
						</TouchableOpacity>
					)
				}}
			/>
			<StatusBar 
				barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
			/>
			<SafeAreaView style={theme == 'light' ? stylesLight.page : stylesDark.page}>
				<View style={theme == 'light' ? stylesLight.container : stylesDark.container}>
					<View style={theme == 'light' ? stylesLight.textInputContainer : stylesDark.textInputContainer }>
						<Text>Helo {username}</Text>
						<TouchableOpacity onPress={() => clearCredentials} style={stylesDark.button}>
							<Text>Logout</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View></View>
				<View style={theme == 'light' ? stylesLight.container : stylesDark.container}>
					<Tabs 
                  tabs={tabs}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                /> 
				</View>
				<View>
					{displayTabContent()}
				</View>
			</SafeAreaView>
		</ScrollView>
  )
}

export default Dashboard