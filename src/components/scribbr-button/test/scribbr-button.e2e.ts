import { newE2EPage } from '@stencil/core/testing';

describe('scribbr-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scribbr-button></scribbr-button>');

    const element = await page.find('scribbr-button');
    expect(element).toHaveClass('hydrated');
  });
});
