/**
 * 章节: Redux 简单实用
 * 创建Redux reducer
 * 这是一个reducer，形式为（state，action）=> state的纯函数。
 * 描述了aciton 如何把state转变成下一个state
 * state 的形式取决于你，可以是基本类型、数组、对象
 * 当state变化是需要返回全新的对象，而不是修改传入的参数。
 * 下面例子实用swith语句和字符串来做判断，但你可以写帮助类（helper）
 * 根据不同的约定（如方法映射）来判断，只要使用你的项目即可
 */

import React, {Component} from 'react';
import {createStore} from 'redux';
import {StyleSheet, Button, View,Text,ToastAndroid} from 'react-native';

function counter(state = 0,action) {
    switch (action.type){
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

type Props = {};
export default class ReduxDemo extends Component<Props> {
    state = counter(undefined, {});

    onPressLearnMore=()=>{
        let i=0;
        i++;
        console.log("Button按钮点击按钮"+i);
        ToastAndroid.show('点我了:'+i,ToastAndroid.SHORT);
    }

    dispatch(action) {
        this.setState(prevState => counter(prevState, action));
    }

    increment = () => {
        this.dispatch({ type: 'INCREMENT' });
    };

    decrement = () => {
        this.dispatch({ type: 'DECREMENT' });
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.increment}>+</Text>
                <Text style={styles.welcome} onPress={this.decrement}>-</Text>
                <Button
                    onPress={this.onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
