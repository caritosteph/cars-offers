import React, { Component } from 'react';
import Header from './common/Header';
import styled from 'styled-components';

const View = styled.div`
  text-align: center;
`;

class App extends Component {

  render() {
    return (
      <View>
        <Header />
      </View>

    );
  }
}

export default App;
