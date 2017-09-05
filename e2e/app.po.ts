import { browser, by, element, WebElement } from 'protractor';
import { By, FileDetector, promise as wdpromise } from 'selenium-webdriver';
import * as fs from 'fs';

export class BulletinPage {

  navigateToRoot(): void {
    browser.get('/?offline&?sansAlerte');
  }
  getText(selector: By) {
    return element(selector).getText();
  }
  click(selector: By): void {
    element(selector).click();
  }
  clickAll(selector: By): void {
    element.all(selector).click();
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
  compterElements(selector: By): wdpromise.Promise<number> {
    return element.all(selector).count();
  }
  executeScript(script: string): void {
    browser.executeScript(script);
  }
}
