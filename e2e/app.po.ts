import { browser, by, element, WebElement } from 'protractor';
import { FileDetector } from 'selenium-webdriver';
import * as fs from 'fs';

export class BulletinPage {

  navigateToRoot(): void {
    browser.get('/?offline');
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
  type(selector, text): void {
    element(selector).sendKeys(text);
  }
  patiente(temps: number) {
    browser.driver.sleep(temps);
  }
}
