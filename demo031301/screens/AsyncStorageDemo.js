/**
 * 章节: 07-04
 * 演示 AsyncStorage 功能的使用
 * FilePath: /07-04/AsyncStorageDemo/signup/index.js
 * @Parry
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';

//导入一些使用到的图片资源，从本地加载。
const background = require("../src/img/signup_bg.png");
const backIcon = require("../src/img/back.png");
const personIcon = require("../src/img/signup_person.png");
const lockIcon = require("../src/img/signup_lock.png");
const emailIcon = require("../src/img/signup_email.png");
const birthdayIcon = require("../src/img/signup_birthday.png");

var STORAGE_KEY_EMAIL = '@AsyncStorageKey:registerEmail';
var STORAGE_KEY_USERNAME = '@AsyncStorageKey:registerUsername';

type Props = {};
export default class AsyncStorageDemo extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: ''
        };
    }

    componentDidMount() {//组件加载完毕
        this
            ._loadInitialState()
            .done();
    }

    _loadInitialState = async () => {
        try {
            var valueEmail = await AsyncStorage.getItem(STORAGE_KEY_EMAIL);
            var valueUsername = await AsyncStorage.getItem(STORAGE_KEY_USERNAME);
            this.setState({email: valueEmail});//为什么不能这么写？this.setState({email: valueEmail}，{userName:valueUsername});
            this.setState({userName:valueUsername});
        } catch (error) {
            console.error('AsyncStorage error:' + error.message);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={background}
                                 style={[styles.container, styles.bg]}//加载多个样式的写法
                    //图片缩放的方式
                                 resizeMode="cover">
                    <View style={styles.headerContainer}>
                        <View style={styles.headerIconView}>
                            <TouchableOpacity style={styles.headerBackButtonView}>
                                <Image source={backIcon} style={styles.backButtonIcon} resizeMode="contain"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.headerTitleView}>
                            <Text style={styles.titleViewText}>注册</Text>
                        </View>
                    </View>
                    <View style={styles.inputsContainer}>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={personIcon} style={styles.inputIcon} resizeMode="contain"/>
                            </View>
                            <TextInput
                                style={[styles.input, styles.whiteFont]}
                                placeholder="用户名" //占位提示文字
                                placeholderTextColor="#FFF" //占位提示文字的颜色
                                underlineColorAndroid='transparent'
                                value={this.state.userName}
                                onChangeText=
                                    {(userName) => this.setState({userName})}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={emailIcon} style={styles.inputIcon} resizeMode="contain"/>
                            </View>
                            <TextInput
                                style={[styles.input, styles.whiteFont]}
                                placeholder="邮箱"
                                placeholderTextColor="#FFF"
                                value={this.state.email}
                                onChangeText=
                                    {(email) => this.setState({email})}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={lockIcon} style={styles.inputIcon} resizeMode="contain"/>
                            </View>
                            <TextInput
                                secureTextEntry={true}
                                style={[styles.input, styles.whiteFont]}
                                placeholder="密码"
                                placeholderTextColor="#FFF"
                                value={this.state.password}
                                onChangeText=
                                    {(password) => this.setState({password})}/>
                        </View>
                    </View>

                    <View style={styles.footerContainer}>

                        <TouchableHighlight
                            onPress={this.register.bind(this)}>
                            <View style={styles.signup}>
                                <Text style={styles.whiteFont}>注 册</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableOpacity>
                            <View style={styles.signin}>
                                <Text style={styles.greyFont}>已有账号？<Text style={styles.whiteFont}>
                                    登录</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
        );
    }

    register() {
        if (this.state.userName == '' || this.state.email == '' || this.state.password == '') {
            Alert.alert('提醒', '请检查您填写的信息完整性', [
                {
                    text: '确定',
                    onPress: () => console.log('用户点击确定按钮之后的回调函数。')
                }
            ])
        }else{
            this._onValueChange(this.state.email,this.state.userName);
        }
    }

    _onValueChange = async(email,userName) => {
        this.setState({email});
        this.setState({userName});
        try {
            await AsyncStorage.setItem(STORAGE_KEY_EMAIL, email);
            await AsyncStorage.setItem(STORAGE_KEY_USERNAME, userName);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    };

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null
    },
    headerContainer: {
        flex: 1
    },
    inputsContainer: {
        flex: 3,
        marginTop: 50
    },
    footerContainer: {
        flex: 1
    },
    headerIconView: {
        marginLeft: 10,
        backgroundColor: 'transparent'
    },
    headerBackButtonView: {
        width: 25,
        height: 25
    },
    backButtonIcon: {
        width: 25,
        height: 25
    },
    headerTitleView: {
        backgroundColor: 'transparent',
        marginTop: 25,
        marginLeft: 25
    },
    titleViewText: {
        fontSize: 40,
        color: '#fff'
    },
    inputs: {
        paddingVertical: 20
    },
    inputContainer: {
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        flexDirection: 'row',
        height: 75
    },
    iconContainer: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputIcon: {
        width: 30,
        height: 30
    },
    input: {
        flex: 1,
        fontSize: 20
    },
    signup: {
        backgroundColor: '#FF3366',
        paddingVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    signin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF'
    }
});
