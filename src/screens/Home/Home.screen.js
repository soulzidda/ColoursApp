import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import {connect} from 'react-redux';
import {MoreButton} from '../../navigation/MoreButton/MoreButton';

export const HomeScreen = (props) => {
  const {name} = props;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <MoreButton
        options={['Settings', 'Coming soon']}
        onOptionPress={(option) => {
          switch (option) {
            case 'Settings':
              navigation.navigate('Details');
              break;
            case 'Coming soon':
              Alert.alert(
                'Coming soon',
                'More features will be developed soon',
              );
          }
        }}
        width={200}
      />
      <Header label={`Welcome ${name}`} backgroundColour={'white'} />
      <View style={styles.content_container}>
        <View style={styles.text_container}>
          <Text style={{textAlign: 'left'}}>Welcome to the Colours App</Text>
        </View>
        <View style={styles.text_container}>
          <Text>
            The main purpose of this app is as a portfolio piece using React
            Native and Redux.
          </Text>
        </View>
        <View style={styles.text_container}>
          <Text>
            You can change your name in the more button at the top right
          </Text>
        </View>
        <View style={styles.text_container}>
          <Text>
            The Catalogue tab is where you can see different colours which can
            be added to your favorites as well as to see more info on that
            colour from the system it comes from.
          </Text>
        </View>
        <View style={styles.text_container}>
          <Text>
            The shop is where you can buy the same colours which are in the
            Catalogue, however some are out of stock. The showcase ends when you
            complete the purchase with stripe using 3D secure
          </Text>
        </View>
        <View style={styles.text_container}>
          <Text style={{color: 'red'}}>IN ACTIVE DEVELOPMENT</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  name: state.user.name,
});

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content_container: {
    paddingHorizontal: 20,
  },
  text_container: {
    paddingVertical: 10,
  },
});
