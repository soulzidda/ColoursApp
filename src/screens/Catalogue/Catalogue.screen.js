import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {addFavorite} from '../../redux/User/UserActions';
import {bindActionCreators} from 'redux';
import Header from '../../components/Header/Header';
import ListItem from '../../components/List /List.component';

const CatalogueScreen = (props) => {
  const {addFavorite} = props;
  const navigation = useNavigation();
  const orderedList = [...props.ral, ...props.ncs, ...props.nsc];

  orderedList.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <SafeAreaView style={styles.container}>
      <Header label={'Catalogue'} backgroundColour={'white'} />
      <View style={styles.content_container}>
        <View style={styles.text_container}>
          <Text style={{textAlign: 'center'}}>
            Here you can find Colours from New school, NCS, and RAL systems
          </Text>
        </View>
        <View style={styles.list_container}>
          <FlatList
            data={orderedList}
            keyExtractor={(item) => item.notation}
            renderItem={({item}) => (
              <ListItem
                item={item}
                navigate={() => navigation.navigate('ColourInfo')}
                onPress={() => addFavorite(item)}
                canDelete={false}
                canAdd
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addFavorite,
    },
    dispatch,
  );

const mapStateToProps = (state) => ({
  ral: state.directory.ral,
  ncs: state.directory.ncs,
  nsc: state.directory.nsc,
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content_container: {
    paddingHorizontal: 20,
  },
  list_container: {
    height: '83%',
  },
  text_container: {
    paddingVertical: 10,
  },
});
