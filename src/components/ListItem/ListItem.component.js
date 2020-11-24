import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../redux/Cart/CartActions';
import {colours} from '../../styles/colours';
import ButtonIcon from '../Button/ButtonIcon.component';

const ListItem = (props) => {
  const navigation = useNavigation();
  // eslint-disable-next-line no-shadow
  const {addToCart, canAdd, canDelete, onPress, item} = props;

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: item.hex}]}
      onPress={() =>
        navigation.navigate('colourInfo', {
          colour: item,
        })
      }>
      <View style={styles.content_container}>
        {canDelete && (
          <View>
            <ButtonIcon
              iconName={'trash-o'}
              colour={colours.black}
              onPress={onPress}
            />
          </View>
        )}
        {canAdd && (
          <View>
            <ButtonIcon
              iconName={'heart'}
              colour={colours.red}
              onPress={onPress}
            />
          </View>
        )}
        <View style={styles.text_container}>
          <Text>{item.name}</Text>
        </View>
        <View>
          <Text>{item.notation}</Text>
        </View>
        <View>
          <ButtonIcon
            iconName={'cart-plus'}
            colour={colours.black}
            onPress={() => addToCart(item)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addToCart,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(ListItem);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 40,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: colours.b,
  },
  content_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_container: {
    width: '35%',
  },
});
