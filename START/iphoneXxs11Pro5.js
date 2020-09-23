import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class IphoneXxs11Pro5 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="099a9324-fe99-48db-a10c-ba393962c84b" style={styles.iphoneXxs11Pro5}>
        <ScrollView data-layer="47496cc0-1e67-43f8-97da-ee0dc29f4f81" style={styles.iphoneXxs11Pro5_grilleDeRepetition3}>
            <View data-layer="3daab3de-b320-4b6a-8afb-f9c2d039fd29" style={styles.iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b}>
                <ReactImage data-layer="d8da4d8f-e486-482d-854b-72378df677b3" source={require('./assets/logo40c3fb2c.png')} style={styles.iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c} />
                <ReactImage data-layer="814ee520-321b-406f-8361-a32b23eab57f" source={require('./assets/logo.png')} style={styles.iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo} />
            </View>
        </ScrollView>
    </ScrollView>
    );
  }
}

IphoneXxs11Pro5.propTypes = {

}

IphoneXxs11Pro5.defaultProps = {

}


const styles = StyleSheet.create({
  "iphoneXxs11Pro5": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "iphoneXxs11Pro5_grilleDeRepetition3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 282.38,
    "height": 89.62,
    "left": 42.3,
    "top": 359.37
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 282.38,
    "height": 89.62,
    "left": 0,
    "top": 0
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 282.38,
    "height": 89.62,
    "left": 0,
    "top": 0
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c_trace8065abe40": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 56.47,
    "height": 72.03,
    "left": 0,
    "top": 16.84
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c_trace97ed5b899": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 56.48,
    "height": 72.03,
    "left": 210.67,
    "top": 16.84
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c_trace106a782fee": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 5.84,
    "height": 72.03,
    "left": 276.54,
    "top": 16.84
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c_rectangle332ceb5d16": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(240, 139, 167, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 56.87,
    "height": 5.6,
    "left": 104.37,
    "top": 0
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c_groupe46663830a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.84,
    "height": 73.53,
    "left": 56.87,
    "top": 16.09
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c_groupe46663830a_trace11c3bc718c": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.68,
    "height": 33.24,
    "left": 0.1,
    "top": 0
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c_groupe46663830a_trace124de616be": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.84,
    "height": 35.1,
    "left": 0,
    "top": 38.44
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c_groupe542f77904": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.84,
    "height": 73.53,
    "left": 137.26,
    "top": 16.09
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c_groupe542f77904_trace139661554e": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.68,
    "height": 33.24,
    "left": 0.1,
    "top": 0
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo40c3fb2c_groupe542f77904_trace14cce77ea9": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.84,
    "height": 35.1,
    "left": 0,
    "top": 38.44
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 282.38,
    "height": 89.62,
    "left": 0,
    "top": 0
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo_trace8": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 56.47,
    "height": 72.03,
    "left": 0,
    "top": 16.84
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo_trace9": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 56.48,
    "height": 72.03,
    "left": 210.67,
    "top": 16.84
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo_trace10": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 5.84,
    "height": 72.03,
    "left": 276.54,
    "top": 16.84
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo_rectangle33": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(254, 180, 169, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 56.87,
    "height": 5.6,
    "left": 104.37,
    "top": 0
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo_groupe4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.84,
    "height": 73.53,
    "left": 56.87,
    "top": 16.09
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo_groupe4_trace11": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.68,
    "height": 33.24,
    "left": 0.1,
    "top": 0
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo_groupe4_trace12": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.84,
    "height": 35.1,
    "left": 0,
    "top": 38.44
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo_groupe5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.84,
    "height": 73.53,
    "left": 137.26,
    "top": 16.09
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo_groupe5_trace13": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.68,
    "height": 33.24,
    "left": 0.1,
    "top": 0
  },
  "iphoneXxs11Pro5_grilleDeRepetition3_grilleDeRepetition3Da4e6236a63b_logo_groupe5_trace14": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 71.84,
    "height": 35.1,
    "left": 0,
    "top": 38.44
  }
});