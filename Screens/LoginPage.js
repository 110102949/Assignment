import React, {useState} from 'react';

import {
  View,
  TextInput,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {profileaction} from '../Actions/Actions'


import { useDispatch, useSelector } from "react-redux";


import Profiledatajson from '../Profile.json';

const {width, height} = Dimensions.get('window');

const LoginPage = (props) => {
  const headerheight = useHeaderHeight();

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();



  let profileusername= useSelector(state => state.username);
  let profilepassword=useSelector(state=>state.password);

  console.log("bb",profilepassword+"  "+profilepassword);

  const getusername = (txt) => {
    setusername(txt);
    console.log('username', txt);
  };

  const getpassword = (txt) => {
    setpassword(txt);
    console.log('password', txt);
  };

  const onsubmit = () => {




    console.log(`username ${username} password ${password}`);


    console.log("aa",profilepassword+"  "+profilepassword);

    if(username && password)
    {

      if(username == profileusername)
      {
        if(password==profilepassword)
        {



        

          dispatch(profileaction(Profiledatajson))
          

          props.navigation.push('Dashboard')



        }
        else{
          Alert.alert("please check password")
        }

      }
      else 
      {

        Alert.alert("please check Username")


      }

    }

    else{
      Alert.alert('Login',"Please Enter required fields")
    }



  };

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      header: () => (
        <View style={[styles.header, {height: headerheight}]}></View>
      ),
    });
  }, [props.navigation]);

  console.log('app', props.intialstate);

  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}> Login </Text>
      </View>

      <TextInput
        placeholder="Username"
        placeholderTextColor="gray"
        selectionColor="gray"
        underlineColorAndroid="transparent"
        style={styles.input}
        onChangeText={getusername}></TextInput>

      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        selectionColor="gray"
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        style={[styles.input, {marginTop: 32}]}
        onChangeText={getpassword}></TextInput>

      <TouchableOpacity style={styles.submit_button} onPress={onsubmit}>
        <Text style={styles.submit_btntxt}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontWeight: '500',
    fontSize: 40,
  },
  titlecontainer: {
    height: height * 0.2,
    backgroundColor: 'white',
    paddingLeft: 32,
    justifyContent: 'center',
  },
  input: {
    width: width * 0.8,
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submit_button: {
    width: width * 0.8,
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 32,
    borderRadius: 5,
  },
  submit_btntxt: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});


export default LoginPage;
