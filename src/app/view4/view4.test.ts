import { expect } from '@open-wc/testing';
import View4 from './view4.js';

describe('View4', () => {
  it('<app-view4> is an instance of View4', async () => {
    const element = document.createElement('app-view4');
    expect(element).to.be.instanceOf(View4);
  });
});
