import React from "react";
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback,ScrollView, TextInput} from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

class SignIn extends React.Component{

    state = {
        showPass:true,
        email:'',
        password:''
    }

    GoToSignUp(){
        this.props.navigation.navigate('SignUp')
    }

    signin(){
        let data = new FormData();
        data.append('email', this.state.email)
        data.append('password', this.state.password)

        axios.post(baseUrl+'/apis/user/signin', data).then(
            res => {
                if(res.data.msg == 'logged in Succesfully'){

                    AsyncStorage.setItem(
                        'loggedIn',
                        JSON.stringify(res.data.user)
                      );

                      navigation.reset({
                        index:0,
                        routes:[{name:'Home'}],
                       
                    });
                }else{
                    alert("The password or email is incorrect")
                }
            }
        )
    }
    
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView>
            <SafeAreaView style={styles.container}>
                
                <View style={styles.LoginInfo}>
                    <Text style={styles.LoginText}>Login</Text>
                    <Text style={styles.EnterEmailText}>Enter your email address and password to access your account</Text>
                </View>
                <View style={styles.EnteringData}>
                    <TextInput style={styles.EmailInput} onChangeText={(e) => this.setState({email:e})} placeholderTextColor="#929292" placeholder="Email"/>
                    
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput placeholderTextColor="#929292" onChangeText={(e) => this.setState({password:e})} secureTextEntry={this.state.showPass} placeholder="Password" style={styles.InputField}/>

            </View>
            <View style={styles.ForgotPasswordButton}>
            <TouchableOpacity onPress={() => this.ForgotPassword()}>
            <Text style={styles.ForgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.signin()} style={styles.LoginButton}>
                    <Text style={styles.LoginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.DontHaveAccount}>
                <Text style={styles.DontHaveAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => this.GoToSignUp()} style={styles.SignUpLink}>
                    <Text style={styles.DontHaveAccountSignUpLink}>Sign Up</Text>
                </TouchableOpacity>
            </View>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default SignIn;