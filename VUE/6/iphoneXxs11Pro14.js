import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class IphoneXxs11Pro14 extends Component {

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
    <ScrollView data-layer="885184fc-a821-484f-a623-4dbbde641fe4" style={styles.iphoneXxs11Pro14}>
        <ScrollView data-layer="fc86d692-5d73-48a8-a3af-04db87a5f75f" style={styles.iphoneXxs11Pro14_grilleDeRepetition3}>
            <View data-layer="703b919a-0a2e-4b1b-bebf-347ce46f8531" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0}>
                <View data-layer="858a83c9-e574-4c86-ba5b-863db5c29697" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle68}></View>
                <View data-layer="e0aa0d9a-ad21-4520-8513-ec66e387bb49" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat}>
                    <View data-layer="0f641ad1-53f5-4e9b-a807-bd8d34d60c6c" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_iconeDeBatterie}>
                        <Svg data-layer="c2a53f80-b569-4182-86e9-e8f0313a4f90" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_iconeDeBatterie_trace6f608fb7} preserveAspectRatio="none" viewBox="-0.75 -0.25 24 11.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1.502458333969116 1.026315808296204 L 1.502458333969116 1.026315808296204 C 0.9472132325172424 1.026315808296204 0.5 1.495540976524353 0.5 2.079011678695679 L 0.5 8.920988082885742 C 0.5 9.501893043518066 0.9490637183189392 9.973684310913086 1.502458333969116 9.973684310913086 L 20.9975414276123 9.973684310913086 C 21.55278587341309 9.973684310913086 22 9.504459381103516 22 8.920988082885742 L 22 2.079011678695679 C 22 1.498106837272644 21.55093574523926 1.026315808296204 20.9975414276123 1.026315808296204 L 1.502458333969116 1.026315808296204 Z M 1.502458333969116 0.5 L 1.502458333969116 0.5 L 20.9975414276123 0.5 C 21.82662010192871 0.5 22.5 1.206947565078735 22.5 2.079011678695679 L 22.5 8.920988082885742 C 22.5 9.796819686889648 21.82732582092285 10.5 20.9975414276123 10.5 L 1.502458333969116 10.5 C 0.6733803153038025 10.5 0 9.793052673339844 0 8.920988082885742 L 0 2.079011678695679 C 0 1.203180551528931 0.6726735234260559 0.5 1.502458333969116 0.5 L 1.502458333969116 0.5 Z"  /></Svg>
                        <View data-layer="c6117286-2890-4d1b-8093-7930e85bd628" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_iconeDeBatterie_rectangle}></View>
                        <Svg data-layer="b637d9da-4d55-455b-a2b8-3b653bdf0ecc" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_iconeDeBatterie_trace37d76087} preserveAspectRatio="none" viewBox="22.25 3.25 3 4.96435546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 24.5 5.732277870178223 C 24.5 6.613896369934082 23.84807205200195 7.343249320983887 23 7.464555740356445 L 23 4 C 23.84807205200195 4.121306419372559 24.5 4.850659370422363 24.5 5.732277870178223 Z"  /></Svg>
                    </View>
                    <Text data-layer="1f8194db-e18d-4713-ae32-3fb006179637" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_pourcentageDeBatterie}>42%</Text>
                    <Svg data-layer="15a71104-97b1-4f6a-a03b-3c6c659bab3b" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_iconeBluetooth} preserveAspectRatio="none" viewBox="301.25 2.75 9.053466796875 14.5205078125" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 306.4277648925781 14.36894607543945 L 306.4277648925781 10.81073188781738 L 308.1397705078125 12.67517852783203 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 Z M 308.2183532714844 7.346535682678223 L 306.4277648925781 9.147821426391602 L 306.4277648925781 5.735214233398438 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 Z M 306.8578796386719 10.01085662841797 L 309.5148315429688 7.346535682678223 L 305.5505981445312 3.5 L 305.4569396972656 3.5 L 305.4569396972656 8.849857330322266 L 302.76611328125 6.028839111328125 L 302 6.829196453094482 L 305.2376403808594 10.01085662841797 L 302 13.19203567504883 L 302.76611328125 13.99239253997803 L 305.4569396972656 11.1713752746582 L 305.4569396972656 16.52075004577637 L 305.6282348632812 16.52075004577637 L 309.5534057617188 12.66457176208496 L 306.8578796386719 10.01085662841797 L 306.8578796386719 10.01085662841797 Z"  /></Svg>
                    <Text data-layer="bdb13a6e-7931-409b-878a-71d4bae60dbc" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_heure}>9:41</Text>
                    <View data-layer="d129dd30-e880-47b7-8b26-354c9e390fb8" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal}>
                        <Svg data-layer="b4379374-1aa0-45d8-8461-3cb27b4910ef" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDeSignalWiFi} preserveAspectRatio="none" viewBox="83.75 4.75 13.5 10.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 90.49575042724609 7.020876884460449 C 92.43552398681641 7.020876884460449 94.20336151123047 7.735452175140381 95.55885314941406 8.907177925109863 L 96.5 7.868109703063965 C 94.89459991455078 6.474465847015381 92.79788970947266 5.5 90.49575042724609 5.5 C 88.19711303710938 5.5 86.10340118408203 6.47150707244873 84.5 7.86071252822876 L 85.43914794921875 8.901260375976562 C 86.79364013671875 7.732986450195312 88.55847930908203 7.020876884460449 90.49575042724609 7.020876884460449 L 90.49575042724609 7.020876884460449 Z M 90.49575042724609 10.02021884918213 C 91.65831756591797 10.02021884918213 92.72042083740234 10.44235610961914 93.53961181640625 11.13769817352295 L 94.53524017333984 10.03797245025635 C 93.45164489746094 9.107890129089355 92.04217529296875 8.50032901763916 90.49575042724609 8.50032901763916 C 88.95233154296875 8.50032901763916 87.54386138916016 9.106410980224609 86.46126556396484 10.03353404998779 L 87.45539093017578 11.13473987579346 C 88.27408599853516 10.44087696075439 89.33468627929688 10.02021884918213 90.49575042724609 10.02021884918213 L 90.49575042724609 10.02021884918213 Z M 92.54347991943359 12.23742485046387 C 91.98918914794922 11.77731513977051 91.27545928955078 11.45873928070068 90.49525451660156 11.45873928070068 C 89.71654510498047 11.45873928070068 89.00381469726562 11.77682209014893 88.44951629638672 12.23495864868164 L 90.49525451660156 14.5 L 92.54347991943359 12.23742485046387 L 92.54347991943359 12.23742485046387 Z"  /></Svg>
                        <Text data-layer="f7c3a6d0-3558-4ad7-a0ec-2061bb46ceba" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_operateur}>Opérateur</Text>
                        <View data-layer="2591575a-796c-4579-a406-504241a656b9" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal}>
                            <Svg data-layer="d1063672-1b15-4451-94a3-3cc611436dd6" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipseb5dc3081} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="3fd1770c-f5e2-4002-91f6-d9573adcbb04" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse78a5e51f} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="f90277ca-d8b6-43d5-bdd8-6f76d2c77a17" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="1bcffff8-35d9-459e-b888-db5e352198a9" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_traceaffaad22} preserveAspectRatio="none" viewBox="20.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23.75 5 L 23.75 5 C 24.99264144897461 5 26 3.992640733718872 26 2.75 C 26 1.507359266281128 24.99264144897461 0.5 23.75 0.5 C 22.50735855102539 0.5 21.5 1.507359266281128 21.5 2.75 C 21.5 3.992640733718872 22.50735855102539 5 23.75 5 L 23.75 5 Z M 23.75 5.5 L 23.75 5.5 C 22.23121643066406 5.5 21 4.268783092498779 21 2.75 C 21 1.231216907501221 22.23121643066406 0 23.75 0 C 25.26878356933594 0 26.5 1.231216907501221 26.5 2.75 C 26.5 4.268783092498779 25.26878356933594 5.5 23.75 5.5 L 23.75 5.5 Z"  /></Svg>
                            <Svg data-layer="79b709dd-4fc2-4fee-8c46-14b0470c682c" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace} preserveAspectRatio="none" viewBox="27.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 30.75 5 L 30.75 5 C 31.99264144897461 5 33 3.992640733718872 33 2.75 C 33 1.507359266281128 31.99264144897461 0.5 30.75 0.5 C 29.50735855102539 0.5 28.5 1.507359266281128 28.5 2.75 C 28.5 3.992640733718872 29.50735855102539 5 30.75 5 L 30.75 5 Z M 30.75 5.5 L 30.75 5.5 C 29.23121643066406 5.5 28 4.268783092498779 28 2.75 C 28 1.231216907501221 29.23121643066406 0 30.75 0 C 32.26878356933594 0 33.5 1.231216907501221 33.5 2.75 C 33.5 4.268783092498779 32.26878356933594 5.5 30.75 5.5 L 30.75 5.5 Z"  /></Svg>
                        </View>
                    </View>
                </View>
                <View data-layer="180d616e-ec29-4587-8572-412bb5c2a337" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle82}></View>
                <View data-layer="98cee7ea-bbb1-4dd6-8932-98453c0ca3c9" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle85}></View>
                <View data-layer="294f4fa2-2069-4977-9b1b-7a3a09fc5d29" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle84}></View>
                <View data-layer="427d2f02-f0b4-4749-b169-dce5f70ac53a" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle87}></View>
                <Text data-layer="ba3fbf14-a1ac-4079-887f-682fead76fb5" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_benjaminThiarAdmin}>Benjamin Thiar (Admin)</Text>
                <Text data-layer="1e84819d-1f20-41e1-b895-a828f1395b61" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_cecileDupontAssistant}>Cécile Dupont (Assistant)</Text>
                <Text data-layer="e78722b4-8070-46c4-ae82-a80e91da43ff" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_johnDoeNotDefined}>John Doe (not defined) </Text>
                <Text data-layer="b48d5b96-86d0-4d51-b75a-616ebaa24082" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_oliverTwistNotDefined}>Oliver Twist (not defined) </Text>
                <View style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_chooseContacts}><Text data-layer="997b3813-8476-4cfd-b8fb-c3c8cd3bb522" style={{"marginTop":-5,"color":"rgba(37, 77, 113, 1)","fontSize":30,"fontWeight":"500","fontStyle":"normal","fontFamily":"Raleway","textAlign":"center","lineHeight":33}}>Choose Contacts</Text></View>
                <ReactImage data-layer="dd012b0e-249c-4e74-b079-fed2bc107243" source={require('./assets/fleche2c77fc8f.png')} style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_fleche2c77fc8f} />
                <ReactImage data-layer="c506c607-759c-4f3b-9ccd-55e056e8edbf" source={require('./assets/fleche.png')} style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_fleche} />
                <Svg data-layer="b7a8da72-9058-4571-96dc-53e3d11c5739" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ellipse9} preserveAspectRatio="none" viewBox="0 0 8 8" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 4 0 C 6.209138870239258 0 8 1.790861129760742 8 4 C 8 6.209138870239258 6.209138870239258 8 4 8 C 1.790861129760742 8 0 6.209138870239258 0 4 C 0 1.790861129760742 1.790861129760742 0 4 0 Z"  /></Svg>
                <Svg data-layer="a3987e17-7ed0-47c7-b6ce-9dad946ad664" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ellipse10} preserveAspectRatio="none" viewBox="0 0 8 8" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 4 0 C 6.209138870239258 0 8 1.790861129760742 8 4 C 8 6.209138870239258 6.209138870239258 8 4 8 C 1.790861129760742 8 0 6.209138870239258 0 4 C 0 1.790861129760742 1.790861129760742 0 4 0 Z"  /></Svg>
                <View data-layer="7216d3a1-487a-459f-8465-ea325eb410a1" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle86}></View>
                <View style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_x0cd76985}><Text data-layer="c1872596-08c8-460d-bb99-dc8200debe9c" style={{"marginTop":-15,"color":"rgba(37, 77, 113, 1)","fontSize":50,"fontWeight":"700","fontStyle":"normal","fontFamily":"Helvetica Neue","textAlign":"center","lineHeight":55.00000000000001}}>+</Text></View>
                <Svg data-layer="a5ae7072-5815-4477-801d-b6e11bed375f" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ligne2} preserveAspectRatio="none" viewBox="0 -0.5 333 1" fill="transparent"><SvgPath d="M 0 0 L 333 0"  /></Svg>
                <Svg data-layer="04cd58cb-228d-4f94-9475-20f013cbebc2" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ligne3} preserveAspectRatio="none" viewBox="0 -0.5 333 1" fill="transparent"><SvgPath d="M 0 0 L 333 0"  /></Svg>
                <Svg data-layer="f787cb88-b773-4239-9da7-9998d4a6e2df" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ligne4} preserveAspectRatio="none" viewBox="0 -0.5 333 1" fill="transparent"><SvgPath d="M 0 0 L 333 0"  /></Svg>
                <Svg data-layer="eb24ee86-d845-44f4-9dcb-524121cf1734" style={styles.iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ligne5} preserveAspectRatio="none" viewBox="0 -0.5 333 1" fill="transparent"><SvgPath d="M 0 0 L 333 0"  /></Svg>
            </View>
        </ScrollView>
    </ScrollView>
    );
  }
}

IphoneXxs11Pro14.propTypes = {

}

IphoneXxs11Pro14.defaultProps = {

}


const styles = StyleSheet.create({
  "iphoneXxs11Pro14": {
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
  "iphoneXxs11Pro14_grilleDeRepetition3": {
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
    "width": "auto",
    "height": 754,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0": {
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
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 12
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle68": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(37, 77, 113, 1)",
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
    "width": 375,
    "height": 30,
    "left": 0,
    "top": 0
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat": {
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
    "width": 359.5,
    "height": 14,
    "left": 8,
    "top": 9.5
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_iconeDeBatterie": {
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
    "width": 24.5,
    "height": 10,
    "left": 335,
    "top": 1
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_iconeDeBatterie_trace6f608fb7": {
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
    "width": 24.5,
    "height": 12,
    "left": -1,
    "top": -1
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_iconeDeBatterie_rectangle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 8,
    "height": 7,
    "left": 0.5,
    "top": 0.5
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_iconeDeBatterie_trace37d76087": {
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
    "width": 3.5,
    "height": 5.46,
    "left": 22,
    "top": 2.5
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_pourcentageDeBatterie": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(243, 250, 255, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Helvetica",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 24,
    "height": 12,
    "left": 307,
    "top": 1
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_iconeBluetooth": {
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
    "width": 9.55,
    "height": 15.02,
    "left": 294,
    "top": -1
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_heure": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(243, 250, 255, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Helvetica",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 23,
    "height": 12,
    "left": 168,
    "top": 2
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal": {
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
    "width": 107,
    "height": 12,
    "left": 0,
    "top": 1
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDeSignalWiFi": {
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
    "width": 14,
    "height": 11,
    "left": 94,
    "top": -1
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_operateur": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(243, 250, 255, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Helvetica",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 12,
    "left": 37,
    "top": 0
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal": {
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
    "width": 33.5,
    "height": 5.5,
    "left": 0,
    "top": 3
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipseb5dc3081": {
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
    "width": 7.5,
    "height": 7.5,
    "left": -1,
    "top": -1
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse78a5e51f": {
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
    "width": 7.5,
    "height": 7.5,
    "left": 6,
    "top": -1
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse": {
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
    "width": 7.5,
    "height": 7.5,
    "left": 13,
    "top": -1
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_traceaffaad22": {
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
    "width": 7.5,
    "height": 7.5,
    "left": 20,
    "top": -1
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace": {
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
    "width": 7.5,
    "height": 7.5,
    "left": 27,
    "top": -1
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle82": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(87, 183, 157, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 31,
    "height": 31,
    "left": 38,
    "top": 128
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle85": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(87, 183, 157, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 31,
    "height": 31,
    "left": 38,
    "top": 186
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle84": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(242, 196, 70, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 31,
    "height": 31,
    "left": 38,
    "top": 244
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle87": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(178, 178, 178, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 31,
    "height": 31,
    "left": 38,
    "top": 300
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_benjaminThiarAdmin": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(87, 183, 157, 1)",
    "fontSize": 20,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Raleway",
    "textAlign": "center",
    "lineHeight": 20,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 2,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 216,
    "height": 24,
    "left": 94,
    "top": 134
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_cecileDupontAssistant": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(87, 183, 157, 1)",
    "fontSize": 20,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Raleway",
    "textAlign": "center",
    "lineHeight": 20,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 2,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 234,
    "height": 24,
    "left": 95,
    "top": 193
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_johnDoeNotDefined": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(178, 178, 178, 1)",
    "fontSize": 20,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Raleway",
    "textAlign": "center",
    "lineHeight": 20,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 2,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 216,
    "height": 24,
    "left": 95,
    "top": 250
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_oliverTwistNotDefined": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(178, 178, 178, 1)",
    "fontSize": 20,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Raleway",
    "textAlign": "center",
    "lineHeight": 20,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 2,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 236,
    "height": 24,
    "left": 94,
    "top": 306
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_chooseContacts": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(37, 77, 113, 1)",
    "fontSize": 30,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Raleway",
    "textAlign": "center",
    "lineHeight": 33,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 240,
    "height": 35,
    "left": 68,
    "top": 58.5
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_fleche2c77fc8f": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 57,
    "height": 57,
    "left": 99,
    "top": 685
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_fleche": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 57,
    "height": 57,
    "left": 38,
    "top": 685
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ellipse9": {
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
    "width": 8,
    "height": 8,
    "left": 49,
    "top": 139
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ellipse10": {
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
    "width": 8,
    "height": 8,
    "left": 49,
    "top": 197
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_rectangle86": {
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
    "borderTopLeftRadius": 13,
    "borderTopRightRadius": 13,
    "borderBottomLeftRadius": 13,
    "borderBottomRightRadius": 13,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 74,
    "height": 74,
    "left": 274,
    "top": 668
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_x0cd76985": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(37, 77, 113, 1)",
    "fontSize": 50,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "lineHeight": 55.00000000000001,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 30,
    "height": 60,
    "left": 296,
    "top": 688
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ligne2": {
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
    "width": 333,
    "height": 1,
    "left": 8.5,
    "top": 172
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ligne3": {
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
    "width": 333,
    "height": 1,
    "left": 8.5,
    "top": 230
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ligne4": {
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
    "width": 333,
    "height": 1,
    "left": 8.5,
    "top": 286
  },
  "iphoneXxs11Pro14_grilleDeRepetition3_grilleDeRepetition31b53107081f0_ligne5": {
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
    "width": 333,
    "height": 1,
    "left": 8.5,
    "top": 342
  }
});