/**************************************************************
 *  FileName:           App.js
 *  Description:        Simple Calculator Container
 *  Copyright:          jovanxua©2017
 *  Original Author:    Jovanni Auxilio
 *  Date Created:       2017-12-19

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

    _handleOnPress = (value) => {
        requestAnimationFrame(() => {
            this.props.onBtnPress(value);
        });
    }

    render() {
        const rowCount = this.props.buttons.length;
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
