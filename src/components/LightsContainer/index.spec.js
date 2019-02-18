import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LightContainer from './index';
import Light from '../Light';
import LightControls from '../LightControls';
import config  from '../../config';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<LightContainer />', () => {
  let props;
  let wrapper;

  const createWrapper = (props) => {
    return shallow(<LightContainer {...props} />);
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
      .create(<LightContainer {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders one <LightControls /> component', () => {
    expect(wrapper.find(LightControls)).toHaveLength(1);
  });

  test('renders predefined number of <Light /> components', () => {
    expect(wrapper.find(Light)).toHaveLength(config.constants.LIGHT_QUANTITY);
  });

});

describe('<LightContainer /> integration with lights and controls', async () => {
  afterEach(cleanup);
  const setup = () => {
    // const utils = render(<LightContainer />)
    // // const input = utils.getByLabelText('cost-input')
    // return {
    //   // input,
    //   ...utils,
    // }
    return render(<LightContainer />);
  }
  test('light changes color on click', () => {
    const utils = setup();
    // const button = document.querySelector(['.light']);
    const x = utils.getByTestId('light1');
    expect(x).toHaveStyle(`backgroundColor: bleue`);
    // expect(wrapper.find(LightControls)).toHaveLength(1);
  });
});