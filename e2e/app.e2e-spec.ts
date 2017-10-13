import { ScooterAppPage } from './app.po';

describe('scooter-app App', () => {
  let page: ScooterAppPage;

  beforeEach(() => {
    page = new ScooterAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
