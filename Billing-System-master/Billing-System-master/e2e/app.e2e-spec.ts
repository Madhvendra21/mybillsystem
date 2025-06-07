import { StatPage } from './app.po';

describe('stat App', () => {
  let page: StatPage;

  beforeEach(() => {
    page = new StatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
