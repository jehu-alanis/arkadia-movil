import React,{useState,useEffect} from 'react';
import { View, Text } from 'react-native'
import { Card, Button, Icon,Input } from 'react-native-elements';

const CardForm = () => {
    const [dates,setDates] = useState(
        {id: 1,
         fullName : "",
         CardNumeric: "",
         Mes: "",
         Ano: "",
         CVC: "",
        }
        );
        
      const handleTextDataPropState = (dataPropName,value)=> {
              setDates({
                    data: {
                        ...dates,
                        [dataPropName]: value,
                    }
                });
            
        }

    return (
        <View style={{flex: 1}}>   
    <Card >
        <Card.Title>Datos de la tarjeta</Card.Title>

        <Card.Divider />
        <Input
                placeholder='Nombre que aparece en la TDJ'
                leftIcon={
                <Icon
                    name='person'
                    size={24}
                    color='black'
                />
                }
                onChangeText={(value) => handleTextDataPropState('fullName',value)}
                value={dates.fullName}
                />
                <Input
                placeholder='CardNumeric'
                keyboardType="numeric"
                leftIcon={
                <Icon
                    name='payment'
                    size={24}
                    color='black'
                />
                }
                onChangeText={(value) => handleTextDataPropState('CardNumeric',value)}
                value={dates.CardNumeric}
                />
                <View style={{width: '35%',flexDirection: "row"}}>
                <Input
                placeholder='Mes'
                keyboardType="numeric"
                leftIcon={
                <Icon
                    name='payment'
                    size={24}
                    color='black'
                />
                }
                onChangeText={(value) => handleTextDataPropState('Mes',value)}
                value={dates.Mes}
                />
                <Input
                placeholder='Año'
                keyboardType="numeric"
                leftIcon={
                <Icon
                    name='payment'
                    size={24}
                    color='black'
                />
                }
                onChangeText={(value) => handleTextDataPropState('Ano',value)}
                value={dates.Ano}
                />
                <Input
                placeholder='CVC'
                keyboardType="numeric"
                leftIcon={
                <Icon
                    name='payment'
                    size={24}
                    color='black'
                />
                }
                onChangeText={(value) => handleTextDataPropState('CVC',value)}
                value={dates.CVC}
                />
    </View>
      </Card>
</View>
    )
}

export default CardForm