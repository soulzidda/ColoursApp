import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../redux/Cart/CartActions';

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
            <TouchableOpacity onPress={onPress}>
              <Icon name={'trash-o'} color={'black'} size={24} />
            </TouchableOpacity>
          </View>
        )}
        {props.canAdd && (
          <View>
            <TouchableOpacity onPress={onPress}>
              <Icon name={'heart'} color={'red'} size={24} />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.text_container}>
          <Text>{item.name}</Text>
        </View>
        <View>
          <Text>{item.notation}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => props.addToCart(item)}>
            <Icon name={'cart-plus'} colour={'black'} size={24} />
          </TouchableOpacity>
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
