import { newE2EPage } from '@stencil/core/testing';

describe('scribbr-foo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scribbr-foo></scribbr-foo>');

    const element = await page.find('scribbr-foo');
    expect(element).toHaveClass('hydrated');
  });
});
