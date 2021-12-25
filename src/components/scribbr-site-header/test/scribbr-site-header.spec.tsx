import { newSpecPage } from '@stencil/core/testing';
import { ScribbrSiteHeader } from '../scribbr-site-header';

describe('scribbr-site-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScribbrSiteHeader],
      html: `<scribbr-site-header></scribbr-site-header>`,
    });
    expect(page.root).toEqualHtml(`
      <scribbr-site-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </scribbr-site-header>
    `);
  });
});
