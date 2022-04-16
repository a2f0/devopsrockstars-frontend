import {BasePage} from '../pageObjects/base';
import assert from 'assert';

describe('index page', () => {
  it('loads correctly', async () => {
    await BasePage.open('');
    const title = await browser.getTitle();
    assert.strictEqual(title, '\u200E');
    await expect($('#mapdiv')).not.toBeDisplayed();
    await expect($('#skyline')).toBeDisplayed();
  });
});

describe('company page', () => {
  it('loads correctly', async () => {
    await BasePage.open('company');
    await expect($('#mapdiv')).not.toBeDisplayed();
    await expect($('#aws')).toBeDisplayed();
  });
});

describe('contact page', () => {
  it('loads correctly', async () => {
    await BasePage.open('contact');
    await expect($('#mapdiv')).toBeDisplayed();
  });
});
