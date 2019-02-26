import React from "react";
import Enzyme, { shallow } from "enzyme";
import Card from "./Card";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const setup = () => {
  return shallow(<Card
                    name='name'
                    image='http://thumbnail.com'
                    price={20} />);
}

describe("<Card />", () => {

  it("Showing img URL in <Card /> component", () => {
    const wrapper =  setup();
    const actual = wrapper.find('Img').prop("src");

    expect(actual).toEqual('http://thumbnail.com');
  });

});
