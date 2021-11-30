import React,{useEffect,useState} from 'react'
import { SafeAreaView, ScrollView,View,RefreshControl,StyleSheet} from 'react-native';
import Product from './Product';
//import {GetTask, DeleteTask} from '../api';
import {useIsFocused} from '@react-navigation/native';
import { connect } from 'react-redux';
import addProduct from '../redux/actions/addProduct';
import showProduct from '../redux/actions/showProduct';

const ProductList = ({item, addProduct,showProduct}) => {
    const [task,setTask] = useState([]);
    const [refresing, setRefresing] =useState (false);  
 
    const  isFocused = useIsFocused();

    const loadTasks = () =>{
 
      showProduct();
      }

    useEffect(()=>{
        loadTasks();
    }, [isFocused]);

    // const handleDelete = async (id) => {
    //  await  DeleteTask(id);
    //  await  loadTasks();
    //  <TaskItem task={item} handleDelete={handleDelete/> }

    // const renderItem  = (task) =>{
    //     console.log(task,"renderitem");
    //     return <TaskItem task={task} />;
    // }

    const onRefresh = React.useCallback(async ()  => {
        setRefresing(true);
       // await loadTasks();
        setRefresing(false);
    })

    return (
      <SafeAreaView >
        
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresing}
            colors={['white']}
              onRefresh = {onRefresh }
              progressBackgroundColor='#0a3d62'
            />
        }
      >
    <View style={[styles.container, {
            flexDirection: "row",
            flexWrap: "wrap"
          }]}
          >
            {
            item.map((product,i) =>(
            <Product key={product.id} product={product} />
             ))
            
           }  

           
          </View>  
          </ScrollView>
    </SafeAreaView>

            
       
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
        },
  });

const mapStateToProps = state => ({
    item: state.product.product,
});

const mapDispatchToProps = {
    addProduct,
    showProduct
};
export default  connect(mapStateToProps, mapDispatchToProps) (ProductList)
