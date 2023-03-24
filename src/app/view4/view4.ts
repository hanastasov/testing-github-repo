import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCalendarComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcCalendarComponent, IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent);

@customElement('app-view4')
export default class View4 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .card {
      width: 320px;
      height: max-content;
      min-width: 320px;
    }
    .calendar {
      width: max-content;
      height: max-content;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .button {
      height: max-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
      </div>
      <div class="column-layout group">
        <igc-card class="card">
          <igc-card-header>
            <h3 slot="title">
              Title goes here...
            </h3>
            <h5 slot="subtitle">
              Subtitle goes here...
            </h5>
          </igc-card-header>
          <igc-card-content class="body-content"></igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="flat" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                bookmark
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
      </div>
    `;
  }
}
