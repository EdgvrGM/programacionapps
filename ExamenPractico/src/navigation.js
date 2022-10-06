import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./views/home";
import Add from "./views/add";
import Login from "./views/login";
import Signup from "./views/signup";

const Stack = createNativeStackNavigator();

function MyApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
      <Stack.Screen name="Signup" options={{headerShown: false}} component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Add" component={Add} options={{presentation: "modal", headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyApp />
    </NavigationContainer>
  );
}
