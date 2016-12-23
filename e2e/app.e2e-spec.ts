import { Ng2TeslaBatteryRangePage } from './app.po';

describe('ng2-tesla-battery-range App', function() {
  let page: Ng2TeslaBatteryRangePage;

  beforeEach(() => {
    page = new Ng2TeslaBatteryRangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
