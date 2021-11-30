import React,{useState,useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Total from './Total';
import calcTotal from '../../redux/actions/calcTotal';
import deleteProduct from '../../redux/actions/deleteProduct';

const CheckOutPage = ({ product , calcTotal,id,deleteProduct}) => {

const[cantidad,setCantidad] = useState(1);

    const[cato,setCato] = useState(0);

const add = () => {
  setCantidad(cantidad + 1);
//  calcTotal({Product: id,PrecioT: cato,Cantidad: cantidad});
}

const remove = () => {
  setCantidad(cantidad - 1);
}


useEffect(() => {
  setCato(product.price * cantidad);

 calcTotal({Product: id,PrecioT: cato,Cantidad: cantidad, Name: product.name, Productid: product.id, 
  image: product.image ,PrecioU: product.price});
}, [add]);

useEffect(() => {
  setCato(product.price * cantidad);
  calcTotal({Product: id,PrecioT: cato,Cantidad: cantidad, Name: product.name, Productid: product.id,
    PrecioU: product.price, image: product.image});
}, [remove]);


    return (
        <View style={styles.itemContainer}>
      <Card style={styles.card}>
        <Card.Title>{product.name}</Card.Title>

        <Card.Divider />

        <View style={styles.text}>
          <Image
            style={{ width: 150, height: 130 }}
            source={{ uri: product.image }}
          />

          <View style={{ flexDirection: "column", alignItems: "center", alignContent: "space-around" }}>
            <Text style={{ marginBottom: 10, marginLeft: 4 }}>
              {product.description}
            </Text>
            <Text style={{ marginBottom: 2 }}>
            {cato === 0 ? `$ ${product.price} MXN` : `$ ${cato} MXN` }
            </Text>

         
      <TouchableOpacity onPress={() => deleteProduct(product.id)} >
           <Icon
          name='delete' 
          
         />
          </TouchableOpacity>
          </View>

          
        </View>
        <Text style={{ marginBottom: 2,left: 45 }}>
              Cantidad
            </Text>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        
           <TouchableOpacity style={{width: '20%',backgroundColor: '#990000'}}>
           <Icon
          name='add' 
          color='#fff'
          onPress={() => add()}/>
          </TouchableOpacity>     
          <Text style={{ marginBottom: 2 ,textAlign: "center",width: '10%'}}>
              {cantidad}
            </Text>
           <TouchableOpacity style={{width: '20%',backgroundColor: '#990000'}}>
           {
          cantidad >= 1 ?  
           <Icon
         name='remove'
         color='#fff' 
         onPress={() => remove()}/>
         : <Text style={{ marginBottom: 5 ,width: '20%'}}></Text> }
         </TouchableOpacity> 
          
          
                
        </View>
       </Card>
    </View>
    )
}

const styles = StyleSheet.create(
    {
      itemContainer: {
        marginLeft: -30,
        padding: 2,
        marginVertical: 8,
        borderRadius: 5,
        // alingItems: 'center',
        minWidth: '110%',
        //flex: 1,
        flexDirection: "row",
        //height: '100%',
  
      },
      card: {
        // alingItems: 'center',
        minWidth: '150%',
        //flex: 1,
        maxHeight: '50%',
  
      },
      text: {
        flexDirection: "row",
        marginLeft: 0,
        width: '50%',
      },
      image2: {
        width: '25%',
        marginRight: 20,
      }
  
    });

    const mapDispatchToProps = {
      calcTotal,
      deleteProduct,
  };


export default connect(null, mapDispatchToProps) (CheckOutPage)
