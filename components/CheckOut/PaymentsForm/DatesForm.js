import React,{useState,useEffect} from 'react';
import { View, Text, SafeAreaView, ScrollView ,TouchableOpacity,Alert} from 'react-native'
import { Card, Button, Icon, Input } from 'react-native-elements';
import addUser from '../../../redux/actions/addUser';
import { connect } from 'react-redux';

const DatesForm = ({addUser,datesUser}) => {
    const [dates,setDates] = useState(
        {
         fullName : "",
         correo: "",
         direccion: "",
         pais: "",
         ciudad: "",
        }
        );  

      const handleTextDataPropState = (dataPropName,value)=> {
              setDates({
                ...dates,            
                        [dataPropName]: value,
                    
                });
        }
        const Press = ( )=>{
            Alert.alert('Datos Actualizado');
            addUser(dates);
        }
       
    return (
        <SafeAreaView >    
        <ScrollView>

        <View style={{flex: 1}}>
            <View>
                <Input
                placeholder='Nombre Completo'
                leftIcon={
                <Icon
                    name='person'
                    size={24}
                    color='black'
                />
                }
                onChangeText={(value) => handleTextDataPropState('fullName',value)}
                value={datesUser.length >= 1 ? datesUser[0].fullName : dates.fullName}
                />
                <Input
                placeholder='Correo electronico'
                leftIcon={
                <Icon
                    name='mail'
                    size={24}
                    color='black'
                />
                }
                onChangeText={(value) => handleTextDataPropState('correo',value)}
                value={datesUser.length >= 1 ? datesUser[0].correo : dates.correo}
                />
            </View>
            <View>
            <Input
                placeholder='Direccion de entrega'
                leftIcon={
                <Icon
                    name='map'
                    size={24}
                    color='black'
                />
                }
                onChangeText={(value) => handleTextDataPropState('direccion',value)}
                value={datesUser.length >= 1 ? datesUser[0].direccion : dates.direccion}
                />
                
                <View style={{width: '35%',flexDirection: "row"}}>
                <Input
                placeholder='Pais'
                leftIcon={
                <Icon
                    name='flag'
                    size={24}
                    color='black'
                />
                }
                onChangeText={(value) => handleTextDataPropState('pais',value)}
                value={datesUser.length >= 1 ? datesUser[0].pais : dates.pais}
                />
                <Input
                placeholder='Ciudad'
                leftIcon={
                <Icon
                    name='flag'
                    size={24}
                    color='black'
                />
                
                }
                onChangeText={(value) => handleTextDataPropState('ciudad',value)}
                value={datesUser.length >= 1 ? datesUser[0].ciudad : dates.ciudad}
                />
                </View>
            </View>
             <View>   
            <TouchableOpacity onPress={() => Press()} >
           <Icon
          name='save' 
          color='#000'
         />
         <Text style={{ marginBottom: 5 ,textAlign: "center"}}>Actualizar</Text>
          </TouchableOpacity>
          </View>
        </View>
</ScrollView>
    </SafeAreaView>
    )
}

const mapStateToProps = state => ({
    datesUser: state.user.datesUser,
});

const mapDispatchToProps = {
    addUser,
};
export default  connect(mapStateToProps,mapDispatchToProps)(DatesForm)