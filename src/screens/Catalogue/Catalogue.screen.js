import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {
  toggleRal,
  toggleNsc,
  toggleNcs,
} from '../../redux/Directory/DirectoryActions';
import {addFavorite} from '../../redux/User/UserActions';
import {bindActionCreators} from 'redux';
import Header from '../../components/Header/Header.component';
import ListItem from '../../components/ListItem/ListItem.component';
import Button from '../../components/Button/Button.component';

const CatalogueScreen = (props) => {
  const navigation = useNavigation();
  const orderedList = [...props.ral, ...props.ncs, ...props.nsc].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header label={'Catalogue'} backgroundColour={'white'} />
      <View style={styles.content_container}>
        <View style={styles.text_container}>
          <Text style={{textAlign: 'center'}}>
            Here you can find Colours from New school, NCS, and RAL systems
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 30,
          }}>
          <Button
            title={props.ral.length > 0 ? 'Hide Ral' : 'Show Ral'}
            onPress={() => props.toggleRal()}
          />
          <Button
            title={props.ncs.length > 0 ? 'Hide Ncs' : 'Show Ncs'}
            onPress={() => props.toggleNcs()}
          />
          <Button
            title={props.nsc.length > 0 ? 'Hide Nsc' : 'Show Nsc'}
            onPress={() => props.toggleNsc()}
          />
        </View>
        <View style={styles.list_container}>
          <FlatList
            data={orderedList}
            keyExtractor={(item) => item.notation}
            renderItem={({item}) => (
              <ListItem
                item={item}
                navigate={() => navigation.navigate('ColourInfo')}
                onPress={() => {
                  props.addFavorite(item);
                }}
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
      toggleRal,
      toggleNsc,
      toggleNcs,
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
    height: '73%',
  },
  text_container: {
    paddingVertical: 10,
  },
});
