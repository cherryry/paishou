// pages/my_wallet/my_wallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: 0,
    money: '300.00',
    userInputCardNo2: '',
    cardlen: 0,
  },
  //输入框的监听事件
  BankCardNoInput: function (e) {
    var card = e.detail.value;
    var len = card.length;
    if (len > this.data.cardlen) {
      if ((len + 1) % 5 == 0) {
        card = card + '　';
        console.log('ok',card)
      }
    } else {
      card = card.replace(/(^\s*)|(\s*$)/g, "")
    }
    this.setData({
      userInputCardNo: card
    })
    this.setData({
      cardlen: len
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})