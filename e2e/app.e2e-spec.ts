import { LeverxPage } from './app.po';

describe('leverx App', () => {
  let page: LeverxPage;

  beforeEach(() => {
    page = new LeverxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
