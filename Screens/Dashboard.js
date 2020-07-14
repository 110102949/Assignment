import React from 'react';
import {connect} from 'react-redux'
import {View,FlatList,Text,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';

import { useDispatch, useSelector } from "react-redux";
import {useHeaderHeight} from '@react-navigation/stack';

import { getStatusBarHeight } from 'react-native-status-bar-height';


const {width,height}=Dimensions.get('window');


const Dashboard=props=>
{


    const headerheight = useHeaderHeight();




    const detailsdata=useSelector(state=>state.profiledata)




    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          header: () => (
            <View style={[styles.header, {height: headerheight},{flexDirection:'row'},{alignItems:'center'}]}>


                <TouchableOpacity style={{marginTop:getStatusBarHeight()/2,marginLeft:16}} onPress={()=>{props.navigation.goBack()}}>

                <Image source={require('../assests/arrow.png')} style={{width:25,height:25}}>

</Image>

                </TouchableOpacity>
           

            <Text style={{marginTop:getStatusBarHeight()/2,marginLeft:16,fontWeight:'bold',fontSize:20}} >Users</Text>


            </View>
          ),

        });
      }, [props.navigation]);



    const renderchilditem=({item})=>
    {
        return(

            <View style={{width:width*0.95,backgroundColor:'white',borderRadius:5,alignSelf:'center',marginBottom:4,marginTop:4,marginLeft:4,marginRight:4,padding:16}}>


            <Text style={{marginTop:4,marginBottom:4}}>{`Name : ${item.name}`}</Text>

            <Text style={{marginTop:4,marginBottom:4}}>{`Age : ${item.age}`}</Text>

            <Text style={{marginTop:4,marginBottom:4}}>{`Gender : ${item.gender}`}</Text>

            <Text style={{marginTop:4,marginBottom:4}}>{`Email : ${item.email}`}</Text>

            <Text style={{marginTop:4,marginBottom:4}}>{`Mobile Number : ${item.phoneNo}`}</Text>



            </View>



        );
    }



    return(
        <View style={styles.container}>


        <FlatList data={detailsdata} renderItem={renderchilditem} keyExtractor={(item,index)=>item.id.toString()} style={styles.list} >



        </FlatList>

        </View>
    )

}


const mapStateToProps=state=>{

return {

    data:state.profiledata,
}

}

const styles=StyleSheet.create(
    {

        container:{

            flex:1,
        },

        list:
        {

            marginTop:8
        }
        



    }
)

export default connect(mapStateToProps)(Dashboard);


