import { LitElement } from 'lit';
export declare class PeoplesHub extends LitElement {
    announcements: {
        text: string;
        sender: string;
    }[];
    events: {
        name: string;
        event: string;
        date: string;
        color: string;
        icon: string;
        image: string;
    }[];
    static styles: import('lit').CSSResult;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "peoples-hub": PeoplesHub;
    }
}
