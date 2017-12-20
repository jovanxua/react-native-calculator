/**************************************************************
 *  FileName:           App.js
 *  Description:        Simple Calculator Container
 *  Copyright:          jovanxua©2017
 *  Original Author:    Jovanni Auxilio
 *  Date Created:       2017-12-19

 *  Modification History:
        Date              By            Description

**************************************************************/

//Packages
import React, { Component } from 'react';
import {View,Text,ToastAndroid} from 'react-native';

//Styles
import styles from './styles';

//Custom Components
import NumberButtons from '../src/components/NumberButtons';

//constants
/* const buttons = [
  ['C', '√', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['C', '0', '±','=']
] */

const buttons = [
  ['7', '8', '9', '÷'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '+'],
  ['C', '0', '=','-']
]

const initialOutput = '0';
const maxDigits = 15;
const maxLength = 100;
let test=0;
export default class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          _output: initialOutput,
          _mathExpression: '',
          _history: [],
      }
      this._handleEvent = this._handleEvent.bind(this);
  }

  _handleEvent = (value) => {
    if(!isNaN(value)){
      this._concatToOutput(value);
    }
    else{
      switch(value) {
        
        case buttons[3][0]:
          this._initOutput();
          break;

        case buttons[3][2]:
          this._evaluate();
          break;

        default:
          let strLastChar = this.state._output.slice(-1);
          if(isNaN(strLastChar)){
            this._replaceLastIndex(value)
          }
          else{
            this._concatToOutput(value);
          }
          break;
      }
    }
  }
  
  _concatToOutput = (value) => {
    if(this.state._output !== initialOutput){
      this.setState({_output: this.state._output + '' + value + ''})
    }
    else{
      this.setState({_output: value + ''})
    }
  }

  _replaceLastIndex = (value) => {
    var str1 = this.state._output.replace(/.$/,value)
    this.setState({
      _output: str1
    })
  }

  _evaluate = () => {
    try{
      let strCurOutput = this.state._output;
      let dEval = eval(this._convertToMathExpression(this.state._output));

      let aHistory = [...this.state._history];
      aHistory.push([strCurOutput, dEval])

      this.setState({
        _output: ''+dEval,
        _history: aHistory
      },
        () => console.log('_history: ' + JSON.stringify(this.state._history))
      )
    }
    catch(exception){
      console.log('exception: ' + exception);
      this._showToast('Invalid format used.');
    }
  }

  _convertToMathExpression = (value) => {
     let strTemp = value.replace(new RegExp(this._escapeRegExp(buttons[0][3]), 'g'), '/');
     strTemp = strTemp.replace(new RegExp(this._escapeRegExp(buttons[1][3]), 'g'), '*');
    return strTemp;
  }

  _escapeRegExp = (str) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  _initOutput = () => {
    this.setState({
      _output: initialOutput
    })
  }

  _showToast = (value) => {
    ToastAndroid.show(value, ToastAndroid.SHORT);
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contHistory}>
        </View>
        <View style={styles.contOutput}>
          <View style={styles.placeHolderOutput}>
            <Text style={styles.txtDefault}>{this.state._output}</Text>
          </View>
        </View>
        <View style={styles.contButtons}>
          <NumberButtons onBtnPress={this._handleEvent} buttons={buttons}/>
        </View>
      </View>
    );
  }
}