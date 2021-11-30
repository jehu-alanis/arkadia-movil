import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { Card, Button, Icon , Avatar, Badge} from 'react-native-elements';
import Profile from './Profile';





const DrawerComponent = (props) => {

    return (
        <View style={{flex: 1, backgroundColor: '#fff',color: '#fff' }}>
            <View style={{height:150,width:'100%',justifyContent:'center', alingItems: 'center'}}>
            <Profile/>
            </View>
            <DrawerContentScrollView 
            {...props}
           >
                <DrawerItemList {...props}
                 activeBackgroundColor="#6685A4"
                 labelStyle={{color: '#FFF'}}
                 />
            </DrawerContentScrollView>
            
        </View>
    )
}


export default DrawerComponent
