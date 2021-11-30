import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card, Button, Icon } from 'react-native-elements';
import {useIsFocused} from '@react-navigation/native';
import Article from '../Compras/Article';

const ListCompras = ({product}) => {

    let {total}  = product;

      

    return (
        <View>
         <Card style={{width: '100%',flexDirection: "row",flexWrap: "wrap"}}>
         <View style={{ marginBottom: 5,marginTop:5}}>
         <Text style={{textAlign:"center"}}>Compra hecha el :{product.date} </Text>
         </View>
          {
        total.map((product,i) => (
            <Article key={i} product={product}/>
        ))
          }
        
      
    <View style={{ marginBottom: 5,marginTop:5}}>
         
   
    <Text style={{textAlign:"center"}}>Total:{product.getBasketTotal} $MXN </Text>
    </View>
    
    </Card>
  
        </View>
    )
}

export default ListCompras
