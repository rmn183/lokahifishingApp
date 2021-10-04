
import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet , View } from 'react-native';

import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../assets';
import { Header } from '../../../components/common/Header';
import { strings } from '../../../localization';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';




const EmergencyContacts = () => {
  return (
    <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
      </ImageBackground>
  );
};

// const LCR = () => {
//   return (
//     <ImageBackground source={icons.ic_signin_bg} style={styles.image}>
//       </ImageBackground>
   
//   );
// };


const styles = StyleSheet.create({
  content: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  },
  pdf: {
   
    width: '100%',
    height:layout.size.height/2.5
  },
  
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      height: '100%',
    },
    contentcontainer: {
       height:layout.size.height /2.5,
      // marginTop: layout.size.height / 4,
      // backgroundColor:'#000'
    },
});

export default EmergencyContacts;
