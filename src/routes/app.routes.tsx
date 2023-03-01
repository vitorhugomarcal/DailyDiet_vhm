import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Confirm } from '@screens/Confirm'
import { Diet } from '@screens/Diet'
import { Home } from '@screens/Home'
import { New } from '@screens/New'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="diet" component={Diet} />
      <Screen name="new" component={New} />
      <Screen name="confirm" component={Confirm} />
    </Navigator>
  )
}