import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import Button from '../../components/Button/Button.component';
import Header from '../../components/Header/Header.component';
import CartList from '../../components/CartList/CartList.component';

const CartScreen = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header label={'Cart'} backgroundColour={'white'} />
      <View style={styles.content_container}>
        <View style={{height: '80%', paddingTop: '10%'}}>
          <FlatList
            data={props.cart}
            keyExtractor={(item) => item.notation}
            renderItem={({item, index}) => (
              <CartList item={item} position={index} />
            )}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              color: 'black',
            }}>{`Total: €${props.total.toFixed(2)}`}</Text>
          <Button
            onPress={() => navigation.navigate('Checkout')}
            border={true}
            width={150}
            backgroundColor={'white'}
            title={'To Payment'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  total: state.cart.total,
});

export default connect(mapStateToProps)(CartScreen);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  content_container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  text_container: {
    paddingVertical: 10,
  },
});
