import React from "react";
import Enzyme, { shallow } from "enzyme";
import Footer from "./Footer";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const setup = () => {
  return shallow(<Footer />);
}

describe("<Footer />", () => {
  it("rendering <Footer /> component", () => {
    const wrapper =  setup();
    const actual = wrapper.find('FooterBar').length;

    expect(actual).toEqual(1);
  });

  it("rendering text in <Footer /> component", () => {
    const wrapper =  setup();
    const actual = wrapper.find('FooterBar').children().text();
    const expected = 'Carolyn Ulfe';

    expect(actual).toContain(expected);
  });
});
