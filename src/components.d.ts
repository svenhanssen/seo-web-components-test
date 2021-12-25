/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ScribbrButton {
    }
    interface ScribbrSiteHeader {
    }
}
declare global {
    interface HTMLScribbrButtonElement extends Components.ScribbrButton, HTMLStencilElement {
    }
    var HTMLScribbrButtonElement: {
        prototype: HTMLScribbrButtonElement;
        new (): HTMLScribbrButtonElement;
    };
    interface HTMLScribbrSiteHeaderElement extends Components.ScribbrSiteHeader, HTMLStencilElement {
    }
    var HTMLScribbrSiteHeaderElement: {
        prototype: HTMLScribbrSiteHeaderElement;
        new (): HTMLScribbrSiteHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "scribbr-button": HTMLScribbrButtonElement;
        "scribbr-site-header": HTMLScribbrSiteHeaderElement;
    }
}
declare namespace LocalJSX {
    interface ScribbrButton {
    }
    interface ScribbrSiteHeader {
    }
    interface IntrinsicElements {
        "scribbr-button": ScribbrButton;
        "scribbr-site-header": ScribbrSiteHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "scribbr-button": LocalJSX.ScribbrButton & JSXBase.HTMLAttributes<HTMLScribbrButtonElement>;
            "scribbr-site-header": LocalJSX.ScribbrSiteHeader & JSXBase.HTMLAttributes<HTMLScribbrSiteHeaderElement>;
        }
    }
}
