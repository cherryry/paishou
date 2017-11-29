// pages/user_authentication/user_authentication.js
var appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    currentTab: 0,
    winHeight: 0,
    avatarUrlz: '/images/btn_upload_front@3x.png',
    avatarUrlf: '/images/btn_upload_back@3x.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  }

})