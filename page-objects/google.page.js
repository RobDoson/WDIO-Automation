class GooglePage {
  searchBox() {
    return $('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
  }
  firstLink(){
    return $("div#rso > div:nth-of-type(1)  .rc .DKV0Md.LC20lb");
  }
}

module.exports = new GooglePage();
