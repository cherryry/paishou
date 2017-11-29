// pages/about_rrp/about_rrp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      nodes1: [{
        name: "ul",
        attrs: {
          class: "red"
        },
        children: [{
          name: "li",
          attrs: {
            style: "color:#576B95",
            class: "red"
          },
          children: [{
            type: "text",
            text: '《人人派小程序法律条款》'
          }],
        }]
      }],
      nodes2: [{
        name: "ul",
        attrs: {
          class: "red"
        },
        children: [{
          name: "li",
          attrs: {
            style: "color:#576B95",
            class: "red"
          },
          children: [{
            type: "text",
            text: '意见反馈',
          }],
        }]
      }]
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
      toFeedback: function () {
        wx.navigateTo({
          url: '../feedback/feedback',
        })
      }
})