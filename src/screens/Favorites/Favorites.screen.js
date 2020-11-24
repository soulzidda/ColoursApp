import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import ListItem from '../../components/ListItem/ListItem.component';
import Header from '../../components/Header/Header.component';
import {bindActionCreators} from 'redux';
import {deleteFavorite} from '../../redux/User/UserActions';
import {colours} from '../../styles/colours';
import BackButton from '../../navigation/BackButton/BackButton';

function isEmpty() {
  return (
    <View
      style={{
        paddingVertical: 10,
        height: 400,
      }}>
      <Text
        style={{
          textAlign: 'center',
        }}>
        There is nothing in your Favorites yet
      </Text>
    </View>
  );
}

const FavoritesScreen = (props) => {
  // eslint-disable-next-line no-shadow
  const {deleteFavorite, colours} = props;
  return (
    <SafeAreaView style={styles.container}>
      <BackButton colour={colours.black} />
      <Header label={'Favorites'} />
      <View style={styles.content_container}>
        <View style={styles.text_container}>
          {colours.length !== 0 ? (
            <Text style={styles.text}>
              Click on your Favorite colour to see more info or delete it
            </Text>
          ) : null}
          <View style={styles.list_container}>
            <FlatList
              data={colours}
              keyExtractor={(item) => item.notation}
              ListEmptyComponent={isEmpty}
              renderItem={({item, index}) => (
                <ListItem
                  item={item}
                  index={index}
                  onPress={() => deleteFavorite(index)}
                  canDelete={true}
                />
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      deleteFavorite,
    },
    dispatch,
  );

const mapStateToProps = (state) => ({
  colours: state.user.favorites.sort((a, b) => (a.name > b.name ? 1 : -1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colours.white,
  },
  content_container: {
    paddingHorizontal: 20,
  },
  list_container: {
    height: '85%',
  },
  text_container: {
    paddingVertical: 10,
  },
  text: {
    marginVertical: 10,
    textAlign: 'center',
  },
});
