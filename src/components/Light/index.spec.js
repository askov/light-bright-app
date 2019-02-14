import React from 'react';
import renderer from 'react-test-renderer';
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
      handleLightEnter: jest.fn(),
      handleLightClick: jest.fn(),
      handleDoubleClick: jest.fn(),
    };
    wrapper = createWrapper(props);
  });

  test('renders correctly', () => {
    const tree = renderer
      .create(<Light {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders light container div', () => {
    expect(wrapper.find('div.light').length).toBe(1);
  });

  test('div style background color is set from props', () => {
    const p = wrapper.find('div.light').props();
    expect(p).toHaveProperty('style.backgroundColor', props.color);
  });

  test('handles mouse enter event properly', () => {
    wrapper.simulate('mouseenter');
    expect(props.handleLightEnter.mock.calls.length).toBe(1);
    expect(props.handleLightEnter).toBeCalledWith(props.index);
  });

  test('handles mouse down event properly', () => {
    wrapper.simulate('mousedown');
    expect(props.handleLightClick.mock.calls.length).toBe(1);
    expect(props.handleLightClick).toBeCalledWith(props.index);
  });

  test('handles double click event properly', () => {
    wrapper.simulate('dblclick');
    expect(props.handleDoubleClick.mock.calls.length).toBe(1);
    expect(props.handleDoubleClick).toBeCalledWith(props.index);
  });
});