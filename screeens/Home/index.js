import React from "react";
import {SafeAreaView, Text,TouchableOpacity} from 'react-native'

export default class Home extends React.Component{
    render(){
        return(
            <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>Home</Text>
                <TouchableOpacity style={{width:60, height:30,backgroundColor:'blue'}}>
                    <Text style={{color:'white'}}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}