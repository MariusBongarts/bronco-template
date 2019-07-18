import { SwipeDetector } from './../helper/swipeDetector';
import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';
import { Swipe } from '../types/swipe';

const componentCSS = require('./app.component.scss');

/**
 * Left sidebar. To include icons following has to be included in index.html  => <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 * @slot header - Slot to set header bar
 * @slot nav - Slot to set left nav bar
 * @slot main - Slot to set main content
 * @cssprop --bg - Defines the background
 * @cssprop --nav-width - Defines the width of the left nav bar
 * @cssprop --shadow-header - Defines shadow of the header
 * @cssprop --shadow-nav - Defines shadow of the nav
 *
 */
@customElement('bronco-template')
export class BroncoTemplate extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  swipeDetector = new SwipeDetector();

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
      if (window.innerWidth < 928) {
        this.mobile = true;
        this.hideNav = true;
      }
      if (window.innerWidth >= 928) {
        this.mobile = false;
        this.hideNav = false;
      }
    });

    this.swipeDetector.subscribe((swipe: Swipe) => {
      this.hideNav = true;
      console.log(this.hideNav);
      if (swipe === 'swipeRight') this.hideNav = false;
      if (swipe === 'swipeLeft') this.hideNav = true;
    });
  }

  render() {
    return html`
    <div class="grid-container ${this.hideNav ? '' : 'open'} ${this.hideNav ? 'hideNav' : ''}">
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
    <div id="drag" class="${this.hideNav ? 'hideNav' : ''}" @click=${()=> this.hideNav ? this.hideNav = false :
          this.hideNav = true}>
      ${this.hideNav ? html`
      <bronco-icon class="material-icons" iconName='keyboard_arrow_right'></bronco-icon>
      ` : html`
      <bronco-icon class="material-icons" iconName='keyboard_arrow_left'></bronco-icon>
      `}

    </div>
`;
  }
}