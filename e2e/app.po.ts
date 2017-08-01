import { browser, by, element } from 'protractor';

export class BulletinPage {

  navigateToRoot(): void {
    browser.get('/');
  }
  getText(selector) {
    return element(selector).getText();
  }
  click(selector): void {
    element(selector).click();
  }
  isVisible(selector) {
    return element(selector).isPresent();
  }
}
