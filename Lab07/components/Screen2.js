import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import Screen3 from './Screen3'
import Screen1 from './Screen1'



export default function Screen2({ navigation }) {
  var [data, setData] = useState([]);
  var [color, setColor] = useState('');
  useEffect(() => {
    fetch("https://654627f0fe036a2fa95543d6.mockapi.io/Shops")
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        {/* <View style={{ height: '15%' }}>

      </View> */}
        {data.map((item) => {
          return (


            <View style={styles.body}>

              <TouchableOpacity onPress={
                () => { navigation.navigate("Screen3") }} >
                <View style={styles.item}>
                  <Image style={{ width: '100%', height: 110, borderRadius: 20 }} resizeMode='contain' source={{ uri: item.image }} />
                </View>

                <View style={styles.row}>
                  <Text style={[styles.text, { color: item.status === "Accepting Orders" ? 'green' : 'red' }]}>{item.status}</Text>
                  <Text style={[styles.text, { color: 'red' }]}>{item.minutes}</Text>
                </View>
                <View style={styles.detail}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }} >{item.name}</Text>
                  <Text>{item.address} </Text>
                </View>
              </TouchableOpacity>
            </View>


          )
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#dddbd9',
    display: 'flex',
  },
  cover: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },

  body: {
    width: '85%',
    height: '25%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    // marginBottom: '5%',
    borderRadius: 20,
    marginBottom: 5
    // marginTop:'5%'

  },
  item: {
    width: '100%',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  text: {
    marginTop: 5,
    backgroundColor: '#dddbd9',
    height: 20,
    width: 150,
    fontSize: 14
  },
  detail: {
    marginLeft: 10
  }






});
