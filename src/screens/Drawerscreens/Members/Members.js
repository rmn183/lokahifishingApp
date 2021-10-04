import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {colors} from '../../../utilities/constants';
import styles from './styles';

let members = [
  {
    img: icons.ic_LokahiLogo,
    name: 'princepardeepkmr',
    date: 'Member since 1 oct 2021',
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'rv_kunal',
    date: 'Member since 2 oct 2021',
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'rvtechnologies',
    date: 'Member since 1 oct 2021',
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'dev_pardeep',
    date: 'Member since 2 oct 2021',
  },
];

const Members = ({navigation}) => {
  const [membersList, setMembersList] = useState(members);

  const _renderView = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.listView,
        {
          backgroundColor: index % 2 == 0 ? '#3c264a' : '#553456',
        },
      ]}
      activeOpacity={0.8}>
      <View style={styles.viewStyle}>
        <Image
          source={item.img}
          style={{
            height: 70,
            width: 70,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text style={styles.nameStyle}>{item.name}</Text>
          <Text style={styles.dateStyle}>{item.date}</Text>
        </View>
      </View>
      <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={icons.ic_signup_bg}
      style={{flex: 1, height: '100%'}}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          title={'Members'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

        <FlatList
          extraData={membersList}
          data={membersList}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListHeaderComponent={() =>
            !membersList.length ? (
              <Text style={styles.nomatch}>No Match found</Text>
            ) : null
          }
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Members;