// pages/personal_information/personal_information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: false,
    avatarUrl:''
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

  },
  // 用户点击修改头像
  modifyAvatar: function () {
    this.setData({
      active: true
    })
  },
  isShow: function () {
    this.setData({
      active: false
    })
  },

  //用户点击用户名跳转
  modifyName: function () {
    wx.navigateTo({
      url: '../profile_name/profile_name',
    })
  },
  //用户点击个人介绍跳转
  selfItd: function () {
    wx.navigateTo({
      url: '../self-introduction/self-introduction',
    })
  },
  //用户选择手机照片
  bindViewTap: function (data) {
    var that = this
    //  选择图片和拍照
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album','camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({ avatarUrl: tempFilePaths[0] })
      },
      fail: function (res) {
        console.log("fail...")
      },
      complete: function (data) {
        that.setData({
          active: false
        });
        console.log("完成...")
      }
    })
  }
})