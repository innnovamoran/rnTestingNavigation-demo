import {device, expect, element, by, waitFor} from 'detox';

describe('Testing welcome screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', () => {
    expect(element(by.id('welcome-title'))).toBeVisible();
  });
  it('should nav to signin', async () => {
    await element(by.id('btn-welcome-nav-signin')).tap();
    await expect(element(by.id('title-signin'))).toBeVisible();
    await element(by.id('btn-nav-to-welcome')).tap();
    await expect(element(by.id('welcome-title'))).toBeVisible();
  });
});
