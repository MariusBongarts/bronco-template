import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';

const componentCSS = require('./app.component.scss');

/**
 * Left sidebar. To include icons following has to be included in index.html  => <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 * @slot header - Slot to set header bar
 * @slot nav - Slot to set left nav bar
 * @slot main - Slot to set main content
 * @cssprop --bg - Defines the background
 * @cssprop --nav-width - Defines the width of the left nav bar
 */
@customElement('bronco-template')
export class BroncoTemplate extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  hideNav = false;

  /**
   * Boolean if mobile device
   * @type {boolean}
   * @memberof BroncoTemplate
   */
  @property()
  mobile = false;

  firstUpdated() {
    if (window.innerWidth < 928) this.mobile = true;
    window.addEventListener('resize', () => {
      if (window.innerWidth < 928) this.mobile = true;
      if (window.innerWidth >= 928) this.mobile = false;
    });
  }

  render() {
    return html`
    <div class="grid-container ${this.hideNav ? 'hideNav' : ''}">
      <header>
        <slot name="header"></slot>
      </header>
      <nav>
        <slot name="nav"></slot>
      </nav>
      <main>
        <slot name="main"></slot>
      </main>
    </div>
    ${!this.mobile ? html`
    <div id="drag" class="${this.hideNav ? 'hideNav' : ''}" @click=${() => this.hideNav ? this.hideNav = false :
          this.hideNav = true}>
      <i class="material-icons">${this.hideNav ? 'keyboard_arrow_right' : 'keyboard_arrow_left'}</i>
    </div>
    ` : ''}
`;
  }
}