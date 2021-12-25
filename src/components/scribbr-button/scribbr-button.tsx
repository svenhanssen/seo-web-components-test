import { Component, h } from '@stencil/core';

@Component({
  tag: 'scribbr-button',
  styleUrl: 'scribbr-button.css',
  shadow: true,
})
export class ScribbrButton {

  render() {
    return (
      <div class="test">
        <button>
          <slot></slot>
        </button>
      </div>
    );
  }

}
