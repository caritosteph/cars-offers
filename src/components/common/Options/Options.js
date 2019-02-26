import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortOffers } from '../../../actions/offers';
import styled from 'styled-components';

const View = styled.div`
  display: flex;
  padding: 20px;
`;

const RadioGroup = styled.div`
  display: flex;
  margin-left: 10px;
`;

class Options extends Component {

  state = {
    option: 'name'
  }

  handleOptionChange = (event) => {
    const option = event.target.value;
    this.setState({
      option
    })
    this.props.sortOffers(option);
  }

  render() {
    const { option } = this.state;

    return (
      <View>
        <div>
            Sort by:
        </div>
        <RadioGroup>
          <div>
            <label>
              <input type="radio" value="name"
              checked={option === 'name'}
              onChange={this.handleOptionChange} />
              Name
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="price"
              checked={option === 'price'}
              onChange={this.handleOptionChange} />
              Price
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="popularity"
              checked={option === 'popularity'}
              onChange={this.handleOptionChange} />
              Popularity
            </label>
          </div>
        </RadioGroup>
      </View>
    );
  }
}

const mapDispatchToProps  = ({
  sortOffers
})

export default connect(null, mapDispatchToProps)(Options);
