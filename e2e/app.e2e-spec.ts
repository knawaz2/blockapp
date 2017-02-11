import { BlockappPage } from './app.po';

describe('blockapp App', function() {
  let page: BlockappPage;

  beforeEach(() => {
    page = new BlockappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
