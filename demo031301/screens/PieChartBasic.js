/**
 * 章节: 06-09
 * 演示 WebView 组件的使用
 * FilePath: /06-09/WebViewComponent/App.js
 * @Parry
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,WebView} from 'react-native';
import { Pie } from 'react-native-pathjs-charts';
import 'core-js/es6/map'
import 'core-js/es6/symbol'
import 'core-js/fn/symbol/iterator'
import MyModule from "./MyAndroidModule";

type Props = {};
export default class WebViewDemo extends Component<Props> {


    //调用 Android 的原生组件方法
    componentDidMount() {
        if (Platform.OS != "ios") {
            MyModule.keepScreenAwake();
            console.log("演示调用 Android 的原生组件方法,一直点亮android手机的屏幕....");
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: `饼图的基本使用`,
    });
    render() {
        let data = [{
            "name": "React 用户",
            "users": 75433
        }, {
            "name": "React Native 用户",
            "users": 75653
        }, {
            "name": "Angular JS 用户",
            "users": 53456,
            "color": {'r':223,'g':154,'b':20}
        }, {
            "name": "Ionic 用户",
            "users": 38764
        }]

        let options = {
            margin: {
                top: 20,
                left: 20,
                right: 20,
                bottom: 20
            },
            width: 350,
            height: 350,
            color: '#2980B9',
            r: 50,
            R: 150,
            legendPosition: 'topLeft',
            animate: {
                type: 'oneByOne',
                duration: 200,
                fillTransition: 3
            },
            label: {
                fontFamily: 'Arial',
                fontSize: 14,
                fontWeight: true,
                color: '#ECF0F1'
            }
        }

        return (
            <View style={styles.container}>
                <Pie data={data}
                     options={options}
                     accessorKey="users"
                     margin={{top: 10, left: 10, right: 10, bottom: 10}}
                     color="#2980B9"
                     pallete={
                         [
                             {'r':25,'g':99,'b':201},
                             {'r':24,'g':175,'b':35},
                             {'r':190,'g':31,'b':69},
                             {'r':100,'g':36,'b':199},
                             {'r':214,'g':207,'b':32},
                             {'r':198,'g':84,'b':45}
                         ]
                     }
                     r={20}
                     R={150}
                     legendPosition="topLeft"
                     label={{
                         fontFamily: 'Arial',
                         fontSize: 14,
                         fontWeight: true,
                         color: '#ECF0F1'
                     }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
    },
});
