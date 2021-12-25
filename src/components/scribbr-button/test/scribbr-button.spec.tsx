import { newSpecPage } from '@stencil/core/testing';
import { ScribbrButton } from '../scribbr-button';

describe('scribbr-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScribbrButton],
      html: `<scribbr-button></scribbr-button>`,
    });
    expect(page.root).toEqualHtml(`
      <scribbr-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </scribbr-button>
    `);
  });
});
