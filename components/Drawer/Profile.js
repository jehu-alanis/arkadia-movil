import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { Card, Button, Icon , Avatar, Badge} from 'react-native-elements';
import { connect } from 'react-redux';


const Profile = ({datesUser}) => {
    return (
        <View style={{flex: 1, marginTop: 90,width:'60%',marginLeft: 100}}>
            <Avatar
            size="large"
            rounded
            source={{
                uri:
                datesUser.length >= 1
                ? datesUser[0].localUri
                : 'data:image/jpeg;base64,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',
            }}
            />
        </View>
    )
}


const mapStateToProps = state => ({
    datesUser: state.user.datesUser,
});
export default  connect(mapStateToProps,null) (Profile)
