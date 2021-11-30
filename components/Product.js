import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import addProduct from '../redux/actions/addProduct';


const Product = ({ product, addProduct }) => {
  
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <Card style={styles.card}>
        <Card.Title>{product.name}</Card.Title>

        <Card.Divider />

        <View style={styles.text}>
          <Image
            style={{ width: 150, height: 130 }}
            source={{ uri: product.image }}
          />

          <View style={{ flexDirection: "column", alignItems: "center", alignContent: "space-around" }}>
            <Text style={{ marginBottom: 10, marginLeft: 4 }}>
              {product.description}
            </Text>
            <Text style={{ marginBottom: 2 }}>
              ${product.price} Mxn
            </Text>

            <Button
              icon={<Icon name='shopping-cart' color="white" />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginTop: 10, marginBottom: 0, width: '30%', backgroundColor: '#990000' }}
              onPress={() => addProduct(product)}
              type="outline"
            />
          </View>

        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          {
            Array(product.rating)
              .fill()
              .map((_, i) => (
                <Icon name='stars' color='#f50' key={i} />
              ))}
        </View>
      </Card>

      {/* <TouchableOpacity style={{ backgroundColor: '#ee5253', padding: 7, borderRadius: 5}}
            onPress={() => handleDelete(task.id)}
            >
                <Text style={{ color: '#fff'}}>Delete</Text>
            </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create(
  {
    itemContainer: {
      marginLeft: -30,
      padding: 2,
      marginVertical: 8,
      borderRadius: 5,
      // alingItems: 'center',
      minWidth: '110%',
      //flex: 1,
      flexDirection: "row",
      //height: '100%',

    },
    card: {
      // alingItems: 'center',
      minWidth: '150%',
      //flex: 1,
      maxHeight: '50%',

    },
    text: {
      flexDirection: "row",
      marginLeft: 0,
      width: '50%',
    },
    image2: {
      width: '25%',
      marginRight: 20,
    }

  });

const mapDispatchToProps = ({
  addProduct,
});

export default connect(null, mapDispatchToProps)(Product)
