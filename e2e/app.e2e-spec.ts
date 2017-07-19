import { SchipolPage } from './app.po';

describe('schipol App', () => {
  let page: SchipolPage;

  beforeEach(() => {
    page = new SchipolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
