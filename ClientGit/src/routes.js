import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import home from './pages/home'
import money from './pages/money'
import store from './pages/store'

import CustomTabBar from './components/CustomTabBar'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor:'#13101a',
                tabBarInactiveTintColor: '#ffd700',
                tabBarActiveBackgroundColor: '#ffd700',
                tabBarInactiveBackgroundColor: '#13101a',

                tabBarStyle:{
                    borderTopWidth: 0,
                }
            }}

            tabBar={ (props) => <CustomTabBar {...props} /> }
        >
            <Tab.Screen name="Home" component={home}
                options={{
                    tabBarIcon: "compare-arrows"
                }}
            />
            <Tab.Screen name="Money" component={money}
                options={{
                    tabBarIcon: "attach-money"
                }}
            />
            <Tab.Screen name="Store" component={store}
                options={{
                    tabBarIcon: "storefront"
                }}
            />
        </Tab.Navigator>
    )
}