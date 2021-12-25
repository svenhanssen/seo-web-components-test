import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'scribbr-foo',
  styleUrl: 'scribbr-foo.css',
  shadow: false,
})
export class ScribbrFoo {

  render() {
    return (
      <Host>
        <h2>Bar</h2>
        <slot></slot>
      </Host>
    );
  }

}
