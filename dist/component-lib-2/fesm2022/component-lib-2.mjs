import * as i0 from '@angular/core';
import { Component } from '@angular/core';

class ButtonComponent {
    static ɵfac = function ButtonComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ButtonComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["lib-btn"]], decls: 2, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button");
            i0.ɵɵtext(1, "primary");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{ selector: 'lib-btn', imports: [], template: "<button>primary</button>\r\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "lib/components/button/button.component.ts", lineNumber: 9 }); })();

/*
 * Public API Surface of component-lib-2
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent };
//# sourceMappingURL=component-lib-2.mjs.map
