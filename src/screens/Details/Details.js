import React from 'react';
import {Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {userChangeName} from '../../redux/actions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userChangeName,
    },
    dispatch,
  );

const DetailsScreen = (props) => {
  const {name} = props;
  console.log(props.name);
  return (
    <SafeAreaView>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  name: state.user.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
