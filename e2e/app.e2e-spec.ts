import { BulletinPage } from './app.po';

describe('bulletin App', () => {
  let page: BulletinPage;

  beforeEach(() => {
    page = new BulletinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
