import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeFromCart} from '../../redux/Cart/CartActions';
import {colours} from '../../styles/colours';
import ButtonIcon from '../Button/ButtonIcon.component';

const CartList = (props) => {
  // eslint-disable-next-line no-shadow
  const {item, position, removeFromCart} = props;

  return (
    <View style={{height: 75}}>
      <View>
        <View style={styles.container}>
          <View style={styles.content_container}>
            <Text style={styles.text}>{item.name}</Text>

            <Text style={styles.text}>{item.notation}</Text>
          </View>

          <View style={[styles.preview_square, {backgroundColor: item.hex}]} />

          <View style={styles.price_container}>
            <Text style={styles.price_text}>SubTotal</Text>
            <Text style={styles.price_text}>{`€${item.pricePerUnit}`}</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <ButtonIcon
              iconName={'remove'}
              colour={colours.red}
              onPress={() => removeFromCart(position)}
            />
          </View>
        </View>
      </View>
      <View style={styles.border} />
    </View>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      removeFromCart,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(CartList);

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 0.5,
    borderBottomColor: colours.black,
    paddingTop: 10,
  },
  container: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  content_container: {
    flexDirection: 'column',
    width: 100,
    justifyContent: 'space-between',
  },
  preview_square: {
    height: 20,
    width: 60,
    borderRadius: 40,
    alignSelf: 'center',
  },
  price_container: {
    width: 70,
    justifyContent: 'center',
  },
  price_text: {
    textAlign: 'center',
  },
  text: {
    paddingTop: 10,
  },
});
