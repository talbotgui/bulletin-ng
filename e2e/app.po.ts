import { browser, by, element, WebElement } from 'protractor';
import { By, FileDetector } from 'selenium-webdriver';
import * as fs from 'fs';

export class BulletinPage {

  navigateToRoot(): void {
    browser.get('/?offline');
  }
  getText(selector: By) {
    return element(selector).getText();
  }
  click(selector: By): void {
    element(selector).click();
  }
  isVisible(selector: By) {
    return element(selector).isPresent();
  }
  type(selector: By, text: string): void {
    element(selector).sendKeys(text);
  }
  patiente(temps: number) {
    browser.driver.sleep(temps);
  }
}
