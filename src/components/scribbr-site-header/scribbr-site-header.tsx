import { Component, h } from '@stencil/core';

@Component({
  tag: 'scribbr-site-header',
  styleUrl: 'scribbr-site-header.css',
  shadow: true,
})
export class ScribbrSiteHeader {

  render() {
    return (
      <div>
        <h2>Menu</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
        </nav>
      </div>
    );
  }

}
