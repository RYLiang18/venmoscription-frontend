import { LitElement, unsafeCSS } from "lit";
import style from './tailwind-lit.element.css'

export const TailwindLitElement = () => {
    return class extends LitElement {
        static styles = [unsafeCSS(style)]
    }
}