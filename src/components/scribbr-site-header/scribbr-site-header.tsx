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
        <h1>Scribbr</h1>
        <h2>Header 2</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
        </nav>
      </div>
    );
  }

}
