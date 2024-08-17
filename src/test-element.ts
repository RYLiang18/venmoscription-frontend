import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/themes/light.css';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('test-element')
export class TestElement extends LitElement {
  render() {
    return html`
      <h1>Login</h1>

      <sl-button>Login</sl-button>
    `;
  }
}
