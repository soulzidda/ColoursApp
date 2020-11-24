import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../redux/Cart/CartActions';
import ButtonIcon from '../Button/ButtonIcon.component';

const ListItem = (props) => {
  const navigation = useNavigation();
  const {onPress, item} = props;

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: item.hex}]}
      onPress={() => navigation.navigate('ColourInfo')}>
      <View style={styles.content_container}>
        {props.canDelete && (
          <View>
            <ButtonIcon
              iconName={'trash-o'}
              colour={'black'}
              onPress={onPress}
            />
          </View>
        )}
        {props.canAdd && (
          <View>
            <ButtonIcon iconName={'heart'} colour={'red'} onPress={onPress} />
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
            colour={'black'}
            onPress={() => props.addToCart(item)}
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
    borderColor: 'black',
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
