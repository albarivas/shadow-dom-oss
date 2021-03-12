import { LightningElement } from 'lwc';

export default class StylingHooks extends LightningElement {
    handle() {
        const card = this.template.querySelector('my-card');
        console.log(card);
        console.log(card.shadowRoot.querySelector('div.card'));

        /*const card2 = this.template.querySelector('my-card');
    console.log(card2);
    console.log(card2.template.querySelector('div.card'));*/
    }
}
