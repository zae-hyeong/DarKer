export class BannerItem {
  constructor(id, img, comment) {
    this.bannerId = id;
    this.bannerImg = img;
    this.bannerComment = comment;
  }
}

export class MainProductList {
  constructor(listTitle, itemList) {
    this.listTitle = listTitle;
    this.itemList = itemList;
  }
}

export class Product {
  constructor() {}
}
