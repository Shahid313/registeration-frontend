import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        padding:'5%'
    },

    BackArrow:{
        width:8.49,
        height:14
    },

    BackText:{
        color:'#5FA7C0',
        fontSize:16,
        marginLeft:5
    },

    Back:{
        flexDirection:'row',
        alignItems:'center',
        width:'15%'
    },

    LoginInfo:{
        marginTop:'8%',
        marginBottom:'12%'
    },

    LoginText:{
        color:'#333333',
        fontSize:28
    },

    EnterEmailText:{
        fontSize:16,
        marginTop:'3%',
        color:'gray'
    },

    EnteringData:{
        width:'100%',

    },

    EmailInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        borderRadius:6,
        color:'#929292',
        paddingLeft:10
        
    },

    PasswordInput:{
        backgroundColor:'#F2F2F7',
        width:'100%',
        height:48,
        fontSize:17,
        borderRadius:6,
        marginTop:'3%',
        color:'#929292',
        flexDirection:'row-reverse',
        justifyContent:'space-between'
    },

    imageStyle: {
        padding: 0,
        height: 24,
        width: 24,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    InputField:{
        flex:1,
        fontSize:17,
        color:'#929292',
        paddingLeft:10
    },

    ForgotPassword:{
        color:'#5FA7C0',
        fontSize:16,
    },

    ForgotPasswordButton:{
        marginTop:'3%',
        width:'100%',
        alignItems:'space-between'
    },

    LoginButton:{
        width:'100%',
        height:48,
        borderRadius:15,
        backgroundColor:'#5FA7C0',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'5%'
    },

    LoginButtonText:{
        color:'#fff',
        fontSize:20
    },

    Line:{
        flexDirection:'row', 
        width:'100%', 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:'3.5%',
        marginBottom:'3.5%'
    },

    LeftLine:{
        width:50, 
        height:1.5, 
        backgroundColor:'gray', 
        marginRight:10
    },

    RightLine:{
        width:50, 
        height:1.5, 
        backgroundColor:'gray', 
        marginLeft:10
    },

    OR:{
        fontSize:20,
    },

    SocialMediaButtons:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },

    GoogleBbutton:{
        width:'45%',
        height:48,
        justifyContent:'center',
        backgroundColor:'#E0E0E0',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },

    FacebookBbutton:{
        width:'45%',
        height:48,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#1877F2',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },

    facebookIcon:{
        width:30,
        height:27.17
    },

    googleIcon:{
        width:23,
        height:21
    },

    GoogleButtonText:{
        color:'#363636',
        fontSize:17,
        marginLeft:8
    },

    FacebookButtonText:{
        color:'#FFFFFF',
        fontSize:17
    },

    EyeButton:{
        margin:12,
        marginRight:20,
    },

    SignUpLink:{
        marginLeft:5
    },

    DontHaveAccount:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'15%',
        marginBottom:'10%'
    },

    DontHaveAccountSignUpLink:{
        color:'#5FA7C0',
        fontSize:17
    },

    DontHaveAccountText:{
        fontSize:17
    },
})

export default styles;