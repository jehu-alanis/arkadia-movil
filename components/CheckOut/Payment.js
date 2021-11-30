import React,{useLayoutEffect,useState,useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DatesForm from './PaymentsForm/DatesForm';
import { connect } from 'react-redux';
import addCompra from '../../redux/actions/addCompra';
import resetAll from '../../redux/actions/resetAll';
import CardForm from './PaymentsForm/CardForm';
import Safe from './PaymentsForm/Safe';
import { useNavigation } from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';



const Payment = ({datesUser,total,navigation,resetAll,addCompra}) => {
    let Total = total.map( x => x.PrecioT);
    const getBasketTotal = Total.reduce((acc,amount)=> acc + amount ,0);       
   
    const [currentStep, setCurrentStep] = useState(0);

    const [date, setDate] = useState(null);

    const getCurrentDate=()=>{

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
  
        setDate( date + '-' + month + '-' + year);
  }



  const  isFocused = useIsFocused();

  useEffect(()=>{
    getCurrentDate();
  }, [isFocused]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {backgroundColor: '#990000'},
            headerTitleStyle: {color: '#fff'},
          headerShown: true,
        })
    }, [navigation])

    const onSubmit = () => {
        setCurrentStep(0);
        resetAll();
        addCompra({total,getBasketTotal,date});
        navigation.navigate('Home');

    };

    const onNext = () => {
        setCurrentStep(currentStep + 1);
        
    };
    return (
        <View style={{flex: 1}}>
    <ProgressSteps activeStep={currentStep}>
        <ProgressStep label="Datos del comprador" nextBtnText="Estos son mis datos"  >
            <View>
                <DatesForm />

            </View>
        </ProgressStep>
        <ProgressStep label="Datos de Pago" onNext={onNext}>
            <View>
                <CardForm />
            </View>
        </ProgressStep>
        <ProgressStep label="Review" previousBtnText="" finishBtnText="Seguir Comprando" 
        onSubmit={onSubmit} 
           previousBtnDisabled >
            <View>
                <Safe datesUser={datesUser} total={total}/>
            </View>
        </ProgressStep>
    </ProgressSteps>
</View>
    )
}

const mapStateToProps = state => ({
    datesUser: state.user.datesUser,
    total: state.product.total,
    
});

const mapDispatchToProps = {
    
    resetAll,
    addCompra,
};
export default connect(mapStateToProps, mapDispatchToProps) (Payment)
