import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LightControls from './index';

describe('<LightControls />', () => {
  let props;
  let wrapper;

  const createWrapper = (props) => {
    return shallow(<LightControls {...props} />);
  }

  beforeEach(() => {
    props = {
      handleReset: jest.fn(),
      handleResetAll: jest.fn(),
    };
    wrapper = createWrapper(props);
  });

  test('renders correctly', () => {
    const tree = renderer
      .create(<LightControls {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders light controls container div', () => {
    expect(wrapper.find('div.light-controls').length).toBe(1);
  });

  // @todo: very specific (DOM) and looks wrong
  test('handles reset all button click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(props.handleResetAll.mock.calls.length).toBe(1);
  });

  test('handles reset button click', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(props.handleReset.mock.calls.length).toBe(1);
  });

});