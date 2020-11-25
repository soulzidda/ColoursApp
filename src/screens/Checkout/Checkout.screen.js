import React, {useRef, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../navigation/BackButton/BackButton';
import {colours} from '../../styles/colours';
import Header from '../../components/Header/Header.component';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {LiteCreditCardInput} from 'react-native-input-credit-card';
import Button from '../../components/Button/Button.component';
import {resetStateAfterPayment} from '../../redux/Cart/CartActions';
import {checkoutService as service} from './Checkout.service';
import {useNavigation} from '@react-navigation/native';

const CheckoutScreen = (props) => {
  const navigation = useNavigation();
  const {total, resetStateAfterPayment} = props;

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [successful, setSuccessful] = useState(false);

  const card = useRef({
    newNameOnCard: null,
    number: null,
    expMonth: null,
    expYear: null,
    cvc: null,
  }).current;

  const onChange = (form) => {
    card.cvc = form.values.cvc.toString();
    card.number = form.values.number.toString();
    card.expMonth = form.values.expiry.split('/')[0];
    card.expYear = form.values.expiry.split('/')[1];
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton colour={colours.black} />
      <Header label={'Checkout'} />
      <View style={styles.content_container}>
        <View>
          <Text style={styles.amount_text}>{`€ ${total.toFixed(2)}`}</Text>
        </View>
        <View>
          <Text style={[styles.text, {paddingVertical: 10}]}>
            Please input these dummy card details
          </Text>
          <Text style={[styles.text, {color: colours.red}]}>
            Card Number: 4000 0000 0000 3220
          </Text>
          <Text style={[styles.text, {color: colours.red}]}>
            expiry date: 04/24
          </Text>
          <Text style={[styles.text, {color: colours.red}]}>CVC: 123</Text>
        </View>
        <View>
          <LiteCreditCardInput
            requiresName={true}
            inputStyle={{borderBottomWidth: 1}}
            onChange={onChange}
            requiresCVC
          />
          {errorMessage && <Text>{errorMessage}</Text>}
        </View>

        <Button
          loading={loading}
          disabled={loading}
          onPress={() => {
            try {
              setLoading(true);
              service.paid(card, errorMessage);
              setSuccessful(true);

              setLoading(false);

              Alert.alert('Alert Title', 'You have paid for your session', [
                {
                  text: 'OK',
                  onPress: () => {
                    resetStateAfterPayment();
                    navigation.reset({
                      stale: true,
                      routes: [{name: 'catalogue'}],
                    });
                  },
                },
              ]);
            } catch (error) {
              setErrorMessage(error.message);
            }
          }}
          border={true}
          width={150}
          backgroundColor={colours.white}
          title={'Pay'}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  total: state.cart.total,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      resetStateAfterPayment,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
  },
  content_container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  amount_text: {
    textAlign: 'center',
    fontSize: 22,
  },
  text: {textAlign: 'center'},
  warning_text: {color: colours.red},
});
