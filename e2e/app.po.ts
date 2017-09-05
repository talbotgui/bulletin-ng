import { browser, by, element, WebElement } from 'protractor';
import { By, FileDetector, promise as wdpromise } from 'selenium-webdriver';
import * as fs from 'fs';

export class BulletinPage {
  private identifiant: string;
  constructor() {
    this.identifiant = '' + (new Date()).getTime();
  }

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
    const e = element(selector);
    e.clear();
    e.sendKeys(text);
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
  imprimeEcran(nom: string): void {
    browser.takeScreenshot().then((png) => {
      const dirName = 'build/e2e-screenshot';
      if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
      }

      const fileName = dirName + '/' + this.identifiant + nom + '.png';
      const stream = fs.createWriteStream(fileName);
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  }
}
