import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {userChangeName} from '../../redux/User/UserActions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header.component';

const DetailsScreen = (props) => {
  const {name} = props;

  const [newName, setNewName] = useState(null);
  console.log(newName);
  return (
    <SafeAreaView style={styles.container}>
      <Header label={'Settings'} backgroundColour={'white'} />
      <View style={styles.content_container}>
        <View style={styles.input_container}>
          <TextInput
            autoCorrect={false}
            onChange={(value) => setNewName(value)}
          />
        </View>
      </View>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  name: state.user.name,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userChangeName,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content_container: {
    paddingHorizontal: 20,
  },
  input_container: {
    paddingVertical: 10,
  },
});
