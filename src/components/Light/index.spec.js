import React from 'react';
import { shallow } from 'enzyme';
import Light from './index';

describe('<Light />', () => {
  let props;
  let wrapper;

  const createWrapper = (props) => {
    return shallow(<Light {...props} />);
  }

  beforeEach(() => {
    props = {
      index: 42,
      color: 'red',
      handleLightEnter: () => null,
      handleLightClick: () => null,
      handleDoubleClick: () => null,
    };
    wrapper = createWrapper(props);
  });

  test('renders light container div', () => {
    expect(wrapper.find('div.light').length).toBe(1);
  });

  test('div style background color is set from props', () => {
    const p = wrapper.find('div.light').props();
    expect(p).toHaveProperty('style.backgroundColor', props.color);
  });

  test('handles mouse enter event properly', () => {
    const x = jest.fn();
    props.handleLightEnter = x;
    wrapper = createWrapper(props);
    wrapper.simulate('mouseenter');
    expect(x.mock.calls.length).toBe(1);
    expect(x).toBeCalledWith(props.index);
  });

  test('handles mouse down event properly', () => {
    const x = jest.fn();
    props.handleLightClick = x;
    wrapper = createWrapper(props);
    wrapper.simulate('mousedown');
    expect(x.mock.calls.length).toBe(1);
    expect(x).toBeCalledWith(props.index);
  });

  test('handles double click event properly', () => {
    const x = jest.fn();
    props.handleDoubleClick = x;
    wrapper = createWrapper(props);
    wrapper.simulate('dblclick');
    expect(x.mock.calls.length).toBe(1);
    expect(x).toBeCalledWith(props.index);
  });
});