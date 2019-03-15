/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class ShowFont extends Component{
    render(){
        return(
            <View>
                <Text style={styles.welcome}>Welcome to React Native!..............</Text>
            </View>
        )
    }
}

class isNotShowFont extends Component{
    render(){
        return(
            <View>
                <Text style={styles.welcome}></Text>
            </View>
        )
    }
}


type Props = {};
export default class Parent2Child extends Component<Props> {
    var showOrNotFont  'true';

    render() {
        return (
            <View style={styles.container}>
                <ChangeState/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});