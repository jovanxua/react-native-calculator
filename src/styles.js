/**************************************************************
 *  FileName:           styles.js
 *  Description:        Simple Calculator Styles
 *  Copyright:          jovanxua©2017
 *  Original Author:    Jovanni Auxilio
 *  Date Created:       2017-12-19

 *  Modification History:
        Date              By            Description

**************************************************************/
const React = require('react-native');
const { StyleSheet } = React;

export default {

  container: {
    flex:1,
    flexDirection: 'column'
  },

  contHistory:{
    flex: 0.3,
    backgroundColor: 'red'
  },

  contOutput:{
    flex: 0.2,
    backgroundColor: 'orange'
  },

  contButtons:{
    flex: 0.5,
    backgroundColor: '#bdc3c7'
  },

  placeHolderOutput: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingLeft: 10
  },

  txtDefault: {
    color: '#fff',
    fontFamily: 'Helvetica-Light',
    fontSize: 30
  }

};