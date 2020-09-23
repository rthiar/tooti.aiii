import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class IphoneXxs11Pro29 extends Component {

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
    <ScrollView data-layer="5892f573-e5a6-4ba2-b840-47d087819d7a" style={styles.iphoneXxs11Pro29}>
        <ScrollView data-layer="d52d6411-2049-48a8-8829-f1baeb30715e" style={styles.iphoneXxs11Pro29_grilleDeRepetition2}>
            <View data-layer="486b6ba9-036b-4ca3-af93-681d35ea10f8" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab}>
                <ReactImage data-layer="7f64d09f-41ff-43a5-aec4-0ebbf8d8e1d7" source={require('./assets/logo.png')} style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo} />
                <ScrollView data-layer="b5fca183-3f30-40e1-8268-2970718efcbc" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1}>
                    <View data-layer="85ef6ca3-40c2-4b8c-8fa3-05ab6fad8ee9" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f}>
                        <Svg data-layer="e1222469-8a73-4490-9683-d5a9b9f77f1f" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_soustraction7} preserveAspectRatio="none" viewBox="117.24994659423828 101.24967956542969 376.500244140625 536.40625" fill="rgba(37, 77, 113, 1)"><SvgPath d="M 340.8363342285156 636.90576171875 C 331.7808227539062 636.90576171875 322.8635559082031 635.2451171875 314.3322143554688 631.9701538085938 L 117.9999465942383 556.6055908203125 L 117.9999465942383 101.9996795654297 L 493.0002136230469 101.9997406005859 L 493.0002136230469 154.2708129882812 L 493.0002136230469 373.0152893066406 L 409.9365539550781 589.4046020507812 C 407.1713562011719 596.6082153320312 403.3426208496094 603.2826538085938 398.5567321777344 609.2425537109375 C 393.9265441894531 615.0086669921875 388.458740234375 620.0380859375 382.3051452636719 624.1911010742188 C 376.2322082519531 628.2896728515625 369.6005554199219 631.4625854492188 362.5942687988281 633.6217041015625 C 355.5243530273438 635.8003540039062 348.2039489746094 636.9052734375 340.8363342285156 636.90576171875 Z"  /></Svg>
                        <View data-layer="dbe5eaca-7ce7-4b40-a710-3d931895dda1" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca}>
                            <View data-layer="5f15d57a-2ead-4376-8248-68b70ba0766c" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_iconeDeBatterieafeb2bd3}>
                                <Svg data-layer="4365ab99-135f-47d7-92c5-ba1c06101def" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_iconeDeBatterieafeb2bd3_trace9e3418e5} preserveAspectRatio="none" viewBox="-0.75 -0.25 24 11.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1.502458333969116 1.026315808296204 L 1.502458333969116 1.026315808296204 C 0.9472132325172424 1.026315808296204 0.5 1.495540976524353 0.5 2.079011678695679 L 0.5 8.920988082885742 C 0.5 9.501893043518066 0.9490637183189392 9.973684310913086 1.502458333969116 9.973684310913086 L 20.9975414276123 9.973684310913086 C 21.55278587341309 9.973684310913086 22 9.504459381103516 22 8.920988082885742 L 22 2.079011678695679 C 22 1.498106837272644 21.55093574523926 1.026315808296204 20.9975414276123 1.026315808296204 L 1.502458333969116 1.026315808296204 Z M 1.502458333969116 0.5 L 1.502458333969116 0.5 L 20.9975414276123 0.5 C 21.82662010192871 0.5 22.5 1.206947565078735 22.5 2.079011678695679 L 22.5 8.920988082885742 C 22.5 9.796819686889648 21.82732582092285 10.5 20.9975414276123 10.5 L 1.502458333969116 10.5 C 0.6733803153038025 10.5 0 9.793052673339844 0 8.920988082885742 L 0 2.079011678695679 C 0 1.203180551528931 0.6726735234260559 0.5 1.502458333969116 0.5 L 1.502458333969116 0.5 Z"  /></Svg>
                                <View data-layer="7f8b4a63-41ca-42e9-8e39-b4dd5773c9b8" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_iconeDeBatterieafeb2bd3_rectangleef9c4a99}></View>
                                <Svg data-layer="84fda2c3-1cbf-41a5-8ced-3bed6a431f33" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_iconeDeBatterieafeb2bd3_tracec67583ae} preserveAspectRatio="none" viewBox="22.25 3.25 3 4.96435546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 24.5 5.732277870178223 C 24.5 6.613896369934082 23.84807205200195 7.343249320983887 23 7.464555740356445 L 23 4 C 23.84807205200195 4.121306419372559 24.5 4.850659370422363 24.5 5.732277870178223 Z"  /></Svg>
                            </View>
                            <Text data-layer="40d02400-3006-4cae-8a41-0339c3cf35fa" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_pourcentageDeBatteriee02ffb94}>42%</Text>
                            <Svg data-layer="c8186a74-043c-4d58-82de-b40ed29f5606" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_iconeBluetooth8a611382} preserveAspectRatio="none" viewBox="301.25 2.75 9.053466796875 14.5205078125" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 306.4277648925781 14.36894607543945 L 306.4277648925781 10.81073188781738 L 308.1397705078125 12.67517852783203 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 Z M 308.2183532714844 7.346535682678223 L 306.4277648925781 9.147821426391602 L 306.4277648925781 5.735214233398438 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 Z M 306.8578796386719 10.01085662841797 L 309.5148315429688 7.346535682678223 L 305.5505981445312 3.5 L 305.4569396972656 3.5 L 305.4569396972656 8.849857330322266 L 302.76611328125 6.028839111328125 L 302 6.829196453094482 L 305.2376403808594 10.01085662841797 L 302 13.19203567504883 L 302.76611328125 13.99239253997803 L 305.4569396972656 11.1713752746582 L 305.4569396972656 16.52075004577637 L 305.6282348632812 16.52075004577637 L 309.5534057617188 12.66457176208496 L 306.8578796386719 10.01085662841797 L 306.8578796386719 10.01085662841797 Z"  /></Svg>
                            <Text data-layer="ebc84954-57bc-4a65-aeef-516bf825874b" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_heureee972779}>9:41</Text>
                            <View data-layer="8280ab9b-cc7f-49e5-a516-4850ce72bff6" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180}>
                                <Svg data-layer="bdd5415a-f81d-451b-84c0-04d3a52788c3" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDeSignalWiFi85403b01} preserveAspectRatio="none" viewBox="83.75 4.75 13.5 10.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 90.49575042724609 7.020876884460449 C 92.43552398681641 7.020876884460449 94.20336151123047 7.735452175140381 95.55885314941406 8.907177925109863 L 96.5 7.868109703063965 C 94.89459991455078 6.474465847015381 92.79788970947266 5.5 90.49575042724609 5.5 C 88.19711303710938 5.5 86.10340118408203 6.47150707244873 84.5 7.86071252822876 L 85.43914794921875 8.901260375976562 C 86.79364013671875 7.732986450195312 88.55847930908203 7.020876884460449 90.49575042724609 7.020876884460449 L 90.49575042724609 7.020876884460449 Z M 90.49575042724609 10.02021884918213 C 91.65831756591797 10.02021884918213 92.72042083740234 10.44235610961914 93.53961181640625 11.13769817352295 L 94.53524017333984 10.03797245025635 C 93.45164489746094 9.107890129089355 92.04217529296875 8.50032901763916 90.49575042724609 8.50032901763916 C 88.95233154296875 8.50032901763916 87.54386138916016 9.106410980224609 86.46126556396484 10.03353404998779 L 87.45539093017578 11.13473987579346 C 88.27408599853516 10.44087696075439 89.33468627929688 10.02021884918213 90.49575042724609 10.02021884918213 L 90.49575042724609 10.02021884918213 Z M 92.54347991943359 12.23742485046387 C 91.98918914794922 11.77731513977051 91.27545928955078 11.45873928070068 90.49525451660156 11.45873928070068 C 89.71654510498047 11.45873928070068 89.00381469726562 11.77682209014893 88.44951629638672 12.23495864868164 L 90.49525451660156 14.5 L 92.54347991943359 12.23742485046387 L 92.54347991943359 12.23742485046387 Z"  /></Svg>
                                <Text data-layer="7b83d09b-95cf-4f20-9eaa-25bc33412dfa" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_operateur60317a93}>Opérateur</Text>
                                <View data-layer="38df84f0-9e1c-488e-a9bb-186f04b0942f" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f}>
                                    <Svg data-layer="35634581-4991-4262-bc61-abaf0b24ba6f" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f_ellipsed977283d} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                                    <Svg data-layer="c728c2a4-e173-4af9-9fae-8716ba5b0c3b" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f_ellipse34891bd0} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                                    <Svg data-layer="649d54b8-778c-4d07-8e23-77c38d3f60c6" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f_ellipse4d318233} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                                    <Svg data-layer="26b65054-80e3-4661-ba4b-acd5e290acb9" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f_traceeece7487} preserveAspectRatio="none" viewBox="20.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23.75 5 L 23.75 5 C 24.99264144897461 5 26 3.992640733718872 26 2.75 C 26 1.507359266281128 24.99264144897461 0.5 23.75 0.5 C 22.50735855102539 0.5 21.5 1.507359266281128 21.5 2.75 C 21.5 3.992640733718872 22.50735855102539 5 23.75 5 L 23.75 5 Z M 23.75 5.5 L 23.75 5.5 C 22.23121643066406 5.5 21 4.268783092498779 21 2.75 C 21 1.231216907501221 22.23121643066406 0 23.75 0 C 25.26878356933594 0 26.5 1.231216907501221 26.5 2.75 C 26.5 4.268783092498779 25.26878356933594 5.5 23.75 5.5 L 23.75 5.5 Z"  /></Svg>
                                    <Svg data-layer="841234ac-b7aa-4697-9f0c-5e2580daf45d" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f_trace4d8de75d} preserveAspectRatio="none" viewBox="27.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 30.75 5 L 30.75 5 C 31.99264144897461 5 33 3.992640733718872 33 2.75 C 33 1.507359266281128 31.99264144897461 0.5 30.75 0.5 C 29.50735855102539 0.5 28.5 1.507359266281128 28.5 2.75 C 28.5 3.992640733718872 29.50735855102539 5 30.75 5 L 30.75 5 Z M 30.75 5.5 L 30.75 5.5 C 29.23121643066406 5.5 28 4.268783092498779 28 2.75 C 28 1.231216907501221 29.23121643066406 0 30.75 0 C 32.26878356933594 0 33.5 1.231216907501221 33.5 2.75 C 33.5 4.268783092498779 32.26878356933594 5.5 30.75 5.5 L 30.75 5.5 Z"  /></Svg>
                                </View>
                            </View>
                        </View>
                        <Svg data-layer="c82a9635-17ed-4bb3-bb22-aa47048b8328" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_ellipse8} preserveAspectRatio="none" viewBox="0 0 80 80" fill="rgba(87, 183, 157, 1)"><SvgPath d="M 40 0 C 62.09139251708984 0 80 17.90860939025879 80 40 C 80 62.09139251708984 62.09139251708984 80 40 80 C 17.90860939025879 80 0 62.09139251708984 0 40 C 0 17.90860939025879 17.90860939025879 0 40 0 Z"  /></Svg>
                        <View data-layer="9252a072-1b59-49a7-b8d5-60aa8f021030" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle59}></View>
                        <View data-layer="819d528f-1e9e-4885-b630-415a23f2d7eb" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle62}></View>
                        <Text data-layer="756d0340-aab0-4c11-bfaf-0fad5fd51e41" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_username}>Username</Text>
                        <Text data-layer="a779d762-3768-4743-8813-381a46395dd5" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_password}>Password</Text>
                        <Text data-layer="2fa1ff5e-6ef9-4029-866a-11d31a92085d" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_forgotPassword}>Forgot password ?</Text>
                        <Svg data-layer="0ef3582b-4dcb-4481-8e6f-44c6773bacbb" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_soustraction8} preserveAspectRatio="none" viewBox="117.24994659423828 101.24967956542969 382.500244140625 545.40625" fill="rgba(37, 77, 113, 1)"><SvgPath d="M 340.8363342285156 636.90576171875 C 331.7808227539062 636.90576171875 322.8635559082031 635.2451171875 314.3322143554688 631.9701538085938 L 117.9999465942383 556.6055908203125 L 117.9999465942383 101.9996795654297 L 493.0002136230469 101.9997406005859 L 493.0002136230469 154.2708129882812 L 493.0002136230469 373.0152893066406 L 409.9365539550781 589.4046020507812 C 407.1713562011719 596.6082153320312 403.3426208496094 603.2826538085938 398.5567321777344 609.2425537109375 C 393.9265441894531 615.0086669921875 388.458740234375 620.0380859375 382.3051452636719 624.1911010742188 C 376.2322082519531 628.2896728515625 369.6005554199219 631.4625854492188 362.5942687988281 633.6217041015625 C 355.5243530273438 635.8003540039062 348.2039489746094 636.9052734375 340.8363342285156 636.90576171875 Z"  /></Svg>
                        <View data-layer="e57214ac-6e16-4bb4-aef2-889215f7dfaf" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat}>
                            <View data-layer="bb9197f1-0bdf-4b3f-a9cc-ad13a7cbca87" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_iconeDeBatterie}>
                                <Svg data-layer="8c387383-b1e7-4dc6-b719-039c789738b9" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_iconeDeBatterie_traced6fb02ab} preserveAspectRatio="none" viewBox="-0.75 -0.25 24 11.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1.502458333969116 1.026315808296204 L 1.502458333969116 1.026315808296204 C 0.9472132325172424 1.026315808296204 0.5 1.495540976524353 0.5 2.079011678695679 L 0.5 8.920988082885742 C 0.5 9.501893043518066 0.9490637183189392 9.973684310913086 1.502458333969116 9.973684310913086 L 20.9975414276123 9.973684310913086 C 21.55278587341309 9.973684310913086 22 9.504459381103516 22 8.920988082885742 L 22 2.079011678695679 C 22 1.498106837272644 21.55093574523926 1.026315808296204 20.9975414276123 1.026315808296204 L 1.502458333969116 1.026315808296204 Z M 1.502458333969116 0.5 L 1.502458333969116 0.5 L 20.9975414276123 0.5 C 21.82662010192871 0.5 22.5 1.206947565078735 22.5 2.079011678695679 L 22.5 8.920988082885742 C 22.5 9.796819686889648 21.82732582092285 10.5 20.9975414276123 10.5 L 1.502458333969116 10.5 C 0.6733803153038025 10.5 0 9.793052673339844 0 8.920988082885742 L 0 2.079011678695679 C 0 1.203180551528931 0.6726735234260559 0.5 1.502458333969116 0.5 L 1.502458333969116 0.5 Z"  /></Svg>
                                <View data-layer="1ddb7b47-b1b4-49b4-8a18-07a741433aab" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_iconeDeBatterie_rectangle}></View>
                                <Svg data-layer="b45f1b3a-142f-44db-8ee8-ae30de7148fc" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_iconeDeBatterie_tracebd251f2f} preserveAspectRatio="none" viewBox="22.25 3.25 3 4.96435546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 24.5 5.732277870178223 C 24.5 6.613896369934082 23.84807205200195 7.343249320983887 23 7.464555740356445 L 23 4 C 23.84807205200195 4.121306419372559 24.5 4.850659370422363 24.5 5.732277870178223 Z"  /></Svg>
                            </View>
                            <Text data-layer="cee53fd6-592e-4367-939e-64069a60b2d8" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_pourcentageDeBatterie}>42%</Text>
                            <Svg data-layer="9d2d9ec5-7338-47bd-b573-aa263c8f9022" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_iconeBluetooth} preserveAspectRatio="none" viewBox="301.25 2.75 9.053466796875 14.5205078125" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 306.4277648925781 14.36894607543945 L 306.4277648925781 10.81073188781738 L 308.1397705078125 12.67517852783203 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 Z M 308.2183532714844 7.346535682678223 L 306.4277648925781 9.147821426391602 L 306.4277648925781 5.735214233398438 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 Z M 306.8578796386719 10.01085662841797 L 309.5148315429688 7.346535682678223 L 305.5505981445312 3.5 L 305.4569396972656 3.5 L 305.4569396972656 8.849857330322266 L 302.76611328125 6.028839111328125 L 302 6.829196453094482 L 305.2376403808594 10.01085662841797 L 302 13.19203567504883 L 302.76611328125 13.99239253997803 L 305.4569396972656 11.1713752746582 L 305.4569396972656 16.52075004577637 L 305.6282348632812 16.52075004577637 L 309.5534057617188 12.66457176208496 L 306.8578796386719 10.01085662841797 L 306.8578796386719 10.01085662841797 Z"  /></Svg>
                            <Text data-layer="b0cda556-8ff7-425e-92fc-0bc3e8a0aeec" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_heure}>9:41</Text>
                            <View data-layer="e33220d6-9219-4ce5-b403-17ebffde79a5" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal}>
                                <Svg data-layer="69c355aa-c233-458e-8d07-93b8eb26a5c3" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDeSignalWiFi} preserveAspectRatio="none" viewBox="83.75 4.75 13.5 10.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 90.49575042724609 7.020876884460449 C 92.43552398681641 7.020876884460449 94.20336151123047 7.735452175140381 95.55885314941406 8.907177925109863 L 96.5 7.868109703063965 C 94.89459991455078 6.474465847015381 92.79788970947266 5.5 90.49575042724609 5.5 C 88.19711303710938 5.5 86.10340118408203 6.47150707244873 84.5 7.86071252822876 L 85.43914794921875 8.901260375976562 C 86.79364013671875 7.732986450195312 88.55847930908203 7.020876884460449 90.49575042724609 7.020876884460449 L 90.49575042724609 7.020876884460449 Z M 90.49575042724609 10.02021884918213 C 91.65831756591797 10.02021884918213 92.72042083740234 10.44235610961914 93.53961181640625 11.13769817352295 L 94.53524017333984 10.03797245025635 C 93.45164489746094 9.107890129089355 92.04217529296875 8.50032901763916 90.49575042724609 8.50032901763916 C 88.95233154296875 8.50032901763916 87.54386138916016 9.106410980224609 86.46126556396484 10.03353404998779 L 87.45539093017578 11.13473987579346 C 88.27408599853516 10.44087696075439 89.33468627929688 10.02021884918213 90.49575042724609 10.02021884918213 L 90.49575042724609 10.02021884918213 Z M 92.54347991943359 12.23742485046387 C 91.98918914794922 11.77731513977051 91.27545928955078 11.45873928070068 90.49525451660156 11.45873928070068 C 89.71654510498047 11.45873928070068 89.00381469726562 11.77682209014893 88.44951629638672 12.23495864868164 L 90.49525451660156 14.5 L 92.54347991943359 12.23742485046387 L 92.54347991943359 12.23742485046387 Z"  /></Svg>
                                <Text data-layer="7fc3b2e9-530e-40e6-9df0-bae933037527" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_operateur}>Opérateur</Text>
                                <View data-layer="fa38dbc8-96c1-4a88-b362-d237f748c332" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal}>
                                    <Svg data-layer="6d7e3d84-26f1-49f4-91b7-cbb1a8bcf18f" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse86d41205} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                                    <Svg data-layer="074d13c5-edb6-4a7d-8d88-a89a07cb0149" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipsec73f014c} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                                    <Svg data-layer="0bfaa149-4e5a-4405-a32c-92ce3a9b3b85" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                                    <Svg data-layer="6fd9d09d-dfe7-4e1e-91bf-6191b59be4fe" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_traceab3eeb76} preserveAspectRatio="none" viewBox="20.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23.75 5 L 23.75 5 C 24.99264144897461 5 26 3.992640733718872 26 2.75 C 26 1.507359266281128 24.99264144897461 0.5 23.75 0.5 C 22.50735855102539 0.5 21.5 1.507359266281128 21.5 2.75 C 21.5 3.992640733718872 22.50735855102539 5 23.75 5 L 23.75 5 Z M 23.75 5.5 L 23.75 5.5 C 22.23121643066406 5.5 21 4.268783092498779 21 2.75 C 21 1.231216907501221 22.23121643066406 0 23.75 0 C 25.26878356933594 0 26.5 1.231216907501221 26.5 2.75 C 26.5 4.268783092498779 25.26878356933594 5.5 23.75 5.5 L 23.75 5.5 Z"  /></Svg>
                                    <Svg data-layer="351e44c4-ac4f-4e61-9ec9-a22918ea2ee3" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace} preserveAspectRatio="none" viewBox="27.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 30.75 5 L 30.75 5 C 31.99264144897461 5 33 3.992640733718872 33 2.75 C 33 1.507359266281128 31.99264144897461 0.5 30.75 0.5 C 29.50735855102539 0.5 28.5 1.507359266281128 28.5 2.75 C 28.5 3.992640733718872 29.50735855102539 5 30.75 5 L 30.75 5 Z M 30.75 5.5 L 30.75 5.5 C 29.23121643066406 5.5 28 4.268783092498779 28 2.75 C 28 1.231216907501221 29.23121643066406 0 30.75 0 C 32.26878356933594 0 33.5 1.231216907501221 33.5 2.75 C 33.5 4.268783092498779 32.26878356933594 5.5 30.75 5.5 L 30.75 5.5 Z"  /></Svg>
                                </View>
                            </View>
                        </View>
                        <Text data-layer="f5c62e2a-c432-4c69-971a-140c8be4b291" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_name}>Name</Text>
                        <Text data-layer="b7d0b2ea-61ae-4521-9ddd-eade90991060" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_phoneNumber}>Phone number</Text>
                        <Text data-layer="20989080-c0bd-48e6-8443-db827d37925e" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_email}>Email</Text>
                        <ReactImage data-layer="cfa1ce9d-c10d-4889-a492-cce9891f8483" source={require('./assets/user2.png')} style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_user2} />
                        <View data-layer="8866201c-8c03-4d40-9b09-50ee1138bb40" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle81}></View>
                        <View style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_xdb9fb21b}><Text data-layer="0e6896dd-c928-449f-b28d-fd6b79018784" style={{"marginTop":-5.5,"color":"rgba(255, 255, 255, 1)","fontSize":17,"fontWeight":"700","fontStyle":"normal","fontFamily":"Helvetica Neue","textAlign":"center","lineHeight":18.700000000000003}}>+</Text></View>
                        <View data-layer="060aec14-c713-409a-88aa-8de50d635512" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle94}></View>
                        <View data-layer="8a99bd21-1bd1-414b-b400-95327cd9e92a" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle97}></View>
                        <View data-layer="3470bb52-14f7-457b-b0bf-6168a1576b53" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle98}></View>
                        <View data-layer="05d659cb-5cd4-4110-9b1f-a0b9a37e32b0" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle74}></View>
                        <Svg data-layer="59c45619-28b9-4545-8b39-9314ebee4648" style={styles.iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_iccheck24px} preserveAspectRatio="none" viewBox="3.4099998474121094 5.590000152587891 32.281494140625 35.41796875" fill="rgba(37, 77, 113, 1)"><SvgPath d="M 13.66880416870117 33.53329086303711 L 6.015993595123291 22.51972579956055 L 3.409999847412109 26.24373626708984 L 13.66880416870117 41.00772476196289 L 35.69128799438477 9.314010620117188 L 33.10364532470703 5.590000152587891 L 13.66880416870117 33.53329086303711 Z"  /></Svg>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    </ScrollView>
    );
  }
}

IphoneXxs11Pro29.propTypes = {

}

IphoneXxs11Pro29.defaultProps = {

}


const styles = StyleSheet.create({
  "iphoneXxs11Pro29": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2": {
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
    "width": 407,
    "height": 738.13,
    "left": -23,
    "top": -6
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab": {
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
    "width": 407,
    "height": 738.13,
    "left": 0,
    "top": 0
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 169.84,
    "height": 53.9,
    "left": 121.57,
    "top": 684.23
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo_trace8": {
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
    "width": 33.96,
    "height": 43.32,
    "left": 0,
    "top": 10.13
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo_trace9": {
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
    "width": 33.97,
    "height": 43.32,
    "left": 126.71,
    "top": 10.13
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo_trace10": {
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
    "width": 3.51,
    "height": 43.32,
    "left": 166.33,
    "top": 10.13
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo_rectangle33": {
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
    "width": 34.21,
    "height": 3.37,
    "left": 62.78,
    "top": 0
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo_groupe4": {
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
    "width": 43.21,
    "height": 44.23,
    "left": 34.21,
    "top": 9.68
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo_groupe4_trace11": {
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
    "width": 43.11,
    "height": 19.99,
    "left": 0.06,
    "top": 0
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo_groupe4_trace12": {
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
    "width": 43.21,
    "height": 21.11,
    "left": 0,
    "top": 23.12
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo_groupe5": {
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
    "width": 43.21,
    "height": 44.23,
    "left": 82.56,
    "top": 9.68
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo_groupe5_trace13": {
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
    "width": 43.11,
    "height": 19.99,
    "left": 0.06,
    "top": 0
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_logo_groupe5_trace14": {
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
    "width": 43.21,
    "height": 21.11,
    "left": 0,
    "top": 23.12
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1": {
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
    "width": 407,
    "height": 552.91,
    "left": 0,
    "top": 0
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f": {
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
    "width": 398,
    "height": 534.91,
    "left": 0,
    "top": 6
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_soustraction7": {
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
    "width": 375,
    "height": 534.91,
    "left": 23,
    "top": 0
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca": {
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
    "left": 31,
    "top": 9.5
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_iconeDeBatterieafeb2bd3": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_iconeDeBatterieafeb2bd3_trace9e3418e5": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_iconeDeBatterieafeb2bd3_rectangleef9c4a99": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_iconeDeBatterieafeb2bd3_tracec67583ae": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_pourcentageDeBatteriee02ffb94": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_iconeBluetooth8a611382": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_heureee972779": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDeSignalWiFi85403b01": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_operateur60317a93": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f_ellipsed977283d": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f_ellipse34891bd0": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f_ellipse4d318233": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f_traceeece7487": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat3ebe68ca_groupeDeSignala8455180_iconeDintensiteDuSignal9d84226f_trace4d8de75d": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_ellipse8": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.4235294117647059,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 2,
    "width": 80,
    "height": 80,
    "left": 210,
    "top": 441
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle59": {
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
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 300,
    "height": 44,
    "left": 61,
    "top": 145
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle62": {
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
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 300,
    "height": 44,
    "left": 61,
    "top": 243
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_username": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 220,
    "height": 30,
    "left": 0,
    "top": 115
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_password": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 220,
    "height": 30,
    "left": 0,
    "top": 215
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_forgotPassword": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 18,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 220,
    "height": 30,
    "left": 171,
    "top": 290
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_soustraction8": {
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
    "left": 23,
    "top": 0
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat": {
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
    "left": 31,
    "top": 9.5
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_iconeDeBatterie": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_iconeDeBatterie_traced6fb02ab": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_iconeDeBatterie_rectangle": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_iconeDeBatterie_tracebd251f2f": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_pourcentageDeBatterie": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_iconeBluetooth": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_heure": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDeSignalWiFi": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_operateur": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse86d41205": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipsec73f014c": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_traceab3eeb76": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace": {
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
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_name": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 18,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Raleway",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 220,
    "height": 23,
    "left": 67,
    "top": 130
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_phoneNumber": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 18,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Raleway",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 220,
    "height": 25,
    "left": 67,
    "top": 277
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_email": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 18,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Raleway",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 220,
    "height": 22,
    "left": 67,
    "top": 202
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_user2": {
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
    "width": 80,
    "height": 80,
    "left": 171,
    "top": 50
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle81": {
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
    "borderTopLeftRadius": 2,
    "borderTopRightRadius": 2,
    "borderBottomLeftRadius": 2,
    "borderBottomRightRadius": 2,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 24,
    "height": 23,
    "left": 172,
    "top": 109
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_xdb9fb21b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 17,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "lineHeight": 18.700000000000003,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 10,
    "height": 21,
    "left": 179,
    "top": 114.5
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle94": {
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
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 300,
    "height": 38,
    "left": 65,
    "top": 153
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle97": {
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
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 300,
    "height": 38,
    "left": 65,
    "top": 225
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle98": {
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
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 300,
    "height": 38,
    "left": 65,
    "top": 302
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_rectangle74": {
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
    "shadowOpacity": 0.4117647058823529,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 74,
    "height": 74,
    "left": 280,
    "top": 427
  },
  "iphoneXxs11Pro29_grilleDeRepetition2_grilleDeRepetition26f9d0fd04aab_grilleDeRepetition1_grilleDeRepetition1A0e0bfaed93f_iccheck24px": {
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
    "width": 32.28,
    "height": 35.42,
    "left": 301,
    "top": 445.99
  }
});