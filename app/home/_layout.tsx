import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from ".";
import DetailScreen from "./detail";
import { StyleSheet, View } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator()

export default function HomeLayout(){
  return(
    <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={({route}) => (
          {
            tabBarLabelStyle: {
              textTransform: 'capitalize',
            },
            tabBarIndicatorContainerStyle: {
              borderWidth: 0
            },
            tabBarIndicatorStyle: {
              height: 0,
            },
            tabBarShowLabel: true,
            tabBarIcon: ({focused}) => {

              let icons;

              switch (route.name) {
                case 'Home':
                  icons = <MaterialCommunityIcons name={'home'} size={24} color={focused ? 'black' : 'gray'}/>
                  break;
                default:
                  icons = <MaterialCommunityIcons name={'power-sleep'} size={24} color={focused ? 'black' : 'gray'}/>
                  break;
              }

              return (
                <View style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center'
                }}>
                  <View style={{
                    backgroundColor: focused ? '#7ABA78' : 'transparent',
                    width: 50,
                    height: 28,
                    position: 'absolute',
                    borderRadius: 20,
                    opacity: 0.3
                  }}></View>
                  {icons}
                </View>
              )   
            },
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            },
          }
        )}
      >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen 
        name="Detail"
        component={DetailScreen}
      />
    </Tab.Navigator>
  )
}