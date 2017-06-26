import { Angular4BlogAppPage } from './app.po';

describe('angular4-blog-app App', () => {
  let page: Angular4BlogAppPage;

  beforeEach(() => {
    page = new Angular4BlogAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
