import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#FFD6E3',
                    },
                    headerTitleStyle: {
                        color: '#D87093',
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',

                    tabBarStyle: {
                        backgroundColor: '#FFFFFF',
                        height: 65,
                        paddingBottom: 8,
                        borderTopWidth: 0,
                    },

                    tabBarActiveTintColor: '#D87093',
                    tabBarInactiveTintColor: '#B8B8B8',
                }}>
                <Tab.Screen name="Perfil" component={PerfilScreen} />

                <Tab.Screen name="Habilidades" component={HabilidadesScreen} />

                <Tab.Screen name="Projetos" component={ProjetosScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
