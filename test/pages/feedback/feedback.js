// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '异常退出', value: '异常退出' },
      { name: '操作卡不流畅', value: '操作卡不流畅' },
      { name: '不能联网', value: '不能联网' },
      { name: '不能升级版本', value: '不能升级版本' },
      { name: '其他问题请输入', value: '其他问题请输入' }
    ]
  },
  checkboxChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
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