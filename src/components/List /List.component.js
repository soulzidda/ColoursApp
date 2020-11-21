import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = (props) => {
  const navigation = useNavigation();
  const {onPress, item} = props;

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: item.hex}]}
      onPress={() => navigation.navigate('ColourInfo')}>
      <View style={styles.content_container}>
        <View style={styles.text_container}>
          <Text>{item.name}</Text>
        </View>
        <View>
          <Text>{item.notation}</Text>
        </View>
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
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

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