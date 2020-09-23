import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class IphoneXxs11Pro16 extends Component {

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
    <ScrollView data-layer="f59d233b-d8f3-4f3e-9191-92de4b7cf85d" style={styles.iphoneXxs11Pro16}>
        <Svg data-layer="fb7a9546-8466-4e1c-bdb4-fd733ebefb0c" style={styles.iphoneXxs11Pro16_soustraction1} preserveAspectRatio="none" viewBox="117.24994659423828 101.24967956542969 376.5002746582031 536.406005859375" fill="rgba(37, 77, 113, 1)"><SvgPath d="M 340.8363342285156 636.90576171875 C 331.7808227539062 636.90576171875 322.8635559082031 635.2451171875 314.3322143554688 631.9701538085938 L 117.9999465942383 556.6055908203125 L 117.9999465942383 101.9996795654297 L 493.0002136230469 101.9997406005859 L 493.0002136230469 154.2708129882812 L 493.0002136230469 373.0152893066406 L 409.9365539550781 589.4046020507812 C 407.1713562011719 596.6082153320312 403.3426208496094 603.2826538085938 398.5567321777344 609.2425537109375 C 393.9265441894531 615.0086669921875 388.458740234375 620.0380859375 382.3051452636719 624.1911010742188 C 376.2322082519531 628.2896728515625 369.6005554199219 631.4625854492188 362.5942687988281 633.6217041015625 C 355.5243530273438 635.8003540039062 348.2039489746094 636.9052734375 340.8363342285156 636.90576171875 Z"  /></Svg>
        <View data-layer="ffb49a8b-ec8f-4a2b-938d-52a6aefdfb30" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1}>
            <View data-layer="3035c7b3-e96f-4409-b732-510c4d460334" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_iconeDeBatterie0fc310cb}>
                <Svg data-layer="5fef2248-d670-4fb1-9d20-949900b5639e" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_iconeDeBatterie0fc310cb_tracefb73914f} preserveAspectRatio="none" viewBox="-0.75 -0.25 24 11.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1.502458333969116 1.026315808296204 L 1.502458333969116 1.026315808296204 C 0.9472132325172424 1.026315808296204 0.5 1.495540976524353 0.5 2.079011678695679 L 0.5 8.920988082885742 C 0.5 9.501893043518066 0.9490637183189392 9.973684310913086 1.502458333969116 9.973684310913086 L 20.9975414276123 9.973684310913086 C 21.55278587341309 9.973684310913086 22 9.504459381103516 22 8.920988082885742 L 22 2.079011678695679 C 22 1.498106837272644 21.55093574523926 1.026315808296204 20.9975414276123 1.026315808296204 L 1.502458333969116 1.026315808296204 Z M 1.502458333969116 0.5 L 1.502458333969116 0.5 L 20.9975414276123 0.5 C 21.82662010192871 0.5 22.5 1.206947565078735 22.5 2.079011678695679 L 22.5 8.920988082885742 C 22.5 9.796819686889648 21.82732582092285 10.5 20.9975414276123 10.5 L 1.502458333969116 10.5 C 0.6733803153038025 10.5 0 9.793052673339844 0 8.920988082885742 L 0 2.079011678695679 C 0 1.203180551528931 0.6726735234260559 0.5 1.502458333969116 0.5 L 1.502458333969116 0.5 Z"  /></Svg>
                <View data-layer="6ec4e4c1-379a-41f6-94f7-b85262aedfe8" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_iconeDeBatterie0fc310cb_rectangle00c73a58}></View>
                <Svg data-layer="a505af0a-3d17-4eaa-a62c-4a25e7dc7e4a" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_iconeDeBatterie0fc310cb_trace84de000a} preserveAspectRatio="none" viewBox="22.25 3.25 3 4.964599609375" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 24.5 5.732277870178223 C 24.5 6.613896369934082 23.84807205200195 7.343249320983887 23 7.464555740356445 L 23 4 C 23.84807205200195 4.121306419372559 24.5 4.850659370422363 24.5 5.732277870178223 Z"  /></Svg>
            </View>
            <Text data-layer="21330ca2-afcf-4917-a162-3bb574d75f22" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_pourcentageDeBatteriedca46b89}>42%</Text>
            <Svg data-layer="bb8856f6-b141-4c51-a53b-5f7401a61914" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_iconeBluetooth83ea3d41} preserveAspectRatio="none" viewBox="301.25 2.75 9.05340576171875 14.520751953125" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 306.4277648925781 14.36894607543945 L 306.4277648925781 10.81073188781738 L 308.1397705078125 12.67517852783203 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 Z M 308.2183532714844 7.346535682678223 L 306.4277648925781 9.147821426391602 L 306.4277648925781 5.735214233398438 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 Z M 306.8578796386719 10.01085662841797 L 309.5148315429688 7.346535682678223 L 305.5505981445312 3.5 L 305.4569396972656 3.5 L 305.4569396972656 8.849857330322266 L 302.76611328125 6.028839111328125 L 302 6.829196453094482 L 305.2376403808594 10.01085662841797 L 302 13.19203567504883 L 302.76611328125 13.99239253997803 L 305.4569396972656 11.1713752746582 L 305.4569396972656 16.52075004577637 L 305.6282348632812 16.52075004577637 L 309.5534057617188 12.66457176208496 L 306.8578796386719 10.01085662841797 L 306.8578796386719 10.01085662841797 Z"  /></Svg>
            <Text data-layer="f655bc16-e5c5-4ec0-9624-0fdcb3e78fc5" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_heure01c5d47d}>9:41</Text>
            <View data-layer="6d8bad44-cf80-4fc3-8950-ea22e4def4d4" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb}>
                <Svg data-layer="6dd3909c-3648-4809-a541-eb53fe5eedbb" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDeSignalWiFi2ad7e6e1} preserveAspectRatio="none" viewBox="83.75 4.75 13.5 10.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 90.49575042724609 7.020876884460449 C 92.43552398681641 7.020876884460449 94.20336151123047 7.735452175140381 95.55885314941406 8.907177925109863 L 96.5 7.868109703063965 C 94.89459991455078 6.474465847015381 92.79788970947266 5.5 90.49575042724609 5.5 C 88.19711303710938 5.5 86.10340118408203 6.47150707244873 84.5 7.86071252822876 L 85.43914794921875 8.901260375976562 C 86.79364013671875 7.732986450195312 88.55847930908203 7.020876884460449 90.49575042724609 7.020876884460449 L 90.49575042724609 7.020876884460449 Z M 90.49575042724609 10.02021884918213 C 91.65831756591797 10.02021884918213 92.72042083740234 10.44235610961914 93.53961181640625 11.13769817352295 L 94.53524017333984 10.03797245025635 C 93.45164489746094 9.107890129089355 92.04217529296875 8.50032901763916 90.49575042724609 8.50032901763916 C 88.95233154296875 8.50032901763916 87.54386138916016 9.106410980224609 86.46126556396484 10.03353404998779 L 87.45539093017578 11.13473987579346 C 88.27408599853516 10.44087696075439 89.33468627929688 10.02021884918213 90.49575042724609 10.02021884918213 L 90.49575042724609 10.02021884918213 Z M 92.54347991943359 12.23742485046387 C 91.98918914794922 11.77731513977051 91.27545928955078 11.45873928070068 90.49525451660156 11.45873928070068 C 89.71654510498047 11.45873928070068 89.00381469726562 11.77682209014893 88.44951629638672 12.23495864868164 L 90.49525451660156 14.5 L 92.54347991943359 12.23742485046387 L 92.54347991943359 12.23742485046387 Z"  /></Svg>
                <Text data-layer="1e261754-2a1b-4df3-b44e-fe3fa9eadcbf" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_operateurae22959d}>Opérateur</Text>
                <View data-layer="98fdd438-4db5-4f55-8d16-cff334162397" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d}>
                    <Svg data-layer="93cba3f2-f400-428a-a9f8-b6548fa0ea8a" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d_ellipse4cc85a57} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                    <Svg data-layer="1642693a-8318-4308-a453-dff8e8d2c427" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d_ellipsed432e5b5} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                    <Svg data-layer="8e7dc4fb-17c4-4367-a473-b19036c3b491" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d_ellipse741d39fb} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                    <Svg data-layer="40bdbb7f-de9d-42ff-95f3-369b27d12f4c" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d_trace692a40b9} preserveAspectRatio="none" viewBox="20.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23.75 5 L 23.75 5 C 24.99264144897461 5 26 3.992640733718872 26 2.75 C 26 1.507359266281128 24.99264144897461 0.5 23.75 0.5 C 22.50735855102539 0.5 21.5 1.507359266281128 21.5 2.75 C 21.5 3.992640733718872 22.50735855102539 5 23.75 5 L 23.75 5 Z M 23.75 5.5 L 23.75 5.5 C 22.23121643066406 5.5 21 4.268783092498779 21 2.75 C 21 1.231216907501221 22.23121643066406 0 23.75 0 C 25.26878356933594 0 26.5 1.231216907501221 26.5 2.75 C 26.5 4.268783092498779 25.26878356933594 5.5 23.75 5.5 L 23.75 5.5 Z"  /></Svg>
                    <Svg data-layer="c5bb7ba8-4650-4f0d-97ee-6a298ff2baaf" style={styles.iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d_traceb865be2d} preserveAspectRatio="none" viewBox="27.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 30.75 5 L 30.75 5 C 31.99264144897461 5 33 3.992640733718872 33 2.75 C 33 1.507359266281128 31.99264144897461 0.5 30.75 0.5 C 29.50735855102539 0.5 28.5 1.507359266281128 28.5 2.75 C 28.5 3.992640733718872 29.50735855102539 5 30.75 5 L 30.75 5 Z M 30.75 5.5 L 30.75 5.5 C 29.23121643066406 5.5 28 4.268783092498779 28 2.75 C 28 1.231216907501221 29.23121643066406 0 30.75 0 C 32.26878356933594 0 33.5 1.231216907501221 33.5 2.75 C 33.5 4.268783092498779 32.26878356933594 5.5 30.75 5.5 L 30.75 5.5 Z"  /></Svg>
                </View>
            </View>
        </View>
        <Svg data-layer="bc7bb18d-a24a-4e1e-b1ad-7fbe2089926e" style={styles.iphoneXxs11Pro16_ellipse1} preserveAspectRatio="none" viewBox="0 0 80 80" fill="rgba(87, 183, 157, 1)"><SvgPath d="M 40 0 C 62.09139251708984 0 80 17.90860939025879 80 40 C 80 62.09139251708984 62.09139251708984 80 40 80 C 17.90860939025879 80 0 62.09139251708984 0 40 C 0 17.90860939025879 17.90860939025879 0 40 0 Z"  /></Svg>
        <Text data-layer="054e9f5b-3f4f-4cb0-9501-9570e3b9f91f" style={styles.iphoneXxs11Pro16_signUp}>Sign Up</Text>
        <View data-layer="59f9c233-9a01-4909-bf81-85b23651289b" style={styles.iphoneXxs11Pro16_rectangle6}></View>
        <View data-layer="3c30c0b1-8237-4027-a90b-c30a74b1a963" style={styles.iphoneXxs11Pro16_rectangle7}></View>
        <Text data-layer="296c4440-c33c-468a-832b-04b9e9e32b73" style={styles.iphoneXxs11Pro16_username}>Username</Text>
        <Text data-layer="f5f318c0-02b9-4197-869e-c8a507ce7b96" style={styles.iphoneXxs11Pro16_password}>Password</Text>
        <Text data-layer="0af75455-e568-40e7-97db-df278681555d" style={styles.iphoneXxs11Pro16_forgotPassworda69bbd98}>Forgot password ?</Text>
        <Svg data-layer="d235794b-2bcf-48cf-9837-515f5b7aecb1" style={styles.iphoneXxs11Pro16_soustraction2} preserveAspectRatio="none" viewBox="117.24994659423828 101.24967956542969 382.5002746582031 545.406005859375" fill="rgba(37, 77, 113, 1)"><SvgPath d="M 340.8363342285156 636.90576171875 C 331.7808227539062 636.90576171875 322.8635559082031 635.2451171875 314.3322143554688 631.9701538085938 L 117.9999465942383 556.6055908203125 L 117.9999465942383 101.9996795654297 L 493.0002136230469 101.9997406005859 L 493.0002136230469 154.2708129882812 L 493.0002136230469 373.0152893066406 L 409.9365539550781 589.4046020507812 C 407.1713562011719 596.6082153320312 403.3426208496094 603.2826538085938 398.5567321777344 609.2425537109375 C 393.9265441894531 615.0086669921875 388.458740234375 620.0380859375 382.3051452636719 624.1911010742188 C 376.2322082519531 628.2896728515625 369.6005554199219 631.4625854492188 362.5942687988281 633.6217041015625 C 355.5243530273438 635.8003540039062 348.2039489746094 636.9052734375 340.8363342285156 636.90576171875 Z"  /></Svg>
        <View data-layer="cf939422-c6e8-478a-b246-3d1ac5c1b429" style={styles.iphoneXxs11Pro16_barreDetat}>
            <View data-layer="3079aad6-34e0-475b-93e2-955fd18b9163" style={styles.iphoneXxs11Pro16_barreDetat_iconeDeBatterie}>
                <Svg data-layer="f9fc9601-b3c8-4d6d-bcbe-ee4f5007b2cf" style={styles.iphoneXxs11Pro16_barreDetat_iconeDeBatterie_trace8900a367} preserveAspectRatio="none" viewBox="-0.75 -0.25 24 11.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1.502458333969116 1.026315808296204 L 1.502458333969116 1.026315808296204 C 0.9472132325172424 1.026315808296204 0.5 1.495540976524353 0.5 2.079011678695679 L 0.5 8.920988082885742 C 0.5 9.501893043518066 0.9490637183189392 9.973684310913086 1.502458333969116 9.973684310913086 L 20.9975414276123 9.973684310913086 C 21.55278587341309 9.973684310913086 22 9.504459381103516 22 8.920988082885742 L 22 2.079011678695679 C 22 1.498106837272644 21.55093574523926 1.026315808296204 20.9975414276123 1.026315808296204 L 1.502458333969116 1.026315808296204 Z M 1.502458333969116 0.5 L 1.502458333969116 0.5 L 20.9975414276123 0.5 C 21.82662010192871 0.5 22.5 1.206947565078735 22.5 2.079011678695679 L 22.5 8.920988082885742 C 22.5 9.796819686889648 21.82732582092285 10.5 20.9975414276123 10.5 L 1.502458333969116 10.5 C 0.6733803153038025 10.5 0 9.793052673339844 0 8.920988082885742 L 0 2.079011678695679 C 0 1.203180551528931 0.6726735234260559 0.5 1.502458333969116 0.5 L 1.502458333969116 0.5 Z"  /></Svg>
                <View data-layer="82457a11-e91b-4454-a62f-d3bc83288eca" style={styles.iphoneXxs11Pro16_barreDetat_iconeDeBatterie_rectangle}></View>
                <Svg data-layer="158b9932-5b52-4a2a-9dda-10d4955c402f" style={styles.iphoneXxs11Pro16_barreDetat_iconeDeBatterie_tracec0ba2186} preserveAspectRatio="none" viewBox="22.25 3.25 3 4.964599609375" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 24.5 5.732277870178223 C 24.5 6.613896369934082 23.84807205200195 7.343249320983887 23 7.464555740356445 L 23 4 C 23.84807205200195 4.121306419372559 24.5 4.850659370422363 24.5 5.732277870178223 Z"  /></Svg>
            </View>
            <Text data-layer="61c7a477-1c86-4945-baf9-14c354af01f8" style={styles.iphoneXxs11Pro16_barreDetat_pourcentageDeBatterie}>42%</Text>
            <Svg data-layer="8971771d-08ea-4aa5-b96c-0b797f584e77" style={styles.iphoneXxs11Pro16_barreDetat_iconeBluetooth} preserveAspectRatio="none" viewBox="301.25 2.75 9.05340576171875 14.520751953125" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 306.4277648925781 14.36894607543945 L 306.4277648925781 10.81073188781738 L 308.1397705078125 12.67517852783203 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 Z M 308.2183532714844 7.346535682678223 L 306.4277648925781 9.147821426391602 L 306.4277648925781 5.735214233398438 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 Z M 306.8578796386719 10.01085662841797 L 309.5148315429688 7.346535682678223 L 305.5505981445312 3.5 L 305.4569396972656 3.5 L 305.4569396972656 8.849857330322266 L 302.76611328125 6.028839111328125 L 302 6.829196453094482 L 305.2376403808594 10.01085662841797 L 302 13.19203567504883 L 302.76611328125 13.99239253997803 L 305.4569396972656 11.1713752746582 L 305.4569396972656 16.52075004577637 L 305.6282348632812 16.52075004577637 L 309.5534057617188 12.66457176208496 L 306.8578796386719 10.01085662841797 L 306.8578796386719 10.01085662841797 Z"  /></Svg>
            <Text data-layer="1c2c9b9d-279c-4878-862b-f02fba301897" style={styles.iphoneXxs11Pro16_barreDetat_heure}>9:41</Text>
            <View data-layer="8306deed-8a42-4785-b305-8848e7596087" style={styles.iphoneXxs11Pro16_barreDetat_groupeDeSignal}>
                <Svg data-layer="ff6476ee-cf23-4c66-be33-3bcac32b50c1" style={styles.iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDeSignalWiFi} preserveAspectRatio="none" viewBox="83.75 4.75 13.5 10.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 90.49575042724609 7.020876884460449 C 92.43552398681641 7.020876884460449 94.20336151123047 7.735452175140381 95.55885314941406 8.907177925109863 L 96.5 7.868109703063965 C 94.89459991455078 6.474465847015381 92.79788970947266 5.5 90.49575042724609 5.5 C 88.19711303710938 5.5 86.10340118408203 6.47150707244873 84.5 7.86071252822876 L 85.43914794921875 8.901260375976562 C 86.79364013671875 7.732986450195312 88.55847930908203 7.020876884460449 90.49575042724609 7.020876884460449 L 90.49575042724609 7.020876884460449 Z M 90.49575042724609 10.02021884918213 C 91.65831756591797 10.02021884918213 92.72042083740234 10.44235610961914 93.53961181640625 11.13769817352295 L 94.53524017333984 10.03797245025635 C 93.45164489746094 9.107890129089355 92.04217529296875 8.50032901763916 90.49575042724609 8.50032901763916 C 88.95233154296875 8.50032901763916 87.54386138916016 9.106410980224609 86.46126556396484 10.03353404998779 L 87.45539093017578 11.13473987579346 C 88.27408599853516 10.44087696075439 89.33468627929688 10.02021884918213 90.49575042724609 10.02021884918213 L 90.49575042724609 10.02021884918213 Z M 92.54347991943359 12.23742485046387 C 91.98918914794922 11.77731513977051 91.27545928955078 11.45873928070068 90.49525451660156 11.45873928070068 C 89.71654510498047 11.45873928070068 89.00381469726562 11.77682209014893 88.44951629638672 12.23495864868164 L 90.49525451660156 14.5 L 92.54347991943359 12.23742485046387 L 92.54347991943359 12.23742485046387 Z"  /></Svg>
                <Text data-layer="3524f6b2-f41b-49d8-bd3d-6777fa0b8b34" style={styles.iphoneXxs11Pro16_barreDetat_groupeDeSignal_operateur}>Opérateur</Text>
                <View data-layer="ea723a6d-c1a2-4f13-9799-d2621811e271" style={styles.iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal}>
                    <Svg data-layer="33866737-7afb-412b-9cb4-25b28522c757" style={styles.iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse26d9252f} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                    <Svg data-layer="18db62f9-4675-4bf9-bfc3-263fddd38472" style={styles.iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse5750699e} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                    <Svg data-layer="a66e91e5-28c7-41fa-9208-6b45dc0aebb5" style={styles.iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                    <Svg data-layer="c0d67f13-2c5a-49ff-9a7f-5ca9b66bda1f" style={styles.iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace1aa80541} preserveAspectRatio="none" viewBox="20.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23.75 5 L 23.75 5 C 24.99264144897461 5 26 3.992640733718872 26 2.75 C 26 1.507359266281128 24.99264144897461 0.5 23.75 0.5 C 22.50735855102539 0.5 21.5 1.507359266281128 21.5 2.75 C 21.5 3.992640733718872 22.50735855102539 5 23.75 5 L 23.75 5 Z M 23.75 5.5 L 23.75 5.5 C 22.23121643066406 5.5 21 4.268783092498779 21 2.75 C 21 1.231216907501221 22.23121643066406 0 23.75 0 C 25.26878356933594 0 26.5 1.231216907501221 26.5 2.75 C 26.5 4.268783092498779 25.26878356933594 5.5 23.75 5.5 L 23.75 5.5 Z"  /></Svg>
                    <Svg data-layer="f9947384-fea3-4b02-871b-d035e657d13a" style={styles.iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace} preserveAspectRatio="none" viewBox="27.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 30.75 5 L 30.75 5 C 31.99264144897461 5 33 3.992640733718872 33 2.75 C 33 1.507359266281128 31.99264144897461 0.5 30.75 0.5 C 29.50735855102539 0.5 28.5 1.507359266281128 28.5 2.75 C 28.5 3.992640733718872 29.50735855102539 5 30.75 5 L 30.75 5 Z M 30.75 5.5 L 30.75 5.5 C 29.23121643066406 5.5 28 4.268783092498779 28 2.75 C 28 1.231216907501221 29.23121643066406 0 30.75 0 C 32.26878356933594 0 33.5 1.231216907501221 33.5 2.75 C 33.5 4.268783092498779 32.26878356933594 5.5 30.75 5.5 L 30.75 5.5 Z"  /></Svg>
                </View>
            </View>
        </View>
        <View data-layer="76fefad2-7928-48d1-94e0-de341d45a7c5" style={styles.iphoneXxs11Pro16_rectangle13}></View>
        <View data-layer="a21dda65-9ad6-4d37-9e00-a3b6729c0ca8" style={styles.iphoneXxs11Pro16_rectangle88}></View>
        <Text data-layer="7139a210-9364-4a12-9a52-379feaf1aa06" style={styles.iphoneXxs11Pro16_entrerEmail}>Entrer email</Text>
        <Text data-layer="547fb77d-725c-4d5e-a109-2d90e81ac42c" style={styles.iphoneXxs11Pro16_enterPassword}>Enter password</Text>
        <View data-layer="c87f9005-f8bb-43b6-bdcc-1269ed7f3064" style={styles.iphoneXxs11Pro16_rectangle43}></View>
        <Text data-layer="0170e4b5-51fe-4c72-9740-152bcc67298d" style={styles.iphoneXxs11Pro16_forgotPassword}>Forgot password</Text>
        <ReactImage data-layer="8482f015-d210-49a5-9a38-5bc6bd5d802d" source={require('./assets/logo.png')} style={styles.iphoneXxs11Pro16_logo} />
        <View data-layer="5b02caaf-fad5-4cd3-b07d-c04ae20f4545" style={styles.iphoneXxs11Pro16_rectangle74}></View>
        <Svg data-layer="1bc27e1d-774a-4c0e-bdfc-5176f501cee6" style={styles.iphoneXxs11Pro16_iccheck24px} preserveAspectRatio="none" viewBox="3.4099998474121094 5.590000152587891 32.281280517578125 35.417724609375" fill="rgba(37, 77, 113, 1)"><SvgPath d="M 13.66880416870117 33.53329086303711 L 6.015993595123291 22.51972579956055 L 3.409999847412109 26.24373626708984 L 13.66880416870117 41.00772476196289 L 35.69128799438477 9.314010620117188 L 33.10364532470703 5.590000152587891 L 13.66880416870117 33.53329086303711 Z"  /></Svg>
    </ScrollView>
    );
  }
}

IphoneXxs11Pro16.propTypes = {

}

IphoneXxs11Pro16.defaultProps = {

}


const styles = StyleSheet.create({
  "iphoneXxs11Pro16": {
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
  "iphoneXxs11Pro16_soustraction1": {
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
    "left": 0,
    "top": 0
  },
  "iphoneXxs11Pro16_barreDetatd2c628e1": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_iconeDeBatterie0fc310cb": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_iconeDeBatterie0fc310cb_tracefb73914f": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_iconeDeBatterie0fc310cb_rectangle00c73a58": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_iconeDeBatterie0fc310cb_trace84de000a": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_pourcentageDeBatteriedca46b89": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_iconeBluetooth83ea3d41": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_heure01c5d47d": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDeSignalWiFi2ad7e6e1": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_operateurae22959d": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d_ellipse4cc85a57": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d_ellipsed432e5b5": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d_ellipse741d39fb": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d_trace692a40b9": {
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
  "iphoneXxs11Pro16_barreDetatd2c628e1_groupeDeSignal06f5feeb_iconeDintensiteDuSignal269d433d_traceb865be2d": {
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
  "iphoneXxs11Pro16_ellipse1": {
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
    "left": 187,
    "top": 441
  },
  "iphoneXxs11Pro16_signUp": {
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
    "left": 117,
    "top": 469
  },
  "iphoneXxs11Pro16_rectangle6": {
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
    "left": 38,
    "top": 145
  },
  "iphoneXxs11Pro16_rectangle7": {
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
    "left": 38,
    "top": 243
  },
  "iphoneXxs11Pro16_username": {
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
    "left": -23,
    "top": 115
  },
  "iphoneXxs11Pro16_password": {
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
    "left": -23,
    "top": 215
  },
  "iphoneXxs11Pro16_forgotPassworda69bbd98": {
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
    "left": 148,
    "top": 290
  },
  "iphoneXxs11Pro16_soustraction2": {
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
  },
  "iphoneXxs11Pro16_barreDetat": {
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
  "iphoneXxs11Pro16_barreDetat_iconeDeBatterie": {
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
  "iphoneXxs11Pro16_barreDetat_iconeDeBatterie_trace8900a367": {
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
  "iphoneXxs11Pro16_barreDetat_iconeDeBatterie_rectangle": {
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
  "iphoneXxs11Pro16_barreDetat_iconeDeBatterie_tracec0ba2186": {
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
  "iphoneXxs11Pro16_barreDetat_pourcentageDeBatterie": {
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
  "iphoneXxs11Pro16_barreDetat_iconeBluetooth": {
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
  "iphoneXxs11Pro16_barreDetat_heure": {
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
  "iphoneXxs11Pro16_barreDetat_groupeDeSignal": {
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
  "iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDeSignalWiFi": {
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
  "iphoneXxs11Pro16_barreDetat_groupeDeSignal_operateur": {
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
  "iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal": {
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
  "iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse26d9252f": {
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
  "iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse5750699e": {
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
  "iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse": {
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
  "iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace1aa80541": {
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
  "iphoneXxs11Pro16_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace": {
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
  "iphoneXxs11Pro16_rectangle13": {
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
    "borderTopLeftRadius": 19,
    "borderTopRightRadius": 19,
    "borderBottomLeftRadius": 19,
    "borderBottomRightRadius": 19,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 300,
    "height": 38,
    "left": 38,
    "top": 148
  },
  "iphoneXxs11Pro16_rectangle88": {
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
    "borderTopLeftRadius": 19,
    "borderTopRightRadius": 19,
    "borderBottomLeftRadius": 19,
    "borderBottomRightRadius": 19,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 300,
    "height": 38,
    "left": 38,
    "top": 220
  },
  "iphoneXxs11Pro16_entrerEmail": {
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
    "left": 38,
    "top": 121
  },
  "iphoneXxs11Pro16_enterPassword": {
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
    "left": 38,
    "top": 194
  },
  "iphoneXxs11Pro16_rectangle43": {
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
    "borderTopLeftRadius": 26,
    "borderTopRightRadius": 26,
    "borderBottomLeftRadius": 26,
    "borderBottomRightRadius": 26,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.23529411764705882,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 191,
    "height": 32,
    "left": 38,
    "top": 288
  },
  "iphoneXxs11Pro16_forgotPassword": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(37, 77, 113, 1)",
    "fontSize": 16,
    "fontWeight": "700",
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
    "width": 128,
    "height": 19,
    "left": 71,
    "top": 294
  },
  "iphoneXxs11Pro16_logo": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 169.84,
    "height": 53.9,
    "left": 98.57,
    "top": 678.23
  },
  "iphoneXxs11Pro16_logo_trace8": {
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
  "iphoneXxs11Pro16_logo_trace9": {
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
  "iphoneXxs11Pro16_logo_trace10": {
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
  "iphoneXxs11Pro16_logo_rectangle33": {
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
  "iphoneXxs11Pro16_logo_groupe4": {
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
  "iphoneXxs11Pro16_logo_groupe4_trace11": {
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
  "iphoneXxs11Pro16_logo_groupe4_trace12": {
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
  "iphoneXxs11Pro16_logo_groupe5": {
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
  "iphoneXxs11Pro16_logo_groupe5_trace13": {
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
  "iphoneXxs11Pro16_logo_groupe5_trace14": {
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
  "iphoneXxs11Pro16_rectangle74": {
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
    "left": 257,
    "top": 427
  },
  "iphoneXxs11Pro16_iccheck24px": {
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
    "left": 278,
    "top": 445.99
  }
});