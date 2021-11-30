import React,{useLayoutEffect,useState} from 'react';
import {  Alert, Modal, StyleSheet, Text, Pressable, View,SafeAreaView, ScrollView, } from 'react-native';
import { Icon,Input, Header, Badge,SearchBar } from 'react-native-elements';
import ProductList from '../components/ProductList';
import Layout from '../components/Layout';
import CarritoBtn from '../components/Drawer/CarritoBtn';
import ButtonMenu from '../components/Drawer/ButtonMenu';
import { Provider } from 'react-redux';
import store from '../store';
import {Picker} from '@react-native-picker/picker';
import filtered from '../redux/actions/filtered';
import search from '../redux/actions/search';
import { connect } from 'react-redux';

const Headers = ({ navigation }) => {
    return (
      <Provider store={store}>
        <View>
          <Header
            leftComponent={<ButtonMenu navigation={navigation}/>}
            centerComponent={{ text: 'ARKADIA SHOP', style: { color: '#fff' } }}
            rightComponent={<CarritoBtn navigation={navigation}/>}    
            containerStyle={{
              backgroundColor: '#990000',
              justifyContent: 'space-around',
            }}
          />
        </View>
      </Provider>
    )
  };
  

const HomeScreen = ({navigation,filtered,search}) => {
  const [selectedValue, setSelectedValue] = useState("Filter");
  const [dates,setDates] = useState("");



  useLayoutEffect(() => {
      navigation.setOptions({
        header: Headers,
        headerShown: true,
      })
  }, [navigation])

const filtros = (itemValue) =>{
  setSelectedValue(itemValue);
  filtered(itemValue);
}

const handleTextDataPropState = (value)=> {
  
setDates(value);
}

    return (
  
        <Layout>  
  <SafeAreaView >
        
        <ScrollView>
          <View style={styles.centeredView2}>
      
            <View style={{width: '50%'}}>
              <Input
                placeholder='Buscar'
                rightIcon={
                  <Icon
                  name='search'
                  size={24}
                  color='white'
                  onPress={() => search(dates)}
                  />
                        }
                onChangeText={(value) => handleTextDataPropState(value)}
                value={dates}
                />
              </View>
      
            <View>
            <Picker
            selectedValue={selectedValue}
            style={{  width: 135,borderRadius: 20,borderWidth: 20,color:"white"  }}
            itemStyle={{color:'#fff'}}
            onValueChange={(itemValue, itemIndex) => filtros(itemValue)}
            >
            <Picker.Item  color='#990000' label="All" value="All" />
            <Picker.Item  color='#990000' label="Accesorios" value="Accesorios" />
            <Picker.Item  color='#990000' label="Cables" value="Cable" />
            <Picker.Item  color='#990000' label="Audifonos" value="Audifonos" />
            <Picker.Item  color='#990000' label="Controles" value="Control" />
            <Picker.Item  color='#990000' label="Camaras" value="Camara" />
            <Picker.Item  color='#990000' label="Accesorios para PCs" value="AccesoriosPC" />
            <Picker.Item  color='#990000' label="Funko pop" value="Funko" />
           
            </Picker>
      
            </View>
          </View>
            <ProductList />
            </ScrollView>
    </SafeAreaView>
        </Layout>
    )
}
const styles = StyleSheet.create({
  
  centeredView2: {
    flexDirection: "row",
    borderWidth: 1, 
    borderColor: 'white', 
    borderRadius: 10,
    marginBottom: 5,
    borderBottomWidth:1,
  },
  
});

const mapDispatchToProps = ({
  filtered,
  search
});

export default connect(null, mapDispatchToProps)(HomeScreen)