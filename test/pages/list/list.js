// pages/list/list.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    $id: 1,
    userInfo: {},
    "list": [
      {
        "index": 1,
        "id": 1,
        "src": "/images/img_portrait.png",
        "title": "雅诗兰黛",
        "middle_title": "小棕瓶系列8.8折优惠",
        "extension_Number": "2000",
        "commission_Number": "0.1"
      },
      {
        "index": 2,
        "id": 2,
        "src": "/images/img_portrait.png",
        "title": "雅诗兰黛",
        "middle_title": "小棕瓶系列8.8折优惠",
        "extension_Number": "2000",
        "commission_Number": "0.5"
      },
      {
        "index": 3,
        "id": 3,
        "src": "/images/img_portrait.png",
        "title": "雅诗兰黛",
        "middle_title": "小棕瓶系列8.8折优惠",
        "extension_Number": "2000",
        "commission_Number": "0.4"
      },
      {
        "index": 4,
        "id": 4,
        "src": "/images/img_portrait.png",
        "title": "雅诗兰黛",
        "middle_title": "小棕瓶系列8.8折优惠",
        "extension_Number": "2000",
        "commission_Number": "0.3"
      },
      {
        "index": 5,
        "id": 5,
        "src": "/images/img_portrait.png",
        "title": "雅诗兰黛",
        "middle_title": "小棕瓶系列8.8折优惠",
        "extension_Number": "2000",
        "commission_Number": "0.2"
      }

    ]
  },


  //点击搜索
  select_area: function () {

    wx.navigateTo({
      url: '../select_area/select_area'
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据  
    app.getUserInfo(function (userInfo) {
      //更新数据  
      that.setData({
        userInfo: userInfo
      })
    })
  },
  userinfo_item: function (e) {
    var index = e.target.dataset.index;
    console.log("----index----" + index)

    console.log('-----id-----' + e.currentTarget.id)
    var app = getApp();
    //设置全局的请求访问传递的参数   
    app.requestId = e.currentTarget.id;
    app.requestIndex = index;

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
  toGrab: function (e) {
    var that = this;
    var $id = e.currentTarget.dataset.id;
    that.setData({
      $id: $id
    })
    wx.navigateTo({
      url: '../grab/grab?id=that.data.$id',
    })
    console.log(that.data.$id)
  }
})