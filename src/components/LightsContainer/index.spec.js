import React from 'react';
import { shallow, mount } from 'enzyme';
import LightContainer from './index';
import Light from '../Light';
import LightControls from '../LightControls';
import config  from '../../config';


const { LIGHT_QUANTITY, DIMMED_LIGHT_COLOR } = config.constants;

describe('<LightContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LightContainer />);
  });

   test('renders one <LightControls /> component', () => {
    expect(wrapper.find(LightControls)).toHaveLength(1);
  });

  test('renders predefined number of <Light /> components', () => {
    expect(wrapper.find(Light)).toHaveLength(LIGHT_QUANTITY);
  });
});

describe('<LightContainer /> integration with lights and controls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<LightContainer />);
  });

  test('all light are dimmed by default', () => {
    const colors = wrapper.find('.light').map(node => node.props().style.backgroundColor);
    expect(colors.every(el => el === DIMMED_LIGHT_COLOR)).toBe(true);
  });

  test('light changes color on click', () => {
    expect(wrapper.find('.light').at(0).props().style).toEqual({
      backgroundColor: DIMMED_LIGHT_COLOR
    });
    wrapper.instance().handleLightClick(0);
    wrapper.update();
    expect(wrapper.find('.light').at(0).props().style).not.toEqual({
      backgroundColor: DIMMED_LIGHT_COLOR
    });
  });

  test('light changes color on mouse enter when color mode is on', () => {
    wrapper.instance().colorMode = true;
    wrapper.instance().handleLightEnter(0);
    wrapper.update();
    expect(wrapper.find('.light').at(0).props().style).not.toEqual({
      backgroundColor: DIMMED_LIGHT_COLOR
    });
  });

  test('light does not change color on mouse enter when color mode is off', () => {
    wrapper.instance().handleLightEnter(0);
    wrapper.update();
    expect(wrapper.find('.light').at(0).props().style).toEqual({
      backgroundColor: DIMMED_LIGHT_COLOR
    });
  });

  test('light is dimmed on double click', () => {
    wrapper.instance().handleLightClick(0);
    wrapper.update();
    expect(wrapper.find('.light').at(0).props().style).not.toEqual({
      backgroundColor: DIMMED_LIGHT_COLOR
    });
    wrapper.instance().handleDoubleClick(0);
    wrapper.update();
    expect(wrapper.find('.light').at(0).props().style).toEqual({
      backgroundColor: DIMMED_LIGHT_COLOR
    });
  });


  // Do we need theese?
  test('color mode is activated on mouse down', () => {
    // @todo
  });

  test('color mode is deactivated on mouse up', () => {
    // @todo
  });

  test('color mode is deactivated on mouse leave', () => {
    // @todo
  });

  test('all lights are dimmed on Reset all click', () => {
    // @todo
  });

  test('recent (streak) lights are dimmed on Reset click', () => {
    // @todo
  });
});