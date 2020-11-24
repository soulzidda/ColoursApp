import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeFromCart} from '../../redux/Cart/CartActions';
import ButtonIcon from '../Button/ButtonIcon.component';

const CartList = (props) => {
  const {item, index} = props;

  return (
    <View style={{height: 75}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'column',
              width: 100,
              justifyContent: 'space-between',
            }}>
            <Text style={styles.text}>{item.name}</Text>

            <Text style={styles.text}>{item.notation}</Text>
          </View>

          <View style={[styles.previewSquare, {backgroundColor: item.hex}]} />

          <View style={{width: 70, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center'}}>SubTotal</Text>
            <Text style={{textAlign: 'center'}}>{`€${item.pricePerUnit}`}</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <ButtonIcon
              iconName={'remove'}
              colour={'red'}
              onPress={() => props.removeFromCart(index)}
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
  previewSquare: {
    height: 20,
    width: 60,
    borderRadius: 40,
    alignSelf: 'center',
  },
  border: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    paddingTop: 10,
  },
  text: {
    paddingTop: 10,
  },
});
