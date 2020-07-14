import React from 'react';

//
//
const intialstate={
    username:"hruday@gmail.com",
    password:"hruday123",
    profiledata:[],
    
}


export const Profilereducer=(state=intialstate,action)=>
{

    switch(action.type)
    {

       case "Addprofiles":
           {


            state.profiledata=[],
            state.profiledata=action.payload.user


            return {...state,profiledata:state.profiledata}

           }

        default:
                return state;

    }

}

