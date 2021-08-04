import { LitElement } from 'lit';

export class ComponentBase extends LitElement {
    constructor() {
        super();
    }

    createRenderRoot() { 
        return this; 
    }
}