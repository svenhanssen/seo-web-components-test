import { newSpecPage } from '@stencil/core/testing';
import { ScribbrFoo } from '../scribbr-foo';

describe('scribbr-foo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScribbrFoo],
      html: `<scribbr-foo></scribbr-foo>`,
    });
    expect(page.root).toEqualHtml(`
      <scribbr-foo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </scribbr-foo>
    `);
  });
});
