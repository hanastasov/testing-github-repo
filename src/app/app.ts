import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcNavDrawerComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .navbar {
      height: max-content;
      min-width: min-content;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      flex-shrink: 0;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .nav-drawer::part(main) {
      width: 320px;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <h6>App Name</h6>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            search
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            favorite
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            more_vert
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
      </igc-navbar>
      <div class="row-layout group">
        <igc-nav-drawer position="relative" class="nav-drawer">
          <div slot="mini">
            <igc-nav-drawer-item @click="${() => Router.go('/view1')}">
              <span slot="icon">
                <span class="material-icons icon">
                  account_circle
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item @click="${() => Router.go('/view3')}">
              <span slot="icon">
                <span class="material-icons icon">
                  assessment
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item @click="${() => Router.go('/view2')}">
              <span slot="icon">
                <span class="material-icons icon">
                  assignment_turned_in
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item @click="${() => Router.go('/view4')}">
              <span slot="icon">
                <span class="material-icons icon">
                  alarm_on
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
          </div>
          <igc-nav-drawer-item>
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Title goes here</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
        <router-outlet class="view-container"></router-outlet>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
