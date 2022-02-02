import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard,ScrollView, TouchableWithoutFeedback, TextInput} from 'react-native'
import styles from './styles'
import axios from 'axios';
import baseUrl from "../../baseUrl";
import AsyncStorage from '@react-native-async-storage/async-storage';

const _retrieveData = async (navigation) => {

    const value = await AsyncStorage.getItem('loggedIn');
    const parse = JSON.parse(value)
    if (parse != null) {
      navigation.reset({
          index:0,
          routes:[{name:'Home'}],
         
      });
    }else{
        return false
    }
  
};

class SignUp extends React.Component{

    state = {
        showPass:true,
        showConfirmPass:true,
        name:'',
        email:'',
        password:'',
        confirmPassword:''

    }

    componentDidMount(){
        _retrieveData(this.props.navigation);
    }

    GoToLogin(){
        this.props.navigation.navigate('SignIn')
    }

    registerUser(){
        if(this.state.password != this.state.confirmPassword){
            alert("Passwords does not match")
        }else if(this.state.password == '' || this.state.confirmPassword == '' || this.state.name == '' || this.state.email == ''){
            alert('Please fill all the fields');
        }else{
        let formData = new FormData()
        formData.append("email",this.state.email)
        formData.append("fullName",this.state.name)
        formData.append("password",this.state.password)
            axios.post(baseUrl+'/apis/user/signup',formData).then(res => {
                if(res.data.msg == "User Registered Successfully"){
                    this.props.navigation.navigate('SignIn');
                }
            })
        }
    }
    
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.SignUpInfo}>
                    <Text style={styles.SignUpText}>Sign up</Text>
                    <Text style={styles.EnterInfoText}>Please fill information to create an account and sign up to continue</Text>
                </View>
                <View style={styles.EnteringData}>
                    <TextInput style={styles.NameInput} onChangeText={(e) => this.setState({name:e})} placeholderTextColor="#929292" placeholder="Name"/>
                    <TextInput style={styles.EmailInput} onChangeText={(e) => this.setState({email:e})} placeholderTextColor="#929292" placeholder="Email"/>
                    
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass: !(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput placeholderTextColor="#929292" onChangeText={(e) => this.setState({password:e})} secureTextEntry={this.state.showPass} placeholder="Password" style={styles.InputField}/>

               </View>
               <View style={styles.ConfirmPasswordInput}>
                {this.state.showConfirmPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showConfirmPass:!(this.state.showConfirmPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showConfirmPass:!(this.state.showConfirmPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput placeholderTextColor="#929292" onChangeText={(e) => this.setState({confirmPassword:e})} secureTextEntry={this.state.showConfirmPass} placeholder="Confirm Password" style={styles.InputField}/>

               </View>
            <TouchableOpacity onPress={() => this.registerUser()} style={styles.SignUpButton}>
                    <Text style={styles.SignUpButtonText}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.AlreadyHaveAccount}>
                <Text style={styles.AlreadyHaveAccountText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => this.GoToLogin()} style={styles.SignInLink}>
                    <Text style={styles.AlreadyHaveAccountSignInLink}>Login</Text>
                </TouchableOpacity>
            </View>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default SignUp;