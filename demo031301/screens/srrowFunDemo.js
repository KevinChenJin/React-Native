import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';

export default class srrowFunDemo extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            data0: '点击0',
            data1: '点击1',
            data2: '点击2',
            data3: '点击3',
            data4: '点击4',
            data5: '点击5',
            date6:100,
        }
    };
    //箭头函数（无参）
    press0 = () => {
        this.setState({
            data0: "0被点击了"
        });
        ToastAndroid.show('0被点击了',ToastAndroid.SHORT);
    };

    //一般方法（无参）
    press1() {
        this.setState({
            data1: "1被点击了"
        });
        ToastAndroid.show('1被点击了',ToastAndroid.SHORT);
    };

    //一般方法（无参）
    press2() {
        this.setState({
            data2: "2被点击了"
        });
        ToastAndroid.show('2被点击了',ToastAndroid.SHORT);
    };

    //一般方法（有参）
    press3(x,y) {
        this.setState({
            data3: x+y
        });
        ToastAndroid.show('3被点击了: '+this.state.data3,ToastAndroid.SHORT);
    };

    //一般方法（有参）
    press4(x) {
        this.setState({
            data4: x
        });
        ToastAndroid.show('4被点击了',ToastAndroid.SHORT);
    };

    //箭头函数（有参）
    press5 = (x) => {
        this.setState({
            data5: x
        });
        ToastAndroid.show('5被点击了',ToastAndroid.SHORT);
    };

    //箭头函数（有参）
    press6 = (x) => {
        this.setState({
            data6: x
        });
        ToastAndroid.show('6被点击了',ToastAndroid.SHORT);
    };


    render() {
        return (
            <View>
                {/*正确的方式应该不在render的时候立即执行。因此正确调用方法如下，同时，箭头函数将一个函数赋值给press0变量，变量在调用的时候自然不需要加（）*/}
                <Text
                    style={styles.text}
                    // onPress={this.press0} //如果该方法本身就是箭头函数，那么直接调用this.press0
                    // onPress={()=>this.press0()}//无论该方法是箭头函数还是普通函数，都可以利用该方法来执行()=>this.press0()
                    onPress={this.press0.bind(this)}//无论该方法是箭头函数还是普通函数，都可以利用该方法来执行()=>this.press0()
                >{this.state.data0}</Text>
                {/*普通函数的无参与有参的调用方式相同。注意的是有参的函数使用bind方式传递参数时this必须在最前面。*/}
                <Text
                    style={styles.text}
                    onPress={() => this.press1()}
                >{this.state.data1}</Text>

                <Text
                    style={styles.text}
                    onPress={this.press2.bind(this)}
                >{this.state.data2}</Text>

                <Text
                    style={styles.text}
                    onPress={this.press3.bind(this, 2222,1111)}
                >{this.state.data3}</Text>


                <Text
                    style={styles.text}
                    onPress={()=>this.press4(2222)}
                >{this.state.data4}</Text>

                {/*下面的调用方法错误，原因：下面的调用方式导致onpress事件直接被调用press5方法修改了state，
        由于state被修改，页面被重新渲染，再次直接调用press5形成循环
        */}

        {/*正确函数调用方式
            1、箭头方法 onPress={() => this.press1()} （无参、箭头函数或普通函数，都可以用此方式调用）
            2、箭头方法 onPress={() => this.press1(xx)} （有参、箭头函数或普通函数，都可以用此方式调用）
            3、bind方式 onPress={this.press2.bind(this)}  （无参、箭头函数或普通函数，都可以用此方式调用）
            4、bind方式 onPress={this.press2.bind(this,x)}（有参、箭头函数或普通函数，都可以用此方式调用）
        */}
                <Text
                    style={styles.text}
                    //错误
                    //onPress={this.press5(2222)}
                    //正确
                    onPress={this.press5.bind(this,2222)}
                    //正确
                    //onPress={()=>this.press5(2222)}
                >{this.state.data5}</Text>

                <Text
                    style={styles.text}
                    //错误
                    //onPress={this.press6(2222)}
                    //正确
                    onPress={this.press6.bind(this,2222)}
                    //正确
                    //onPress={()=>this.press6(2222)}
                >{this.state.data6}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'red',
        width: 200,
        height: 30,
        marginBottom: 50,
        justifyContent:'center',
        alignItems: 'center',
    },
});
