import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../redux/Cart/CartActions';
import Button from '../../components/Button/Button.component';
import Header from '../../components/Header/Header.component';
import BackButton from '../../navigation/BackButton/BackButton';
import {colours} from '../../styles/colours';

const ColourInfoScreen = (props) => {
  // eslint-disable-next-line no-shadow
  const {addToCart} = props;
  const route = useRoute();
  const colour = route.params.colour;
  console.log(colour);

  return (
    <SafeAreaView style={styles.container}>
      <BackButton colour={colours.black} />
      <Header label={'Colour Information'} />
      <View style={styles.content_container}>
        <View style={[styles.colour_preview, {backgroundColor: colour.hex}]} />

        <View style={[styles.text_container, {paddingTop: 40}]}>
          <Text style={styles.subHeader_text}>Colour Name:</Text>
          <Text> </Text>
          <Text style={styles.text}>{colour.name}</Text>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.subHeader_text}>Colour code:</Text>
          <Text> </Text>
          <Text style={styles.text}>{colour.notation}</Text>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.subHeader_text}>Colour hex tag:</Text>
          <Text> </Text>
          <Text style={styles.text}>{colour.hex}</Text>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.subHeader_text}>price:</Text>
          <Text> </Text>
          <Text style={styles.text}>{`€ ${colour.pricePerUnit}`}</Text>
        </View>
        <View style={styles.button_container}>
          <Button
            onPress={() => addToCart(colour)}
            border={true}
            width={130}
            backgroundColor={colours.white}
            title={'Add to Cart'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addToCart,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(ColourInfoScreen);

const styles = StyleSheet.create({
  button_container: {
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colours.white,
  },
  content_container: {
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    alignItems: 'center',
  },
  colour_preview: {
    height: 50,
    width: 200,
    borderRadius: 40,
  },
  text_container: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignSelf: 'flex-start',
  },

  subHeader_text: {fontWeight: 'bold', fontSize: 20},
  text: {fontSize: 20},
});
