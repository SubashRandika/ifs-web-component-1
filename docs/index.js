import { css as P, LitElement as A, html as m } from "lit";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = (s) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(s, e);
  }) : customElements.define(s, e);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const h = globalThis, b = h.ShadowRoot && (h.ShadyCSS === void 0 || h.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _ = Symbol(), x = /* @__PURE__ */ new WeakMap();
let U = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== _) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (b && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = x.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && x.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const C = (s) => new U(typeof s == "string" ? s : s + "", void 0, _), O = (s, e) => {
  if (b) s.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), n = h.litNonce;
    n !== void 0 && i.setAttribute("nonce", n), i.textContent = t.cssText, s.appendChild(i);
  }
}, $ = b ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return C(t);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: z, defineProperty: R, getOwnPropertyDescriptor: M, getOwnPropertyNames: j, getOwnPropertySymbols: T, getPrototypeOf: D } = Object, c = globalThis, w = c.trustedTypes, L = w ? w.emptyScript : "", v = c.reactiveElementPolyfillSupport, l = (s, e) => s, u = { toAttribute(s, e) {
  switch (e) {
    case Boolean:
      s = s ? L : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, e) {
  let t = s;
  switch (e) {
    case Boolean:
      t = s !== null;
      break;
    case Number:
      t = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(s);
      } catch {
        t = null;
      }
  }
  return t;
} }, g = (s, e) => !z(s, e), E = { attribute: !0, type: String, converter: u, reflect: !1, hasChanged: g };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), c.litPropertyMetadata ?? (c.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class d extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = E) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), n = this.getPropertyDescriptor(e, i, t);
      n !== void 0 && R(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: n, set: o } = M(this.prototype, e) ?? { get() {
      return this[t];
    }, set(r) {
      this[t] = r;
    } };
    return { get() {
      return n == null ? void 0 : n.call(this);
    }, set(r) {
      const a = n == null ? void 0 : n.call(this);
      o.call(this, r), this.requestUpdate(e, a, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? E;
  }
  static _$Ei() {
    if (this.hasOwnProperty(l("elementProperties"))) return;
    const e = D(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(l("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(l("properties"))) {
      const t = this.properties, i = [...j(t), ...T(t)];
      for (const n of i) this.createProperty(n, t[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, n] of t) this.elementProperties.set(i, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const n = this._$Eu(t, i);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const n of i) t.unshift($(n));
    } else e !== void 0 && t.push($(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return O(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$EC(e, t) {
    var o;
    const i = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, i);
    if (n !== void 0 && i.reflect === !0) {
      const r = (((o = i.converter) == null ? void 0 : o.toAttribute) !== void 0 ? i.converter : u).toAttribute(t, i.type);
      this._$Em = e, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var o;
    const i = this.constructor, n = i._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const r = i.getPropertyOptions(n), a = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((o = r.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? r.converter : u;
      this._$Em = n, this[n] = a.fromAttribute(t, r.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? g)(this[e], t)) return;
      this.P(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, i) {
    this._$AL.has(e) || this._$AL.set(e, t), i.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, r] of this._$Ep) this[o] = r;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [o, r] of n) r.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], r);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((n) => {
        var o;
        return (o = n.hostUpdate) == null ? void 0 : o.call(n);
      }), this.update(t)) : this._$EU();
    } catch (n) {
      throw e = !1, this._$EU(), n;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var n;
      return (n = i.hostUpdated) == null ? void 0 : n.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
d.elementStyles = [], d.shadowRootOptions = { mode: "open" }, d[l("elementProperties")] = /* @__PURE__ */ new Map(), d[l("finalized")] = /* @__PURE__ */ new Map(), v == null || v({ ReactiveElement: d }), (c.reactiveElementVersions ?? (c.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N = { attribute: !0, type: String, converter: u, reflect: !1, hasChanged: g }, J = (s = N, e, t) => {
  const { kind: i, metadata: n } = t;
  let o = globalThis.litPropertyMetadata.get(n);
  if (o === void 0 && globalThis.litPropertyMetadata.set(n, o = /* @__PURE__ */ new Map()), o.set(t.name, s), i === "accessor") {
    const { name: r } = t;
    return { set(a) {
      const f = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(r, f, s);
    }, init(a) {
      return a !== void 0 && this.P(r, void 0, s), a;
    } };
  }
  if (i === "setter") {
    const { name: r } = t;
    return function(a) {
      const f = this[r];
      e.call(this, a), this.requestUpdate(r, f, s);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function S(s) {
  return (e, t) => typeof t == "object" ? J(s, e, t) : ((i, n, o) => {
    const r = n.hasOwnProperty(o);
    return n.constructor.createProperty(o, r ? { ...i, wrapped: !0 } : i), r ? Object.getOwnPropertyDescriptor(n, o) : void 0;
  })(s, e, t);
}
var B = Object.defineProperty, I = Object.getOwnPropertyDescriptor, y = (s, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? I(e, t) : e, o = s.length - 1, r; o >= 0; o--)
    (r = s[o]) && (n = (i ? r(e, t, n) : r(n)) || n);
  return i && n && B(e, t, n), n;
};
let p = class extends A {
  constructor() {
    super(...arguments), this.announcements = [
      {
        text: "Please verify your ID for Tax Information by 30th May",
        sender: "Adam Evanson"
      },
      { text: "R&D Expo is in 2 weeks!", sender: "Janine Bookk" },
      { text: "R&D Expo is in 2 weeks!", sender: "Janine Bookk" },
      {
        text: "Please verify your ID for Tax Information by 30th May",
        sender: "Adam Evanson"
      },
      { text: "R&D Expo is in 2 weeks!", sender: "Janine Bookk" }
    ], this.events = [
      {
        name: "Tim Cook",
        event: "Birthday",
        date: "Apr. 1st",
        color: "#b52950",
        icon: "🎂",
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aiden&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf"
      },
      {
        name: "Lucas Robinson",
        event: "New Joiner",
        date: "Apr. 1st",
        color: "#409163",
        icon: "👋",
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Luis&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf"
      },
      {
        name: "Tim Cook",
        event: "Birthday",
        date: "Apr. 1st",
        color: "#b52950",
        icon: "🎂",
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aiden&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf"
      },
      {
        name: "Ava Davis",
        event: "Work Anniversary",
        date: "Apr. 1st",
        color: "#2f4b7f",
        icon: "🎉",
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nolan&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf"
      },
      {
        name: "Lucas Robinson",
        event: "New Joiner",
        date: "Apr. 1st",
        color: "#409163",
        icon: "👋",
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Luis&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf"
      }
    ];
  }
  render() {
    return m`
            <div class="hub">
                <!-- Announcements -->
                <div class="announcement-section">
                    <div class="section-title">📢 Announcements</div>
                    <div class="scrollable">
                        ${this.announcements.map(
      (s) => m`
                                <div class="announcement-item">
                                    <div class="icon-container">
                                        <div class="announcement-icon">🗓️</div>
                                    </div>
                                    <div class="announcement-info">
                                        <div class="announcement-title"
                                            >${s.text} - Sent by
                                            ${s.sender}</span
                                        >
                                        <div>
                                            <a href="#" class="announcement-link">
                                                See More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            `
    )}
                    </div>
                </div>

                <!-- Events -->
                <div class="event-section">
                    <div class="section-title">🎉 Events</div>
                    <div class="scrollable">
                        ${this.events.map(
      (s) => m`
                                <div class="event-item">
                                    <img
                                        src="${s.image}"
                                        alt="${s.name}"
                                        class="event-image"
                                    />
                                    <div class="event-info">
                                        <div class="event-details">
                                            <div class="event-name">${s.name}</div>
                                            <div class="event-badge-container">
                                                <div
                                                    class="event-badge"
                                                    style="background: ${s.color};"
                                                    >${s.event}</span>
                                                </div>
                                                <div class="event-date">
                                                    ${s.date}
                                                </div>
                                            </div>
                                        </div>
                                        <button class="button">
                                            ${s.icon}&nbsp;
                                            ${s.event === "New Joiner" ? "Say Hello" : "Wish"}
                                        </button>
                                    </div>`
    )}
                            </div>
                        </div>
                    </div>`;
  }
};
p.styles = P`
        :host {
            container-type: inline-size;
            container-name: hub-container;
            font-family: Arial, sans-serif;
        }

        .hub {
            display: grid;
            grid-template-columns: repeat(2, minmax(300px, 1fr));
            gap: 16px;
        }

        .section-title {
            font-size: 12px;
            line-height: 1;
            text-align: left;
            color: #1a1b1d;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .scrollable {
            flex-grow: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
            border-radius: 4px;
            overflow-y: auto;
            max-height: 260px;
            padding-inline-end: 4px;
        }

        .scrollable::-webkit-scrollbar {
            width: 0.25rem;
            height: 0.25rem;
            border-radius: 0.125rem;
        }

        .scrollable::-webkit-scrollbar-thumb {
            background: #8c8c8c;
            border-radius: 0.125rem;
        }

        .scrollable::-webkit-scrollbar-track {
            background: #f4f2f4;
        }

        /* Announcements */
        .announcement-section {
            background-color: #f9f9f9;
            padding: 16px;
            border-radius: 8px;
        }

        .announcement-item {
            flex-grow: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .announcement-item:hover {
            background: #e8e8e8;
        }

        .icon-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .announcement-icon {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #d4eafa;
        }

        .announcement-info {
            display: flex;
            flex-direction: column;
            width: 80%;
        }

        .announcement-title {
            font-size: 12px;
            line-height: 1.5;
            color: #1a1b1d;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .announcement-link {
            font-size: 12px;
            color: #0173d1;
            text-decoration: none;
            line-height: 1;
        }

        .announcement-link:hover {
            text-decoration: underline;
        }

        /* Events */
        .event-item {
            flex-grow: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .event-item:hover {
            background: #e8e8e8;
        }

        .event-image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .event-badge {
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 12px;
            color: white;
            margin-right: 10px;
            white-space: nowrap;
        }

        .event-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1;
        }

        .event-details {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .event-name {
            font-size: 12px;
            line-height: 1;
            color: #1a1b1d;
        }

        .event-badge-container {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .event-date {
            font-size: 12px;
            line-height: 1;
            color: #3e484d;
        }

        .button {
            background: none;
            border: 1px solid #ccc;
            padding: 6px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
        }

        .button:hover {
            background: #e1e1e1;
        }

        .event-section {
            container-type: inline-size;
            container-name: event-container;
            background-color: #f9f9f9;
            padding: 16px;
            border-radius: 8px;
        }

        /* Container Queries */
        @container hub-container (max-width: 650px) {
            .event-item {
                flex-direction: row;
                justify-content: space-between;
            }

            .button {
                font-size: 10px;
                padding: 4px 8px;
            }
        }

        @container hub-container (min-width: 651px) {
            .announcement-section {
                flex: 1;
                padding: 16px 8px 16px 16px;
                border-radius: 8px;
                
            }

            .event-section {
                flex: 1;
                padding: 16px 8px 16px 16px;
                border-radius: 8px;
            }
        }

        @container event-container (width <= 340px) {
            .event-badge-container {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    `;
y([
  S({ type: Array })
], p.prototype, "announcements", 2);
y([
  S({ type: Array })
], p.prototype, "events", 2);
p = y([
  k("peoples-hub")
], p);
export {
  p as PeoplesHub
};
