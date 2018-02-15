import { GlobalAngularPage } from './app.po';

describe('global-angular App', () => {
  let page: GlobalAngularPage;

  beforeEach(() => {
    page = new GlobalAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
