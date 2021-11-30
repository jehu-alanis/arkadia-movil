import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card, Button, Icon } from 'react-native-elements';
import {useIsFocused} from '@react-navigation/native';

const Article = ({product}) => {

    return (
        <View>
                 <Card style={{width: '100%',flexDirection: "row",flexWrap: "wrap"}}>
                  <Image
            style={{ width: 200, height: 130 }}
            source={{ uri: product.image }}
            />

            <View style={{ width: 150,marginBottom: 10, marginLeft: 7 }}>
            <Text>Articulo: {product.Name} </Text>
            <Text>Cantidad: {product.Cantidad}x </Text>
            <Text>Precio: {product.PrecioU}MXN </Text>
            </View>
            </Card>
        </View>
    )
}

export default Article
