import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class IphoneXxs11Pro6 extends Component {

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
    <ScrollView data-layer="a90dd89a-a320-4b87-af51-dc75a731f053" style={styles.iphoneXxs11Pro6}>
        <ScrollView data-layer="e889fd64-29a4-4355-bca5-d8b56654b18e" style={styles.iphoneXxs11Pro6_grilleDeRepetition3}>
            <View data-layer="f4b57817-4e26-44fc-81b7-c6d11c94256e" style={styles.iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555}>
                <ReactImage data-layer="88145e77-4595-45b1-952b-dec68cc7359f" source={require('./assets/loading8caa8c79.png')} style={styles.iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555_loading8caa8c79} />
                <Text data-layer="4a74fd30-76dd-48bf-9668-03f303650af7" style={styles.iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555_loading}>Loading </Text>
                <Text data-layer="b175789b-099c-48e6-9163-05c4abed566d" style={styles.iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555_x80}>80%</Text>
                <Svg data-layer="4adef03a-4edc-488b-a10d-8fc1d617c074" style={styles.iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555_soustraction6} preserveAspectRatio="none" viewBox="117.24994659423828 101.24967956542969 382.5002746582031 545.4061279296875" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-soustraction6" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/soustraction6.png')} x="0" y="0" width="375.00px" height="534.91px" /></Pattern></Defs><SvgPath d="M 340.8363342285156 636.90576171875 C 331.7808227539062 636.90576171875 322.8635559082031 635.2451171875 314.3322143554688 631.9701538085938 L 117.9999465942383 556.6055908203125 L 117.9999465942383 101.9996795654297 L 493.0002136230469 101.9997406005859 L 493.0002136230469 154.2708129882812 L 493.0002136230469 373.0152893066406 L 409.9365539550781 589.4046020507812 C 407.1713562011719 596.6082153320312 403.3426208496094 603.2826538085938 398.5567321777344 609.2425537109375 C 393.9265441894531 615.0086669921875 388.458740234375 620.0380859375 382.3051452636719 624.1911010742188 C 376.2322082519531 628.2896728515625 369.6005554199219 631.4625854492188 362.5942687988281 633.6217041015625 C 355.5243530273438 635.8003540039062 348.2039489746094 636.9052734375 340.8363342285156 636.90576171875 Z" fill="url(#img-soustraction6)" /></Svg>
            </View>
        </ScrollView>
    </ScrollView>
    );
  }
}

IphoneXxs11Pro6.propTypes = {

}

IphoneXxs11Pro6.defaultProps = {

}


const styles = StyleSheet.create({
  "iphoneXxs11Pro6": {
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
  "iphoneXxs11Pro6_grilleDeRepetition3": {
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
    "width": 393,
    "height": 740,
    "left": -10,
    "top": -6
  },
  "iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555": {
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
    "width": 375,
    "height": 734,
    "left": 9,
    "top": 6
  },
  "iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555_loading8caa8c79": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 71.34,
    "height": 73.02,
    "left": 152.45,
    "top": 630.46
  },
  "iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555_loading8caa8c79_trace15": {
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
    "width": 71.17,
    "height": 33.01,
    "left": 0.1,
    "top": 0
  },
  "iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555_loading8caa8c79_trace16": {
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
    "width": 71.34,
    "height": 34.85,
    "left": 0,
    "top": 38.17
  },
  "iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555_loading": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(37, 77, 113, 1)",
    "fontSize": 18,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "lineHeight": 20,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 131,
    "height": 25,
    "left": 123,
    "top": 712
  },
  "iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555_x80": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(254, 180, 169, 1)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "lineHeight": 20,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 38,
    "height": 24,
    "left": 171,
    "top": 656
  },
  "iphoneXxs11Pro6_grilleDeRepetition3_grilleDeRepetition3F0f9699c4555_soustraction6": {
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
    "shadowColor": "rgb(137,  137,  137)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 381,
    "height": 543.91,
    "left": 0,
    "top": 0
  }
});