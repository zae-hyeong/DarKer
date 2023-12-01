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
  constructor({productId, productImg, productName, productPrice, sellingPrice, deleveryFee, option}) {
    this.productId = productId;
    this.productImg = productImg;
    this.productName = productName;
    this.productPrice = productPrice;
    this.sellingPrice = sellingPrice;
    this.deleveryFee = deleveryFee;

    this.option = option || {
      size: ['XL', 'L', 'M', 'S', 'XS'],
      color: ['gray','black', 'white']
    }
  }
}
export class cart {
  constructor(productId, amount, deleveryFee, productPrice) {
    this.productId = productId;
    this.amount = amount;
    this.deleveryFee = deleveryFee;
    this.productPrice = productPrice;
  }
}