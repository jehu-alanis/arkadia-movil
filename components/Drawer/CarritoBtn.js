import React from 'react';
import {  View } from 'react-native';
import { Card, Button, Icon, Header, Badge } from 'react-native-elements'
import { connect } from 'react-redux';

const CarritoBtn = ({item, navigation}) => {

    
    return (  
        item.length > 0 ? 
            <View>
              
                <Badge value={item.length} status="primary" containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
                
                <Button
                    icon={<Icon name='shopping-cart' color="black" />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginTop: 0, marginBottom: 0 }}
                    type="clear"
                    onPress={() => navigation.navigate('Carrito De Compras')}
                />
            </View>:
            <View> 
            <Button
                icon={<Icon name='shopping-cart' color="black" />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginTop: 0, marginBottom: 0 }}
                type="clear"
                onPress={() => navigation.navigate('Carrito De Compras')}
            />
        </View>

    )
}

const mapStateToProps = state => ({
    item: state.product.shop,
});



export default connect(mapStateToProps, null)(CarritoBtn)
