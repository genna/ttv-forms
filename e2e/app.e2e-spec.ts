import { TtvFormsPage } from './app.po';

describe('ttv-forms App', function() {
  let page: TtvFormsPage;

  beforeEach(() => {
    page = new TtvFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
