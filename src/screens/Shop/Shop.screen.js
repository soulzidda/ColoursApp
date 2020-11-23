import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListItem from '../../components/List /List.component';
import {connect} from 'react-redux';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

const ShopScreen = (props) => {
  const navigation = useNavigation();

  console.log(props.cart);
  return (
    <SafeAreaView style={styles.container}>
      <Header label={'Cart'} backgroundColour={'white'} />
      <View style={styles.content_container}>
        <View style={styles.text_container}>
          <Text style={{textAlign: 'center'}}>
            You can preview your cart and adjust the amounts of each in your
            basket before purchasing
          </Text>
        </View>
        <View>
          <FlatList
            data={props.cart}
            keyExtractor={(item) => item.notation}
            renderItem={({item}) => (
              <ListItem
                item={item}
                navigate={() => navigation.navigate('ColourInfo')}
                onPress={() => {
                  item.favorite = true;
                  props.addFavorite(item);
                  console.log(item);
                }}
                canDelete={false}
                canAdd
              />
            )}
          />
        </View>
        <Button
          onPress={() => navigation.navigate('')}
          border={true}
          width={150}
          backgroundColor={'blue'}
          title={'To Payment'}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart?.cart,
});

export default connect(mapStateToProps)(ShopScreen);

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
