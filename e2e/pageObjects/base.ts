export default class Base {
  get mapDiv() {
    return $('#mapdiv');
  }
  get skyline() {
    return $('#skyline');
  }
  get awsSvg() {
    return $('#aws');
  }
  open(path: string) {
    return browser.url(`http://localhost:8081/${path}`);
  }
}

const BasePage = new Base();
export {BasePage};