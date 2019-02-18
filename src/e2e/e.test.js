// const puppeteer = require('puppeteer');
// import puppeteer from 'puppeteer';
// import React from 'react';
// import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
// import LightContainer from './index';
// import Light from '../Light';
// import LightControls from '../LightControls';
// import config  from '../../config';
// import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';
// import 'jest-dom/extend-expect';

describe('app e2e', () => {
  // let browser;
  // let page;
  beforeEach(async () => {
    // browser = await puppeteer.launch();
    // page = await browser.newPage()
    await page.goto(`http://localhost:${3000}`);
  });
  // afterEach(async () => {
  //   await page.close();
  // });

  test('xxxx', async () => {
    // expect(1).toBe(2);
    const button = await page.evaluate(() => {
      const btn = document.querySelector('#test');
      return JSON.parse(JSON.stringify(window.getComputedStyle(btn)));
    });
    expect(button).toBe('red');

    // expect(wrapper.find(Light)).toHaveLength(config.constants.LIGHT_QUANTITY);
  });

});

