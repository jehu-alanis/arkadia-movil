import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

const Total = ({total}) => {
    const navigation = useNavigation();

    let Total = total.map( x => x.PrecioT);
    const getBasketTotal = Total.reduce((acc,amount)=> acc + amount ,0);       
    return (
        <View style={{width: '90%',backgroundColor: '#990000',flexDirection: "row"}}>
            <Text style={{ marginBottom: 5 ,color: '#fff',marginRight: 4}}>
                </Text>

               <Text style={{ marginBottom: 5 ,color: '#fff',textAlign: "center",marginRight: "25%"}}>
               Total: ${getBasketTotal}.MXN </Text>

            <View style={{backgroundColor: '#990000'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Payment")} >
           <Icon
          name='credit-card' 
          color='#fff'
         />
         <Text style={{ color: '#fff'}}>Pagar</Text>
          </TouchableOpacity>  
          </View> 
        </View>
    )
}

const mapStateToProps = state => ({
    total: state.product.total,
});
export default   connect(mapStateToProps, null) (Total)
