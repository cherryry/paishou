// pages/pay_Commission/pay_Commission.js
var helloData = {
  num: 0,
  num2: 0
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    helloData,
    inputValue: ''
  },
  inputEvent: function (e) {
    this.setData({
      expect: e.detail.value
    })
    wx.setStorage({
      key: "key",
      data: this.data.expect
    })
  },
  inputEvent2: function (e) {
    this.setData({
      expect2: e.detail.value
    })
    wx.setStorage({
      key: "key",
      data: this.data.expect2
    })
    var num;
    var num2;
    var regNum = new RegExp('[0-9]', 'g');
    var rsNum = regNum.exec(this.data.expect);
    if (rsNum !== null) {
      num = parseInt(this.data.expect)
      num2 = parseInt(this.data.expect2)
    }
    this.setData({
      num: num,
      num2: num2
    })
  },
  addMoney: function () {
    var that = this;
    var value1;
    wx.getStorage({
      key: 'key',
      success: function (res) {
        value1 = parseInt(res.data) + 100;
        that.setData({
          inputValue: value1
        })

      }
    })
  },
  addMoney2: function () {
    var that = this;
    var value1;
    wx.getStorage({
      key: 'key',
      success: function (res) {
        value1 = parseInt(res.data) + 100;
        that.setData({
          inputValue2: value1
        })

      }
    })
  },
  delMoney: function () {
    var that = this;
    var value1;
    wx.getStorage({
      key: 'key',
      success: function (res) {
        if (parseInt(res.data) > 100) {
          value1 = parseInt(res.data) - 100;
          that.setData({
            inputValue: value1
          })
        }else{
          console.log('不能小于0')
        }

      }
    })
  },
  delMoney2: function () {
    var that = this;
    var value1;
    wx.getStorage({
      key: 'key',
      success: function (res) {
        if (parseInt(res.data) > 100) {
          value1 = parseInt(res.data) - 100;
          that.setData({
            inputValue2: value1
          })
        } else {
          console.log('不能小于0')
        }

      }
    })
  }

})