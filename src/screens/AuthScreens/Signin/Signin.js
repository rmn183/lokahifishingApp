//import liraries
import React, {useRef, useState} from 'react';
import {
  ImageBackground,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {fonts, icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import TextInputComp from '../../../components/common/TextInputComp';
import {strings} from '../../../localization';
//intrnal libraries
import {colors, screenNames} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

const Signin = ({navigation}) => {
  let passwordTextInput = useRef(null);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const {email, password} = state;
  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    isLoading: false,
  });
  const name_and_values = [
    {name: 'email', value: email},
    {name: 'password', value: password},
  ];

  function Done() {
    Keyboard.dismiss();
    let err = {};
    //email error
    name_and_values.forEach(data => {
      let name = data.name;
      let value = data.value;
      if (!value) {
        err[name] = 'Should not be empty';
      } else if (
        'email' === name &&
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
      ) {
        err[name] = 'Email should be valid';
      } else if ('password' === name && value.length < 8) {
        err[name] = 'Too short';
      }
    });
    setErrors(err);
    if (Object.keys(err).length == 0) {
      var formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      // dispatch({type:REGISTER,payloads:formData});
    }
    navigation.navigate('HomeStack');

  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground source={icons.ic_signin_bg} style={styles.image}>
          <ScrollView
            style={styles.subContainer}
            contentContainerStyle={styles.subContentContainer}
            keyboardShouldPersistTaps={'always'}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: layout.size.width / 2,
              }}></View>

            <View
              style={{
                marginTop: moderateScale(40),
              }}>
              <View>
                <TextInputComp
                  label={strings.email}
                  value={email}
                  placeholder={strings.enterEmail}
                  labelTextStyle={styles.labelTextStyle}
                  onFocus={() =>
                    setErrors({
                      ...errors,
                      email: '',
                    })
                  }
                  onChangeText={_onChangeText('email')}
                />
                {errors.email ? (
                  <Text
                    transparent
                    style={{color: colors.primary, bottom: 13, left: 4}}>
                    {errors.email}
                  </Text>
                ) : null}
              </View>
              <View>
                <TextInputComp
                  label={strings.Password}
                  value={password}
                  secureTextEntry
                  placeholder={strings.enterPassword}
                  labelTextStyle={styles.labelTextStyle}
                  onChangeText={_onChangeText('password')}
                  onFocus={() =>
                    setErrors({
                      ...errors,
                      password: '',
                    })
                  }
                />
                {errors.password ? (
                  <Text
                    transparent
                    style={{color: colors.primary, bottom: 13, left: 4}}>
                    {errors.password}
                  </Text>
                ) : null}
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.ForgotPassword)}>
              <Text style={styles.forgotStyle}>{strings.forgotpassword}</Text>
            </TouchableOpacity>

            <View
              style={{
                marginTop: moderateScale(50),
              }}>
              <Button
                style={styles.btnStyles}
                label={strings.login}
                onPress={() => Done()}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.Signup)}>
              <Text style={styles.createAccount}>
                {strings.createAccount}
                <Text style={styles.signuptext}>{strings.signup}</Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
