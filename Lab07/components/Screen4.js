import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Screen3 from './Screen3'


export default function Screen4({navigation,route}) {
  var data = route.params?.cart;
  // var [data, setData] = useState(cart);
  var [color, setColor] = useState('');
  const  [price, setPrice] = useState(0);


  useEffect(() => {
    let p = 0;
    for (let i = 0; i < data.length; i++) {
      p += data[i].price;
    }
    setPrice(p);
  }, [data]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.delivery}>
          <View style={styles.title}>
            <Text style={styles.text1}>CAFE DELIVERY</Text>
            <Text style={styles.text2}>Order #18</Text>
          </View>
          <View style={styles.price}>

            <Text style={styles.text3}>$5</Text>
          </View>
        </View>
        <View style={styles.cafe}>
          <View style={styles.title}>
            <Text style={styles.text1}>CAFE</Text>
            <Text style={styles.text2}>Order #18</Text>
          </View>
          <View style={styles.price}>

            <Text style={styles.text3}>${price}</Text>
          </View>
        </View>
      </View>
      {data.map((item) => {
        return (
          <View style={styles.body}>
            <View style={styles.img}>
              <Image style={{ width: 60, height:60, borderRadius: 5 }} resizeMode='contain' source={{ uri: item.image }} />
            </View>
            <View style={styles.column}>
              <Text style={{fontSize:15, fontWeight:'bold'}}>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
            <View style={styles.row}>
              <Pressable>
              <Image source={require('../assets/minus.png')} style={{ width: 25, height: 25 }} resizeMode='contain'  />
              </Pressable>
              <Pressable>
              <Image source={require('../assets/plus.png')} style={{ width: 25, height: 25 }} resizeMode='contain'  />
              </Pressable>
  
            </View>
          </View>
        )})}
      <View style={styles.footer}>
        <Pressable style={styles.cart}>
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 500, textAlign: 'center', height: 40 }}>PAY NOW</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'30%',
  },
  delivery:{
    backgroundColor:'#00BDD6',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
    height:'48.5%',
    
    borderRadius:10
  },
  cafe:{
    backgroundColor:'#8353E2',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
    height:'48.5%',
    borderRadius:10,
    marginTop:'3%'
  },
  body: {
    width: '90%',
    height: 60,
    marginBottom: 5,
    borderColor: '#bbb',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
    width: '40%'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
    margin: 'auto'

  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  cart: {
    backgroundColor: '#EFB034',
    height: 40,
    width: '80%',
    paddingTop: '1%',
    borderRadius: 10
  },
  text1:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
  },
  text2:{
    fontSize:20,
    fontWeight:400,
    color:'#fff'
  },
  text3:{
    fontSize:22,
    fontWeight:'bold',
    color:'#fff',
  },
  price:{
    display:'flex',
    justifyContent:'center',
    marginRight:20
  },
  title:{
    display:'flex',
    justifyContent:'center',
    marginLeft:20
  }


});
