import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Card, Button,Icon,Badge } from 'react-native-elements'
import { connect } from 'react-redux';

const ButtonMenu = ({ navigation,notificaciones }) => {

    return (
       notificaciones.length > 0 ?
        <View>
             <Badge value={notificaciones.length} status="primary" containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
    
          <Button
                    icon={<Icon name='menu' color="black" />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginTop: 0, marginBottom: 0 }}
                    type="clear"
                    onPress={() => navigation.openDrawer()}
                />
        </View>:
        <View>
      
     <Button
               icon={<Icon name='menu' color="black" />}
               buttonStyle={{ borderRadius: 0, marginLeft: 0, marginTop: 0, marginBottom: 0 }}
               type="clear"
               onPress={() => navigation.openDrawer()}
           />
   </View>
    )
}


const mapStateToProps = state => ({
    notificaciones: state.product.notificaciones
});
export default connect(mapStateToProps, null)(ButtonMenu)