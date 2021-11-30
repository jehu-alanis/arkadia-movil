import React,{useState,useEffect} from 'react';
import { View } from 'react-native'
import { Card, Button, Icon,Divider,Text } from 'react-native-elements';

const Safe = ({datesUser,total}) => {
    
    let Total = total.map( x => x.PrecioT);
    const getBasketTotal = Total.reduce((acc,amount)=> acc + amount ,0);

    return (
        <View style={{flex: 1}}>   
  
  {
      datesUser.map((user,i) => (
          <Card key={i} style={{width: '100%',flexDirection: "row"}}>
        <Text style={{width: '100%'}}>Nombre: {user.fullName} </Text>
        <Text style={{width: '100%'}}>Correo: {user.correo} </Text>
        <Text style={{width: '100%'}}>Entregar en : {user.direccion} </Text>
        <Text style={{width: '100%'}}>{user.pais} </Text>
        <Text style={{width: '100%'}}> {user.ciudad} </Text>
          </Card>
           ))
  }

    {
      total.map((total,i) => (
        <Card key={i} style={{width: '100%',flexDirection: "row",flexWrap: "wrap"}}>
      <Text>Articulo: {total.Name} </Text>
      <Text>Cantidad: {total.Cantidad}x </Text>
      <Text>Precio: ${total.PrecioU}MXN </Text>
      </Card>
    ))
    }

    <Card style={{width: '90%',flexDirection: "row"}}>
            
    <Text style={{ marginBottom: 5 ,textAlign: "center"}}>
        Total: ${getBasketTotal}.MXN </Text>
    </Card>

   
    <Card>
        <Card.Title>Gracias por su compra</Card.Title>

        <Card.Divider />
     
      </Card>
</View>
    )
}

export default Safe