import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindLitElement } from './tailwind-lit-element/tailwind-lit.element'

@customElement("test-element")
export class TestElement extends TailwindLitElement {
    render() {
        return html`
            <button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">blah blah blah</button>
        `
    }
}