import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'
import Screen4 from './components/Screen4'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Screen1" component={Screen1} />

        <Stack.Screen style={styles.container} name="Screen2" component={Screen2} options={{
          headerStyle: { backgroundColor: '#fff' },
          title: 'Shops Near Me',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            color: '#000'
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(); // Xử lý sự kiện khi nút "Back" được nhấn
              }}
            >
              <Image
                source={require('./assets/back.png')}
                style={{ width: 32, height: 32, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                //navigation.goBack(); // Xử lý sự kiện khi nút "Cart" được nhấn
              }}
            >
              <Image
                source={require('./assets/find.png')}
                style={{ width: 32, height: 32, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }} />


        {/* 3 */}
        <Stack.Screen style={styles.container} name="Screen3" component={Screen3} options={{
          headerStyle: { backgroundColor: '#fff' },
          title: 'Drinks',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 20,
            color: '#000'
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(); // Xử lý sự kiện khi nút "Back" được nhấn
              }}
            >
              <Image
                source={require('./assets/back.png')}
                style={{ width: 32, height: 32, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                //navigation.goBack(); // Xử lý sự kiện khi nút "Cart" được nhấn
              }}
            >
              <Image
                source={require('./assets/find.png')}
                style={{ width: 32, height: 32, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }} />


        {/* 4 */}

        <Stack.Screen style={styles.container} name="Screen4" component={Screen4} options={{
          headerStyle: { backgroundColor: '#fff' },
          title: 'Your orders',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 20,
            color: '#000'
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(); // Xử lý sự kiện khi nút "Back" được nhấn
              }}
            >
              <Image
                source={require('./assets/back.png')}
                style={{ width: 32, height: 32, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                //navigation.goBack(); // Xử lý sự kiện khi nút "Cart" được nhấn
              }}
            >
              <Image
                source={require('./assets/find.png')}
                style={{ width: 32, height: 32, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }} />

      </Stack.Navigator>


    </NavigationContainer>


  );
}
function headerLeft() {
  return (
    <View style={styles.head}>
      <Image
        style={{ width: 32, height: 32 }} resizeMode='contain'
        source={require('./assets/back.png')}
      />

    </View>

  )
}
function headerRight() {
  return (
    <View style={styles.head}>
      <Image
        style={{ width: 32, height: 32 }} resizeMode='contain'
        source={require('./assets/find.png')}
      />
    </View>

  )
}
function headerTitle() {
  return (
    <View style={styles.head}>
      <Text style={styles.textTitle}>Shops Near Me</Text>

    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    height: '50%',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: '2%'
  },

});

