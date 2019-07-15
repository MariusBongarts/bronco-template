import { LitElement } from 'lit-element';
import { BroncoTemplate } from './app.component';
import './app.component';
import { emit } from 'cluster';

describe('bronco-template', () => {
  let element: BroncoTemplate;

  beforeEach(async () => {
    element = document.createElement('bronco-left-navbar') as BroncoTemplate;
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => { element.remove(); });

  it('should render bronco-template', async () => {
    document.body.appendChild(element);
    await element.updateComplete;
    expect(element.textContent).toBe('');
  });

});
