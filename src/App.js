import React, { Component } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './config/store';

const View = styled.div`
  text-align: center;
`;

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View>
          <Header />
          <Footer />
        </View>
      </Provider>
    );
  }
}

export default App;
