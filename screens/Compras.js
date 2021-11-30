import React, { useEffect, useLayoutEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import ListCompras from '../components/Compras/ListCompras';
import deleteNotis from '../redux/actions/deleteNotis';

import { useIsFocused } from '@react-navigation/native';

const Compras = ({ comprasDia, navigation }) => {
    const isFocused = useIsFocused();

    useEffect(() => {
        deleteNotis();
    }, [isFocused]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: { backgroundColor: '#990000' },
            headerTitleStyle: { color: '#fff' },
            headerShown: true,
        })
    }, [navigation])


    return (
        <SafeAreaView >
            <ScrollView>
                <View style={{ flex: 1 }}>
                    {
                        comprasDia.map((product, i) => (
                            <ListCompras key={i} product={product} />
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const mapStateToProps = state => ({
    comprasDia: state.product.compras,
});

const mapDispatchToProps = {
    deleteNotis,
};
export default connect(mapStateToProps, mapDispatchToProps)(Compras)