import React, { useEffect, useState, useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView, View, RefreshControl, StyleSheet } from 'react-native';
import CheckOutPage from '../components/CheckOut/CheckOutPage';
import { connect } from 'react-redux';
import { Text, Image } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import Layout from '../components/Layout';
import Total from '../components/CheckOut/Total';

function Shopping({ item, navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#990000' },
      headerTitleStyle: { color: '#fff' },
      headerShown: true,
    })
  }, [navigation])

  const [task, setTask] = useState(false);

  const isFocused = useIsFocused();

  const loadTasks = () => {
    if (item.length > 0) {
      setTask(true)

    } else if (item.length <= 0) { setTask(false) }
  }


  useEffect(() => {
    loadTasks();
  }, [isFocused]);

  return (
    <Layout>
      <SafeAreaView >
        <ScrollView>

          {
            task ? <View style={[styles.container, {
              flexDirection: "row",
              flexWrap: "wrap"
            }]}
            >
              {
                item.map((product, i) => (
                  <CheckOutPage key={i} product={product} id={i} />
                ))
              }
              <Total navigation={navigation} />

            </View>
              : <View style={[styles.container, {
                flexDirection: "row",
                flexWrap: "wrap"
              }]}>
                <Text h3 h3Style={{ color: '#fff' }}>
                  Parece que tu carrito de compras esta vacio.
                </Text>
              </View>

          }

        </ScrollView>
      </SafeAreaView>

    </Layout>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
const mapStateToProps = state => ({
  item: state.product.shop,
  notificaciones: state.product.notificaciones
});

export default connect(mapStateToProps, null)(Shopping)
