import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class IphoneXxs11Pro11 extends Component {

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
    <ScrollView data-layer="8454d438-89d7-42ab-be69-ec8d7b0e6cb1" style={styles.iphoneXxs11Pro11}>
        <ScrollView data-layer="d2131622-23ec-4201-8cda-993f811a68b0" style={styles.iphoneXxs11Pro11_grilleDeRepetition3}>
            <View data-layer="a0629989-6460-41f8-91f3-6278212aac75" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce}>
                <Svg data-layer="700b3515-df71-4995-970b-68b93fc24eca" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_soustraction7} preserveAspectRatio="none" viewBox="117.24994659423828 101.24967956542969 376.50030517578125 536.40625" fill="rgba(37, 77, 113, 1)"><SvgPath d="M 340.8363342285156 636.90576171875 C 331.7808227539062 636.90576171875 322.8635559082031 635.2451171875 314.3322143554688 631.9701538085938 L 117.9999465942383 556.6055908203125 L 117.9999465942383 101.9996795654297 L 493.0002136230469 101.9997406005859 L 493.0002136230469 154.2708129882812 L 493.0002136230469 373.0152893066406 L 409.9365539550781 589.4046020507812 C 407.1713562011719 596.6082153320312 403.3426208496094 603.2826538085938 398.5567321777344 609.2425537109375 C 393.9265441894531 615.0086669921875 388.458740234375 620.0380859375 382.3051452636719 624.1911010742188 C 376.2322082519531 628.2896728515625 369.6005554199219 631.4625854492188 362.5942687988281 633.6217041015625 C 355.5243530273438 635.8003540039062 348.2039489746094 636.9052734375 340.8363342285156 636.90576171875 Z"  /></Svg>
                <View data-layer="f9ac29f2-b431-46c6-b13e-bc72a72ac5d0" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc}>
                    <View data-layer="be366735-fa6d-42f3-aaaa-e60cfc27bd80" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_iconeDeBatterie4e7017fe}>
                        <Svg data-layer="b9c0463f-3460-4da5-aa3a-f52d3a651e0b" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_iconeDeBatterie4e7017fe_traced9e2c0ad} preserveAspectRatio="none" viewBox="-0.75 -0.25 24 11.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1.502458333969116 1.026315808296204 L 1.502458333969116 1.026315808296204 C 0.9472132325172424 1.026315808296204 0.5 1.495540976524353 0.5 2.079011678695679 L 0.5 8.920988082885742 C 0.5 9.501893043518066 0.9490637183189392 9.973684310913086 1.502458333969116 9.973684310913086 L 20.9975414276123 9.973684310913086 C 21.55278587341309 9.973684310913086 22 9.504459381103516 22 8.920988082885742 L 22 2.079011678695679 C 22 1.498106837272644 21.55093574523926 1.026315808296204 20.9975414276123 1.026315808296204 L 1.502458333969116 1.026315808296204 Z M 1.502458333969116 0.5 L 1.502458333969116 0.5 L 20.9975414276123 0.5 C 21.82662010192871 0.5 22.5 1.206947565078735 22.5 2.079011678695679 L 22.5 8.920988082885742 C 22.5 9.796819686889648 21.82732582092285 10.5 20.9975414276123 10.5 L 1.502458333969116 10.5 C 0.6733803153038025 10.5 0 9.793052673339844 0 8.920988082885742 L 0 2.079011678695679 C 0 1.203180551528931 0.6726735234260559 0.5 1.502458333969116 0.5 L 1.502458333969116 0.5 Z"  /></Svg>
                        <View data-layer="6137d7d8-36cc-4847-9f59-246ee0d63a65" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_iconeDeBatterie4e7017fe_rectangle1667c705}></View>
                        <Svg data-layer="430a8ba4-a3a7-4a49-89a0-7e003de035d4" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_iconeDeBatterie4e7017fe_trace1056fbad} preserveAspectRatio="none" viewBox="22.25 3.25 3 4.96435546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 24.5 5.732277870178223 C 24.5 6.613896369934082 23.84807205200195 7.343249320983887 23 7.464555740356445 L 23 4 C 23.84807205200195 4.121306419372559 24.5 4.850659370422363 24.5 5.732277870178223 Z"  /></Svg>
                    </View>
                    <Text data-layer="62d62d5d-d1c4-47e7-9db8-bcecfd72b61d" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_pourcentageDeBatterie4e0e4f00}>42%</Text>
                    <Svg data-layer="6750df42-505c-4845-8c10-f1d4d9a9e3bf" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_iconeBluetooth9c1cef08} preserveAspectRatio="none" viewBox="301.25 2.75 9.05340576171875 14.5205078125" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 306.4277648925781 14.36894607543945 L 306.4277648925781 10.81073188781738 L 308.1397705078125 12.67517852783203 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 Z M 308.2183532714844 7.346535682678223 L 306.4277648925781 9.147821426391602 L 306.4277648925781 5.735214233398438 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 Z M 306.8578796386719 10.01085662841797 L 309.5148315429688 7.346535682678223 L 305.5505981445312 3.5 L 305.4569396972656 3.5 L 305.4569396972656 8.849857330322266 L 302.76611328125 6.028839111328125 L 302 6.829196453094482 L 305.2376403808594 10.01085662841797 L 302 13.19203567504883 L 302.76611328125 13.99239253997803 L 305.4569396972656 11.1713752746582 L 305.4569396972656 16.52075004577637 L 305.6282348632812 16.52075004577637 L 309.5534057617188 12.66457176208496 L 306.8578796386719 10.01085662841797 L 306.8578796386719 10.01085662841797 Z"  /></Svg>
                    <Text data-layer="0ae7caf5-2892-42fc-b11f-9a8a9321accc" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_heure176f348e}>9:41</Text>
                    <View data-layer="00003eb0-5ab5-4245-9a70-3463ecacc914" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704}>
                        <Svg data-layer="6c91f05a-ba79-4adf-9fa6-3f22ac4c51bc" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDeSignalWiFi3322fbff} preserveAspectRatio="none" viewBox="83.75 4.75 13.5 10.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 90.49575042724609 7.020876884460449 C 92.43552398681641 7.020876884460449 94.20336151123047 7.735452175140381 95.55885314941406 8.907177925109863 L 96.5 7.868109703063965 C 94.89459991455078 6.474465847015381 92.79788970947266 5.5 90.49575042724609 5.5 C 88.19711303710938 5.5 86.10340118408203 6.47150707244873 84.5 7.86071252822876 L 85.43914794921875 8.901260375976562 C 86.79364013671875 7.732986450195312 88.55847930908203 7.020876884460449 90.49575042724609 7.020876884460449 L 90.49575042724609 7.020876884460449 Z M 90.49575042724609 10.02021884918213 C 91.65831756591797 10.02021884918213 92.72042083740234 10.44235610961914 93.53961181640625 11.13769817352295 L 94.53524017333984 10.03797245025635 C 93.45164489746094 9.107890129089355 92.04217529296875 8.50032901763916 90.49575042724609 8.50032901763916 C 88.95233154296875 8.50032901763916 87.54386138916016 9.106410980224609 86.46126556396484 10.03353404998779 L 87.45539093017578 11.13473987579346 C 88.27408599853516 10.44087696075439 89.33468627929688 10.02021884918213 90.49575042724609 10.02021884918213 L 90.49575042724609 10.02021884918213 Z M 92.54347991943359 12.23742485046387 C 91.98918914794922 11.77731513977051 91.27545928955078 11.45873928070068 90.49525451660156 11.45873928070068 C 89.71654510498047 11.45873928070068 89.00381469726562 11.77682209014893 88.44951629638672 12.23495864868164 L 90.49525451660156 14.5 L 92.54347991943359 12.23742485046387 L 92.54347991943359 12.23742485046387 Z"  /></Svg>
                        <Text data-layer="2f5fe567-4932-4396-868b-11a1d7b35a86" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_operateurf610599d}>Opérateur</Text>
                        <View data-layer="5a2b0ddd-3405-41f6-bf24-a010ce289f24" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177}>
                            <Svg data-layer="43172a5a-88b8-414f-806e-38e2c2950b7b" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177_ellipse3104a041} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="24914958-c4fa-4d72-8d79-3a8157b9a1f9" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177_ellipse4abaa8da} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="a68f740c-5820-4a81-8dc7-963fa6fefc9e" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177_ellipse73e88700} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="bce2b0f9-58ab-4fe3-8de0-5546c0c5aa1d" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177_tracebcd2d491} preserveAspectRatio="none" viewBox="20.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23.75 5 L 23.75 5 C 24.99264144897461 5 26 3.992640733718872 26 2.75 C 26 1.507359266281128 24.99264144897461 0.5 23.75 0.5 C 22.50735855102539 0.5 21.5 1.507359266281128 21.5 2.75 C 21.5 3.992640733718872 22.50735855102539 5 23.75 5 L 23.75 5 Z M 23.75 5.5 L 23.75 5.5 C 22.23121643066406 5.5 21 4.268783092498779 21 2.75 C 21 1.231216907501221 22.23121643066406 0 23.75 0 C 25.26878356933594 0 26.5 1.231216907501221 26.5 2.75 C 26.5 4.268783092498779 25.26878356933594 5.5 23.75 5.5 L 23.75 5.5 Z"  /></Svg>
                            <Svg data-layer="ba50ac8e-6129-4233-ba3c-be6369d05f5b" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177_trace91e4c02e} preserveAspectRatio="none" viewBox="27.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 30.75 5 L 30.75 5 C 31.99264144897461 5 33 3.992640733718872 33 2.75 C 33 1.507359266281128 31.99264144897461 0.5 30.75 0.5 C 29.50735855102539 0.5 28.5 1.507359266281128 28.5 2.75 C 28.5 3.992640733718872 29.50735855102539 5 30.75 5 L 30.75 5 Z M 30.75 5.5 L 30.75 5.5 C 29.23121643066406 5.5 28 4.268783092498779 28 2.75 C 28 1.231216907501221 29.23121643066406 0 30.75 0 C 32.26878356933594 0 33.5 1.231216907501221 33.5 2.75 C 33.5 4.268783092498779 32.26878356933594 5.5 30.75 5.5 L 30.75 5.5 Z"  /></Svg>
                        </View>
                    </View>
                </View>
                <Svg data-layer="13b5d865-8bb8-46fa-ab31-ffea794ae484" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_ellipse8} preserveAspectRatio="none" viewBox="0 0 80 80" fill="rgba(87, 183, 157, 1)"><SvgPath d="M 40 0 C 62.09139251708984 0 80 17.90860939025879 80 40 C 80 62.09139251708984 62.09139251708984 80 40 80 C 17.90860939025879 80 0 62.09139251708984 0 40 C 0 17.90860939025879 17.90860939025879 0 40 0 Z"  /></Svg>
                <View data-layer="ce6486e0-fb7b-46a3-a9e6-c4e46500bbd3" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle59}></View>
                <View data-layer="dce5f044-b32e-42bb-b2df-fb2354c6427b" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle62}></View>
                <Text data-layer="29d57b20-be5b-47ed-958c-d947ec5a5fcd" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_username}>Username</Text>
                <Text data-layer="d16e9cb6-b784-44d5-83e5-c57b3acc766c" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_password}>Password</Text>
                <Text data-layer="06381bca-ce7c-49ce-8e2c-2c2f02f59cdb" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_forgotPassword}>Forgot password ?</Text>
                <Svg data-layer="7c166acd-01b3-4453-b930-dfe4342ff07f" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_soustraction8} preserveAspectRatio="none" viewBox="117.24994659423828 101.24967956542969 382.50030517578125 545.40625" fill="rgba(37, 77, 113, 1)"><SvgPath d="M 340.8363342285156 636.90576171875 C 331.7808227539062 636.90576171875 322.8635559082031 635.2451171875 314.3322143554688 631.9701538085938 L 117.9999465942383 556.6055908203125 L 117.9999465942383 101.9996795654297 L 493.0002136230469 101.9997406005859 L 493.0002136230469 154.2708129882812 L 493.0002136230469 373.0152893066406 L 409.9365539550781 589.4046020507812 C 407.1713562011719 596.6082153320312 403.3426208496094 603.2826538085938 398.5567321777344 609.2425537109375 C 393.9265441894531 615.0086669921875 388.458740234375 620.0380859375 382.3051452636719 624.1911010742188 C 376.2322082519531 628.2896728515625 369.6005554199219 631.4625854492188 362.5942687988281 633.6217041015625 C 355.5243530273438 635.8003540039062 348.2039489746094 636.9052734375 340.8363342285156 636.90576171875 Z"  /></Svg>
                <View data-layer="ae80340a-3903-41d3-a071-155f23eff664" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat}>
                    <View data-layer="321fc208-2ff4-4cc2-95c3-eee16df60b85" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_iconeDeBatterie}>
                        <Svg data-layer="ca9c1bc7-0dbe-4380-840d-a8b81586f036" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_iconeDeBatterie_tracee6d5e49c} preserveAspectRatio="none" viewBox="-0.75 -0.25 24 11.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1.502458333969116 1.026315808296204 L 1.502458333969116 1.026315808296204 C 0.9472132325172424 1.026315808296204 0.5 1.495540976524353 0.5 2.079011678695679 L 0.5 8.920988082885742 C 0.5 9.501893043518066 0.9490637183189392 9.973684310913086 1.502458333969116 9.973684310913086 L 20.9975414276123 9.973684310913086 C 21.55278587341309 9.973684310913086 22 9.504459381103516 22 8.920988082885742 L 22 2.079011678695679 C 22 1.498106837272644 21.55093574523926 1.026315808296204 20.9975414276123 1.026315808296204 L 1.502458333969116 1.026315808296204 Z M 1.502458333969116 0.5 L 1.502458333969116 0.5 L 20.9975414276123 0.5 C 21.82662010192871 0.5 22.5 1.206947565078735 22.5 2.079011678695679 L 22.5 8.920988082885742 C 22.5 9.796819686889648 21.82732582092285 10.5 20.9975414276123 10.5 L 1.502458333969116 10.5 C 0.6733803153038025 10.5 0 9.793052673339844 0 8.920988082885742 L 0 2.079011678695679 C 0 1.203180551528931 0.6726735234260559 0.5 1.502458333969116 0.5 L 1.502458333969116 0.5 Z"  /></Svg>
                        <View data-layer="4fd62985-1f80-4119-9e85-28a5d5a1132b" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_iconeDeBatterie_rectangle}></View>
                        <Svg data-layer="5fcbb205-523b-46f2-9cff-273ae34ab153" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_iconeDeBatterie_tracede806441} preserveAspectRatio="none" viewBox="22.25 3.25 3 4.96435546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 24.5 5.732277870178223 C 24.5 6.613896369934082 23.84807205200195 7.343249320983887 23 7.464555740356445 L 23 4 C 23.84807205200195 4.121306419372559 24.5 4.850659370422363 24.5 5.732277870178223 Z"  /></Svg>
                    </View>
                    <Text data-layer="ad667612-8016-4430-a149-6795283af526" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_pourcentageDeBatterie}>42%</Text>
                    <Svg data-layer="4dd2ac1e-7cae-4d68-8829-4fee7a54f179" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_iconeBluetooth} preserveAspectRatio="none" viewBox="301.25 2.75 9.05340576171875 14.5205078125" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 306.4277648925781 14.36894607543945 L 306.4277648925781 10.81073188781738 L 308.1397705078125 12.67517852783203 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 Z M 308.2183532714844 7.346535682678223 L 306.4277648925781 9.147821426391602 L 306.4277648925781 5.735214233398438 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 Z M 306.8578796386719 10.01085662841797 L 309.5148315429688 7.346535682678223 L 305.5505981445312 3.5 L 305.4569396972656 3.5 L 305.4569396972656 8.849857330322266 L 302.76611328125 6.028839111328125 L 302 6.829196453094482 L 305.2376403808594 10.01085662841797 L 302 13.19203567504883 L 302.76611328125 13.99239253997803 L 305.4569396972656 11.1713752746582 L 305.4569396972656 16.52075004577637 L 305.6282348632812 16.52075004577637 L 309.5534057617188 12.66457176208496 L 306.8578796386719 10.01085662841797 L 306.8578796386719 10.01085662841797 Z"  /></Svg>
                    <Text data-layer="4c02bd44-bfaa-4582-912f-4028d547d0b2" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_heure}>9:41</Text>
                    <View data-layer="b165df5f-28bc-4ebf-96d3-993cf339acdd" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal}>
                        <Svg data-layer="38779c4d-4250-497b-bfd4-4b334c0c3504" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDeSignalWiFi} preserveAspectRatio="none" viewBox="83.75 4.75 13.5 10.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 90.49575042724609 7.020876884460449 C 92.43552398681641 7.020876884460449 94.20336151123047 7.735452175140381 95.55885314941406 8.907177925109863 L 96.5 7.868109703063965 C 94.89459991455078 6.474465847015381 92.79788970947266 5.5 90.49575042724609 5.5 C 88.19711303710938 5.5 86.10340118408203 6.47150707244873 84.5 7.86071252822876 L 85.43914794921875 8.901260375976562 C 86.79364013671875 7.732986450195312 88.55847930908203 7.020876884460449 90.49575042724609 7.020876884460449 L 90.49575042724609 7.020876884460449 Z M 90.49575042724609 10.02021884918213 C 91.65831756591797 10.02021884918213 92.72042083740234 10.44235610961914 93.53961181640625 11.13769817352295 L 94.53524017333984 10.03797245025635 C 93.45164489746094 9.107890129089355 92.04217529296875 8.50032901763916 90.49575042724609 8.50032901763916 C 88.95233154296875 8.50032901763916 87.54386138916016 9.106410980224609 86.46126556396484 10.03353404998779 L 87.45539093017578 11.13473987579346 C 88.27408599853516 10.44087696075439 89.33468627929688 10.02021884918213 90.49575042724609 10.02021884918213 L 90.49575042724609 10.02021884918213 Z M 92.54347991943359 12.23742485046387 C 91.98918914794922 11.77731513977051 91.27545928955078 11.45873928070068 90.49525451660156 11.45873928070068 C 89.71654510498047 11.45873928070068 89.00381469726562 11.77682209014893 88.44951629638672 12.23495864868164 L 90.49525451660156 14.5 L 92.54347991943359 12.23742485046387 L 92.54347991943359 12.23742485046387 Z"  /></Svg>
                        <Text data-layer="a839de5e-74ba-430b-b6e9-f27c5ae9e97e" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_operateur}>Opérateur</Text>
                        <View data-layer="a24ce655-92ef-4053-bb65-4e1121b0179b" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal}>
                            <Svg data-layer="6b17e412-e98d-437a-a182-c2b07226aa27" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse43d70f5c} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="01e3b046-a8dd-4ed5-8cb2-237bc9286ff0" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipseed3fb3ab} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="7f079d83-9219-4f1c-b008-a869c709a502" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="0f652eb0-6397-4cab-aca1-f66c3ed66fd1" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace95a25da0} preserveAspectRatio="none" viewBox="20.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23.75 5 L 23.75 5 C 24.99264144897461 5 26 3.992640733718872 26 2.75 C 26 1.507359266281128 24.99264144897461 0.5 23.75 0.5 C 22.50735855102539 0.5 21.5 1.507359266281128 21.5 2.75 C 21.5 3.992640733718872 22.50735855102539 5 23.75 5 L 23.75 5 Z M 23.75 5.5 L 23.75 5.5 C 22.23121643066406 5.5 21 4.268783092498779 21 2.75 C 21 1.231216907501221 22.23121643066406 0 23.75 0 C 25.26878356933594 0 26.5 1.231216907501221 26.5 2.75 C 26.5 4.268783092498779 25.26878356933594 5.5 23.75 5.5 L 23.75 5.5 Z"  /></Svg>
                            <Svg data-layer="3158f9f9-3cc2-4bcd-bb0f-759c76d5f618" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace} preserveAspectRatio="none" viewBox="27.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 30.75 5 L 30.75 5 C 31.99264144897461 5 33 3.992640733718872 33 2.75 C 33 1.507359266281128 31.99264144897461 0.5 30.75 0.5 C 29.50735855102539 0.5 28.5 1.507359266281128 28.5 2.75 C 28.5 3.992640733718872 29.50735855102539 5 30.75 5 L 30.75 5 Z M 30.75 5.5 L 30.75 5.5 C 29.23121643066406 5.5 28 4.268783092498779 28 2.75 C 28 1.231216907501221 29.23121643066406 0 30.75 0 C 32.26878356933594 0 33.5 1.231216907501221 33.5 2.75 C 33.5 4.268783092498779 32.26878356933594 5.5 30.75 5.5 L 30.75 5.5 Z"  /></Svg>
                        </View>
                    </View>
                </View>
                <Text data-layer="86a92daa-9e58-4c01-9dd3-5c59b6ebbf84" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_temporaryPassword}>Temporary password</Text>
                <Text data-layer="5e36cb66-5799-4e24-a8d2-61ae13bb49f9" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_confirmPassword}>Confirm password</Text>
                <Text data-layer="8e43f8fe-b654-469f-a8a8-b1c8d8a2093e" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_newPassword}>New password</Text>
                <ReactImage data-layer="58732c3a-72bf-41da-a1e1-229b0e4cdfc0" source={require('./assets/logo.png')} style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo} />
                <View data-layer="c27cad5e-7022-4bc8-a390-5ebf74fb8e7d" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle95}></View>
                <View data-layer="1f5e9858-4630-4e0f-b396-170097c8e1df" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle99}></View>
                <View data-layer="00d0af29-27a9-4ef6-8f6f-fd13cfc07fa8" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle96}></View>
                <View data-layer="08b8b9f7-2814-4ef7-b90f-3b004d19889b" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle74}></View>
                <Svg data-layer="e1f92319-9807-4567-b41d-f3312fc5c368" style={styles.iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_iccheck24px} preserveAspectRatio="none" viewBox="3.4099998474121094 5.590000152587891 32.28131103515625 35.41796875" fill="rgba(37, 77, 113, 1)"><SvgPath d="M 13.66880416870117 33.53329086303711 L 6.015993595123291 22.51972579956055 L 3.409999847412109 26.24373626708984 L 13.66880416870117 41.00772476196289 L 35.69128799438477 9.314010620117188 L 33.10364532470703 5.590000152587891 L 13.66880416870117 33.53329086303711 Z"  /></Svg>
            </View>
        </ScrollView>
    </ScrollView>
    );
  }
}

IphoneXxs11Pro11.propTypes = {

}

IphoneXxs11Pro11.defaultProps = {

}


const styles = StyleSheet.create({
  "iphoneXxs11Pro11": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce": {
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
    "height": 732.13,
    "left": 0,
    "top": 6
  },
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_soustraction7": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_iconeDeBatterie4e7017fe": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_iconeDeBatterie4e7017fe_traced9e2c0ad": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_iconeDeBatterie4e7017fe_rectangle1667c705": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_iconeDeBatterie4e7017fe_trace1056fbad": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_pourcentageDeBatterie4e0e4f00": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_iconeBluetooth9c1cef08": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_heure176f348e": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDeSignalWiFi3322fbff": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_operateurf610599d": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177_ellipse3104a041": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177_ellipse4abaa8da": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177_ellipse73e88700": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177_tracebcd2d491": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat26e2e7dc_groupeDeSignalcdf12704_iconeDintensiteDuSignal7aca9177_trace91e4c02e": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_ellipse8": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle59": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle62": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_username": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_password": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_forgotPassword": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_soustraction8": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_iconeDeBatterie": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_iconeDeBatterie_tracee6d5e49c": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_iconeDeBatterie_rectangle": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_iconeDeBatterie_tracede806441": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_pourcentageDeBatterie": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_iconeBluetooth": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_heure": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDeSignalWiFi": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_operateur": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse43d70f5c": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipseed3fb3ab": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace95a25da0": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_temporaryPassword": {
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
    "top": 63
  },
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_confirmPassword": {
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
    "height": 20,
    "left": 67,
    "top": 210
  },
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_newPassword": {
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
    "top": 135
  },
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 169.84,
    "height": 53.9,
    "left": 121.57,
    "top": 678.23
  },
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo_trace8": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo_trace9": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo_trace10": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo_rectangle33": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo_groupe4": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo_groupe4_trace11": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo_groupe4_trace12": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo_groupe5": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo_groupe5_trace13": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_logo_groupe5_trace14": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle95": {
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
    "left": 61,
    "top": 164
  },
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle99": {
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
    "left": 61,
    "top": 89
  },
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle96": {
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
    "left": 61,
    "top": 237
  },
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_rectangle74": {
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
  "iphoneXxs11Pro11_grilleDeRepetition3_grilleDeRepetition34fe2f5e5fcce_iccheck24px": {
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