import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import Screen2 from './Screen2'
export default function Screen1({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wellcome to Cafe world</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity >
        <Image source={require('../assets/Image.png')} style={{ width: null, height: 75 }} resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../assets/Image (1).png')} style={{ width: null, height: 75 }} resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../assets/Image (3).png')} style={{ width: null, height: 75 }} resizeMode='contain' />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button} 
        onPress={
          ()=>{navigation.navigate("Screen2")}} >
          <Text style={styles.buttonTitle}
          >GET STARTED</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 500
  },
  body: {
    width: '100%',
    height: '60%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  footer: {
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
  },
  button:{
    backgroundColor:'#00BDD6',
    height: 50,
    width:200,
    paddingTop:8

  },
   buttonTitle:{
    fontSize: 22,
    fontWeight: 500,
    textAlign:'center',
    color:'#fff'
   }
});
