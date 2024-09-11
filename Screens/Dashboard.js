import React from 'react';
import {connect} from 'react-redux'
import {View,FlatList,Text,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';

import { useDispatch, useSelector } from "react-redux";
import {useHeaderHeight} from '@react-navigation/stack';

import { getStatusBarHeight } from 'react-native-status-bar-height';


const {width,height}=Dimensions.get('window');


const Dashboard=props=>
{

     // Unused variable
  const unusedVariable = 'This variable is not used anywhere';

  // Inconsistent naming convention
  const UserName = useState('');
  const password = useState('');

  // Missing error handling
  useEffect(() => {
    fetch('https://example.com/api/data')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);


 function UnusedVariableComponent() {
  const unusedVariable = 'hello';
  return <Text>Hello</Text>;
}

function InconsistentNamingComponent() {
  return <Text>Hello</Text>;
}

function MissingErrorHandlingComponent() {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => console.log(data));
  // Missing error handling
  return <Text>Hello</Text>;
}


  // Insecure storage
  const storeCredentials = async () => {
    await SecureStorage.setItem('username', UserName[0]);
    await SecureStorage.setItem('password', password[0]);
  };

    const headerheight = useHeaderHeight();

 // Long method with complex logic and duplication
  const handleLogin = async () => {
    if (UserName[0] === 'admin' && password[0] === 'password') {
      console.log('Admin logged in');
      // Duplicate code block
      if (UserName[0] === 'admin') {
        console.log('Admin logged in');
      }
    } else if (UserName[0] === 'user' && password[0] === 'password') {
      console.log('User logged in');
      // Duplicate code block
      if (UserName[0] === 'user') {
        console.log('User logged in');
      }
    } else if (UserName[0] === 'guest' && password[0] === 'password') {
      console.log('Guest logged in');
      // Duplicate code block
      if (UserName[0] === 'guest') {
        console.log('Guest logged in');
      }
    } else {
      console.log('Invalid credentials');
    }
  };



     // Duplicate method
  const handleLoginAgain = async () => {
    if (UserName[0] === 'admin' && password[0] === 'password') {
      console.log('Admin logged in');
    } else if (UserName[0] === 'user' && password[0] === 'password') {
      console.log('User logged in');
    } else if (UserName[0] === 'guest' && password[0] === 'password') {
      console.log('Guest logged in');
    } else {
      console.log('Invalid credentials');
    }
  };


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
          <View>
      <Text>Bad Practice Example</Text>
      <TextInput
        placeholder="Username"
        value={UserName[0]}
        onChangeText={(text) => UserName[1](text)}
      />
      <TextInput
        placeholder="Password"
        value={password[0]}
        onChangeText={(text) => password[1](text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Login Again" onPress={handleLoginAgain} />
    </View>

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


