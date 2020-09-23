import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class IphoneXxs11Pro20 extends Component {

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
    <ScrollView data-layer="2d142366-8619-4115-91cd-9a86d60b84f7" style={styles.iphoneXxs11Pro20}>
        <ScrollView data-layer="f4b6d754-2a6d-4a9a-8c34-ac657376e398" style={styles.iphoneXxs11Pro20_grilleDeRepetition1}>
            <View data-layer="5485f3d4-e577-455d-9efd-ec50e4e21a7c" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39}>
                <Text data-layer="b22c2f9d-252b-432a-b764-6d2eb19671f0" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_x0Completed}>0% completed</Text>
                <Svg data-layer="7d8dfcb1-8ff6-4e15-bdaa-d0073fa31781" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_soustraction9} preserveAspectRatio="none" viewBox="8.178710686479462e-7 6.83593725625542e-7 127.999755859375 56" fill="rgba(254, 180, 169, 1)"><SvgPath d="M 63 55.99990081787109 L 63 55.9989013671875 L 9.000000953674316 55.9989013671875 C 4.037384033203125 55.9989013671875 8.178710686479462e-07 51.96151733398438 8.178710686479462e-07 46.9989013671875 L 8.178710686479462e-07 9.000000953674316 C 8.178710686479462e-07 4.037384033203125 4.037384033203125 6.83593725625542e-07 9.000000953674316 6.83593725625542e-07 L 63 6.83593725625542e-07 L 63 55.9989013671875 L 63 55.99990081787109 Z M 118.9998016357422 55.9989013671875 L 65.99970245361328 55.9989013671875 L 65.99970245361328 6.83593725625542e-07 L 118.9998016357422 6.83593725625542e-07 C 123.9624176025391 6.83593725625542e-07 127.9998016357422 4.037384033203125 127.9998016357422 9.000000953674316 L 127.9998016357422 46.9989013671875 C 127.9998016357422 51.96151733398438 123.9624176025391 55.9989013671875 118.9998016357422 55.9989013671875 Z"  /></Svg>
                <Svg data-layer="ddaca67b-1232-497e-8185-9b10939bf5e9" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_fermer} preserveAspectRatio="none" viewBox="63.94999694824219 64.19999694824219 27.75 27.76416015625" fill="rgba(178, 178, 178, 1)"><SvgPath d="M 91.3856201171875 87.53455352783203 L 81.90437316894531 78.01717376708984 L 91.40730285644531 68.62264251708984 C 91.79753112792969 68.23241424560547 91.79753112792969 67.59648132324219 91.40730285644531 67.20624542236328 L 88.70457458496094 64.48905944824219 C 88.51667785644531 64.30116271972656 88.26374816894531 64.19999694824219 87.99636840820312 64.19999694824219 C 87.72898864746094 64.19999694824219 87.47605133056641 64.30839538574219 87.28816223144531 64.48905944824219 L 77.82859802246094 73.85467529296875 L 68.35458374023438 64.49628448486328 C 68.16669464111328 64.30839538574219 67.91377258300781 64.20722198486328 67.64639282226562 64.20722198486328 C 67.37900543212891 64.20722198486328 67.12607574462891 64.31562042236328 66.93818664550781 64.49628448486328 L 64.24267578125 67.21347808837891 C 63.85243988037109 67.60369873046875 63.85243988037109 68.23963928222656 64.24267578125 68.62987518310547 L 73.74559783935547 78.02439880371094 L 64.27158355712891 87.53455352783203 C 64.08369445800781 87.72244262695312 63.97529220581055 87.97537994384766 63.97529220581055 88.24275207519531 C 63.97529220581055 88.5101318359375 64.07646942138672 88.7630615234375 64.27158355712891 88.95095062255859 L 66.97431945800781 91.66814422607422 C 67.16942596435547 91.86326599121094 67.42236328125 91.96442413330078 67.68251800537109 91.96442413330078 C 67.93544769287109 91.96442413330078 68.19560241699219 91.87049102783203 68.39072418212891 91.66814422607422 L 77.82859802246094 82.18689727783203 L 87.27370452880859 91.66091156005859 C 87.46882629394531 91.85603332519531 87.72176361083984 91.95719909667969 87.98191070556641 91.95719909667969 C 88.23484039306641 91.95719909667969 88.49500274658203 91.86326599121094 88.69010925292969 91.66091156005859 L 91.39284515380859 88.9437255859375 C 91.58073425292969 88.75583648681641 91.68913269042969 88.50290679931641 91.68913269042969 88.23551940917969 C 91.68190765380859 87.97537994384766 91.57350921630859 87.72244262695312 91.3856201171875 87.53455352783203 Z"  /></Svg>
                <View data-layer="59b26f0e-53f6-489c-9cec-7a7d3bf1ccf2" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_rectangle68}></View>
                <View data-layer="829bab1a-3c6b-4f54-a113-ea9bf70cbebd" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat}>
                    <View data-layer="97d555cc-b409-4c3e-b14f-45f09070aa6e" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_iconeDeBatterie}>
                        <Svg data-layer="7227d737-c23b-4de0-b048-b377ddcc2b78" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_iconeDeBatterie_traceb846514e} preserveAspectRatio="none" viewBox="-0.75 -0.25 24 11.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1.502458333969116 1.026315808296204 L 1.502458333969116 1.026315808296204 C 0.9472132325172424 1.026315808296204 0.5 1.495540976524353 0.5 2.079011678695679 L 0.5 8.920988082885742 C 0.5 9.501893043518066 0.9490637183189392 9.973684310913086 1.502458333969116 9.973684310913086 L 20.9975414276123 9.973684310913086 C 21.55278587341309 9.973684310913086 22 9.504459381103516 22 8.920988082885742 L 22 2.079011678695679 C 22 1.498106837272644 21.55093574523926 1.026315808296204 20.9975414276123 1.026315808296204 L 1.502458333969116 1.026315808296204 Z M 1.502458333969116 0.5 L 1.502458333969116 0.5 L 20.9975414276123 0.5 C 21.82662010192871 0.5 22.5 1.206947565078735 22.5 2.079011678695679 L 22.5 8.920988082885742 C 22.5 9.796819686889648 21.82732582092285 10.5 20.9975414276123 10.5 L 1.502458333969116 10.5 C 0.6733803153038025 10.5 0 9.793052673339844 0 8.920988082885742 L 0 2.079011678695679 C 0 1.203180551528931 0.6726735234260559 0.5 1.502458333969116 0.5 L 1.502458333969116 0.5 Z"  /></Svg>
                        <View data-layer="aff52f52-2d52-4b7b-9eaf-deeb1c34b480" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_iconeDeBatterie_rectangle}></View>
                        <Svg data-layer="109bccf8-5060-4df6-8f73-33b948990cc7" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_iconeDeBatterie_trace0c30ba40} preserveAspectRatio="none" viewBox="22.25 3.25 3 4.96435546875" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 24.5 5.732277870178223 C 24.5 6.613896369934082 23.84807205200195 7.343249320983887 23 7.464555740356445 L 23 4 C 23.84807205200195 4.121306419372559 24.5 4.850659370422363 24.5 5.732277870178223 Z"  /></Svg>
                    </View>
                    <Text data-layer="531cc090-0c75-401a-aa4a-6a0946d64da1" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_pourcentageDeBatterie}>42%</Text>
                    <Svg data-layer="6fa4fa9e-1d41-4e91-badf-3ccb362f1b14" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_iconeBluetooth} preserveAspectRatio="none" viewBox="301.25 2.75 9.053466796875 14.5205078125" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 306.4277648925781 14.36894607543945 L 306.4277648925781 10.81073188781738 L 308.1397705078125 12.67517852783203 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 L 306.4277648925781 14.36894607543945 Z M 308.2183532714844 7.346535682678223 L 306.4277648925781 9.147821426391602 L 306.4277648925781 5.735214233398438 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 L 308.2183532714844 7.346535682678223 Z M 306.8578796386719 10.01085662841797 L 309.5148315429688 7.346535682678223 L 305.5505981445312 3.5 L 305.4569396972656 3.5 L 305.4569396972656 8.849857330322266 L 302.76611328125 6.028839111328125 L 302 6.829196453094482 L 305.2376403808594 10.01085662841797 L 302 13.19203567504883 L 302.76611328125 13.99239253997803 L 305.4569396972656 11.1713752746582 L 305.4569396972656 16.52075004577637 L 305.6282348632812 16.52075004577637 L 309.5534057617188 12.66457176208496 L 306.8578796386719 10.01085662841797 L 306.8578796386719 10.01085662841797 Z"  /></Svg>
                    <Text data-layer="099e5151-078f-45ba-8898-6f4caa987bf7" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_heure}>9:41</Text>
                    <View data-layer="2f5477bb-b48d-471a-b3e3-546e65a0f9a9" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal}>
                        <Svg data-layer="326a445c-08a9-43e4-83c4-be3d920b67ca" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDeSignalWiFi} preserveAspectRatio="none" viewBox="83.75 4.75 13.5 10.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 90.49575042724609 7.020876884460449 C 92.43552398681641 7.020876884460449 94.20336151123047 7.735452175140381 95.55885314941406 8.907177925109863 L 96.5 7.868109703063965 C 94.89459991455078 6.474465847015381 92.79788970947266 5.5 90.49575042724609 5.5 C 88.19711303710938 5.5 86.10340118408203 6.47150707244873 84.5 7.86071252822876 L 85.43914794921875 8.901260375976562 C 86.79364013671875 7.732986450195312 88.55847930908203 7.020876884460449 90.49575042724609 7.020876884460449 L 90.49575042724609 7.020876884460449 Z M 90.49575042724609 10.02021884918213 C 91.65831756591797 10.02021884918213 92.72042083740234 10.44235610961914 93.53961181640625 11.13769817352295 L 94.53524017333984 10.03797245025635 C 93.45164489746094 9.107890129089355 92.04217529296875 8.50032901763916 90.49575042724609 8.50032901763916 C 88.95233154296875 8.50032901763916 87.54386138916016 9.106410980224609 86.46126556396484 10.03353404998779 L 87.45539093017578 11.13473987579346 C 88.27408599853516 10.44087696075439 89.33468627929688 10.02021884918213 90.49575042724609 10.02021884918213 L 90.49575042724609 10.02021884918213 Z M 92.54347991943359 12.23742485046387 C 91.98918914794922 11.77731513977051 91.27545928955078 11.45873928070068 90.49525451660156 11.45873928070068 C 89.71654510498047 11.45873928070068 89.00381469726562 11.77682209014893 88.44951629638672 12.23495864868164 L 90.49525451660156 14.5 L 92.54347991943359 12.23742485046387 L 92.54347991943359 12.23742485046387 Z"  /></Svg>
                        <Text data-layer="ff91104f-a7be-475d-99da-d42e1234b1aa" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_operateur}>Opérateur</Text>
                        <View data-layer="1585bcef-1156-4b40-a2e0-8564e0221cf4" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal}>
                            <Svg data-layer="e922913a-1987-4274-bb0e-9f9773bccb45" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipsea2ce8e39} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="22820c28-bf9e-437a-bb3e-704bbf3fa051" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipsedbf9611a} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="384d49e5-db31-4811-aba5-fddf0df08ada" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse} preserveAspectRatio="none" viewBox="-0.75 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 2.75 0 C 4.268783092498779 0 5.5 1.23121702671051 5.5 2.75 C 5.5 4.268783092498779 4.268783092498779 5.5 2.75 5.5 C 1.23121702671051 5.5 0 4.268783092498779 0 2.75 C 0 1.23121702671051 1.23121702671051 0 2.75 0 Z"  /></Svg>
                            <Svg data-layer="0c28c3a9-82c2-4534-ba4d-12cf2e8f4ca2" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_tracec6ba7a77} preserveAspectRatio="none" viewBox="20.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23.75 5 L 23.75 5 C 24.99264144897461 5 26 3.992640733718872 26 2.75 C 26 1.507359266281128 24.99264144897461 0.5 23.75 0.5 C 22.50735855102539 0.5 21.5 1.507359266281128 21.5 2.75 C 21.5 3.992640733718872 22.50735855102539 5 23.75 5 L 23.75 5 Z M 23.75 5.5 L 23.75 5.5 C 22.23121643066406 5.5 21 4.268783092498779 21 2.75 C 21 1.231216907501221 22.23121643066406 0 23.75 0 C 25.26878356933594 0 26.5 1.231216907501221 26.5 2.75 C 26.5 4.268783092498779 25.26878356933594 5.5 23.75 5.5 L 23.75 5.5 Z"  /></Svg>
                            <Svg data-layer="533179b5-1efe-45da-81d5-159462e542d9" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace} preserveAspectRatio="none" viewBox="27.25 -0.75 7 7" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 30.75 5 L 30.75 5 C 31.99264144897461 5 33 3.992640733718872 33 2.75 C 33 1.507359266281128 31.99264144897461 0.5 30.75 0.5 C 29.50735855102539 0.5 28.5 1.507359266281128 28.5 2.75 C 28.5 3.992640733718872 29.50735855102539 5 30.75 5 L 30.75 5 Z M 30.75 5.5 L 30.75 5.5 C 29.23121643066406 5.5 28 4.268783092498779 28 2.75 C 28 1.231216907501221 29.23121643066406 0 30.75 0 C 32.26878356933594 0 33.5 1.231216907501221 33.5 2.75 C 33.5 4.268783092498779 32.26878356933594 5.5 30.75 5.5 L 30.75 5.5 Z"  /></Svg>
                        </View>
                    </View>
                </View>
                <View data-layer="52cf0e2b-425a-4ffb-a174-da05969e3402" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_rectangle69}></View>
                <View data-layer="7bed8f47-2af6-46dc-ab1f-c240c4c13acc" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_rectangle70}></View>
                <ReactImage data-layer="13659e1e-6588-4ba1-ba85-10b00f41bde0" source={require('./assets/userPngIconMaleUserIcon512.png')} style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_userPngIconMaleUserIcon512} />
                <View data-layer="b7501731-9b87-4ebe-806e-c1cbf63b6831" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_rectangle73}></View>
                <View style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_xaa31e8ab}><Text data-layer="43e01751-7f8d-459a-a324-ef3051145086" style={{"marginTop":-11.5,"color":"rgba(255, 255, 255, 1)","fontSize":35,"fontWeight":"700","fontStyle":"normal","fontFamily":"Helvetica Neue","textAlign":"center","lineHeight":38.5}}>+</Text></View>
                <Svg data-layer="a2669b5d-0923-4107-8838-fb22fdcef6c3" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_icexpandmore24pxadb902c6} preserveAspectRatio="none" viewBox="6 8.59000015258789 23.86328125 14.73583984375" fill="rgba(37, 77, 113, 1)"><SvgPath d="M 27.05934524536133 8.590000152587891 L 17.931640625 17.69781875610352 L 8.803936004638672 8.590000152587891 L 6 11.39393615722656 L 17.931640625 23.32557678222656 L 29.86328125 11.39393615722656 L 27.05934524536133 8.590000152587891 Z"  /></Svg>
                <Svg data-layer="b5607817-ef90-490e-8f94-6f2d20947307" style={styles.iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_icexpandmore24px} preserveAspectRatio="none" viewBox="0 0 23.86328125 14.7353515625" fill="rgba(37, 77, 113, 1)"><SvgPath d="M 21.05934524536133 0 L 11.931640625 9.107818603515625 L 2.803936004638672 0 L 0 2.803936004638672 L 11.931640625 14.73557662963867 L 23.86328125 2.803936004638672 L 21.05934524536133 0 Z"  /></Svg>
            </View>
        </ScrollView>
    </ScrollView>
    );
  }
}

IphoneXxs11Pro20.propTypes = {

}

IphoneXxs11Pro20.defaultProps = {

}


const styles = StyleSheet.create({
  "iphoneXxs11Pro20": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1": {
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
    "height": 744,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_x0Completed": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(37, 77, 113, 1)",
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
    "width": 134,
    "height": 24,
    "left": 48,
    "top": 686
  },
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_soustraction9": {
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
    "shadowOpacity": 0.29411764705882354,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 128,
    "height": 56,
    "left": 210,
    "top": 676
  },
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_fermer": {
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
    "width": 27.75,
    "height": 27.76,
    "left": 338,
    "top": 40.43
  },
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_rectangle68": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_iconeDeBatterie": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_iconeDeBatterie_traceb846514e": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_iconeDeBatterie_rectangle": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_iconeDeBatterie_trace0c30ba40": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_pourcentageDeBatterie": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_iconeBluetooth": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_heure": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDeSignalWiFi": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_operateur": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipsea2ce8e39": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipsedbf9611a": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_ellipse": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_tracec6ba7a77": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_barreDetat_groupeDeSignal_iconeDintensiteDuSignal_trace": {
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
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_rectangle69": {
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
    "width": 136,
    "height": 7,
    "left": 47,
    "top": 711
  },
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_rectangle70": {
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
    "width": 16,
    "height": 7,
    "left": 47,
    "top": 711
  },
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_userPngIconMaleUserIcon512": {
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
    "width": 145,
    "height": 145,
    "left": 115,
    "top": 163
  },
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_rectangle73": {
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
    "borderTopLeftRadius": 6,
    "borderTopRightRadius": 6,
    "borderBottomLeftRadius": 6,
    "borderBottomRightRadius": 6,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.23137254901960785,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 46,
    "height": 46,
    "left": 118,
    "top": 268
  },
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_xaa31e8ab": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 35,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "lineHeight": 38.5,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 21,
    "height": 42,
    "left": 131,
    "top": 280
  },
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_icexpandmore24pxadb902c6": {
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
    "width": 23.86,
    "height": 14.74,
    "left": 294,
    "top": 696.27
  },
  "iphoneXxs11Pro20_grilleDeRepetition1_grilleDeRepetition151c4df181f39_icexpandmore24px": {
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
    "width": 23.86,
    "height": 14.74,
    "left": 229,
    "top": 696.28
  }
});