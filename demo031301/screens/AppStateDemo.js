/**
 * 章节: 07-03
 * 演示 AppStateDemo 功能的使用
 * FilePath: /07-03/AppStateDemo/App.js
 * @Parry
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,AppState} from 'react-native';

type Props = {};
export default class AppStateDemo extends Component<Props> {

    state={
        url:AppState.currentState,
        previousAppStates: []
    };

    componentDidMount() {//组件加载完毕
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {//组件即将卸载（卸载前）
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (appState) => {//App状态变更的监控事件
        var previousAppStates = this
            .state
            .previousAppStates
            .slice();
        previousAppStates.push(this.state.appState);
        this.setState({appState, previousAppStates});
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(this.state.previousAppStates)}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
