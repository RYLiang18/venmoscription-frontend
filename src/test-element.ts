import '@shoelace-style/shoelace/dist/shoelace.js';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('test-element')
export class TestElement extends LitElement {
  render() {
    return html`
      <sl-button variant="primary">Bruh</sl-button>
      <sl-alert>Bruhhhh</sl-alert>
    `;
  }
}
