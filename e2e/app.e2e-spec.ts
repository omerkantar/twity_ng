import { JonsiPage } from './app.po';

describe('jonsi App', () => {
  let page: JonsiPage;

  beforeEach(() => {
    page = new JonsiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
