import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Screen4 from './Screen4'
import Screen2 from './Screen2'

export default function Screen3({ navigation }) {
  var [data, setData] = useState([]);
  var [color, setColor] = useState('');
  var [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://654627f0fe036a2fa95543d6.mockapi.io/drinks")
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      });
  }, []);
  const addItem = (x) => {
    const newData = [...cart];
    newData.push(x);
    setCart(newData);

  };
  const removeItem = (item) => {
    const index = cart.indexOf(item);

    if (index !== -1) {
      const updatedItems = [...cart];

      // Sử dụng splice để xóa phần tử tại vị trí indexToRemove
      updatedItems.splice(index, 1);

      // Cập nhật danh sách items bằng bản sao mới
      setCart(updatedItems);


    }
  }
  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <View style={styles.body}>
            
              <View style={styles.img}>
                <Image style={{ width: 60, height: 60, borderRadius: 5 }} resizeMode='contain' source={{ uri: item.image }} />
              </View>

            <View style={styles.column}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
            <View style={styles.row}>
              <Pressable
                onPress={
                  () => {
                    removeItem(item)
                    console.log(cart)
                  }}
              >
                <Image source={require('../assets/minus.png')} style={{ width: 25, height: 25 }} resizeMode='contain' />
              </Pressable>
              <Pressable onPress={
                () => {
                  addItem(item)
                  console.log(cart)
                }
              }>
                <Image source={require('../assets/plus.png')} style={{ width: 25, height: 25 }} resizeMode='contain' />
              </Pressable>

            </View>
          </View>
        )
      })}
      <View style={styles.footer}>
        <Pressable style={styles.cart}
          onPress={
            () => {
              navigation.navigate({
                name: 'Screen4', params: { cart: cart },
                merge: true,
              })
            }
          }
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: 500, textAlign: 'center', height: 40 }}>GO TO CART</Text>
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
  }

});
