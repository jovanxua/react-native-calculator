/**************************************************************
 *  FileName:           index.js
 *  Description:        Custom Calculator Number Keyboard
 *  Copyright:          jovanxua©2018
 *  Original Author:    Jovanni Auxilio
 *  Date Created:       2018-01-02

 *  Modification History:
        Date              By            Description

**************************************************************/

//React Modules
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableNativeFeedback
} from 'react-native';

//Styles
import styles from './styles';

export default class NumberButtons extends Component {
    
    //This is for optimization
    //Component should render only once
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    //This will call the bound function from its parent component 
    //to handle button press action/event 
    _handleOnPress = (value) => {
        requestAnimationFrame(() => {
            this.props.onBtnPress(value);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.buttons.map((row, index) => (
                        <View key={index} style={styles.contRow}>
                            { 
                                row.map((col,index) => (
                                    <TouchableNativeFeedback
                                        key={index}
                                        onPress={() => this._handleOnPress(col)}
                                        background={TouchableNativeFeedback.SelectableBackground()}>
                                        <View style={styles.contButton}>
                                            <Text style={styles.txtDefault}>{col}</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                ))
                            }
                        </View>
                    ))
                }
            </View>
        );
    }
}
