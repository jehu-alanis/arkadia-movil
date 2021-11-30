import React from 'react'
import { Card, Button, Icon , Header, Badge} from 'react-native-elements';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ButtonMenu from '../components/Drawer/ButtonMenu';
import Home from './HomeScreen';
import User from './User';
import Shopping from './Shopping';
import Compras from './Compras';
import DrawerComponent from '../components/Drawer/DrawerComponent';
import { connect } from 'react-redux';

const Drawer = createDrawerNavigator();
const Menu = ({ notificaciones }) => {
    return (
    
        notificaciones.length > 0 ? 
    
    <Drawer.Navigator headerMode="screen"     
    drawerContent={(props) => <DrawerComponent {...props}/>}
    >
        <Drawer.Screen name="Home" component={Home} 
        options={{
            drawerIcon: config => <View>
                <Icon name='home' color="black" />            
           </View> 
        }}
        />  
         <Drawer.Screen name="Carrito De Compras" component={Shopping} 
         options={{
            drawerIcon: config => <View>
                <Icon name='shopping-cart' color="black" />            
           </View> 
        }}/>
         <Drawer.Screen name="Compras" component={Compras} options={{
             drawerLabel: 'Mis Compras',
            drawerIcon: config => <View>           
           <Badge value={notificaciones.length} status="primary" containerStyle={{ position: 'absolute', top: -7, right: -10 }} />
                
                <Icon name='shopping-bag' color="black" />
                  
           </View> 
              
        }}/>
          <Drawer.Screen name="User" component={User} 
            options={{
            drawerLabel: 'Settings',
            drawerIcon: config => <View>
                <Icon name='settings' color="black" />            
           </View> 
        }}/> 
     </Drawer.Navigator> :
     <Drawer.Navigator headerMode="screen"     
     drawerContent={(props) => <DrawerComponent {...props}/>}
     >
         <Drawer.Screen name="Home" component={Home} 
         options={{
             drawerIcon: config => <View>
                 <Icon name='home' color="black" />            
            </View> 
         }}
         />  
          <Drawer.Screen name="Carrito De Compras" component={Shopping} 
          options={{
             drawerIcon: config => <View>
                 <Icon name='shopping-cart' color="black" />            
            </View> 
         }}/>
          <Drawer.Screen name="Compras" component={Compras} options={{
              drawerLabel: 'Mis Compras',
             drawerIcon: config => <View>           
                 
                 <Icon name='shopping-bag' color="black" />
                   
            </View> 
               
         }}/>
           <Drawer.Screen name="User" component={User} 
             options={{
             drawerLabel: 'Settings',
             drawerIcon: config => <View>
                 <Icon name='settings' color="black" />            
            </View> 
         }}/> 
      </Drawer.Navigator>
    )
}
const mapStateToProps = state => ({
    notificaciones: state.product.notificaciones
});
export default connect(mapStateToProps, null)(Menu)
