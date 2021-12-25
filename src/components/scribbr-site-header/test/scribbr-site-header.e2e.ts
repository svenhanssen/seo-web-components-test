import { newE2EPage } from '@stencil/core/testing';

describe('scribbr-site-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scribbr-site-header></scribbr-site-header>');

    const element = await page.find('scribbr-site-header');
    expect(element).toHaveClass('hydrated');
  });
});
