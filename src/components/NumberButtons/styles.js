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
  },

  txtDefault: {
    color: '#000',
    fontFamily: 'Helvetica-Light',
    fontSize: 20
  },

  contRow: {
    flex: 1,
    flexDirection: 'row'
  },

  contButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ecf0f1'
  }

};