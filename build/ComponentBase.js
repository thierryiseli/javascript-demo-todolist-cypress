import { LitElement } from './_snowpack/pkg/lit.js';

export class ComponentBase extends LitElement {
    constructor() {
        super();
    }

    createRenderRoot() { 
        return this; 
    }
}