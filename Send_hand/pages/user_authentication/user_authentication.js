// pages/user_authentication/user_authentication.js
var appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boxActive: true,
    boxActive2: true,
    winWidth: 0,
    currentTab: 0,
    winHeight: 0,
    btnName: false,
    btnIdCard: false,
    btnCardz: false,
    btnCardf: false,
    btnCards: false,
    btnAll: false,
    btnAll2:false,
    active: false,
    businessNumber:false,
    avatarUrlz: '/images/btn_upload_front@3x.png',
    avatarUrlf: '/images/btn_upload_back@3x.png',
    avatarUrls: '/images/btn_upload_license@3x.png',
    id: 0,
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
  },
  /**
   * 
   * 滑动函数
   */
  bindChange: function (e) {
    if (this.data.currentTab == 0) {
      var that = this;
      that.setData({
        currentTab: e.detail.current
      });
    } else {
      var that = this;
      that.setData({
        currentTab: e.detail.current,
      });
    }
  },
  /** 
   * 
   * 验证用户名是否输入
  */
  userNameAuth: function (e) {
    var that = this;
    var name = e.detail.value;
    if (name.length != 0) {
      that.setData({
        btnName: true
      })
    }else{
      that.setData({
        btnName: false
      })
    }
    that.userAuth()
  },
  // 验证用户身份证号码
  userIdAuth: function (e) {
    var that = this;
    var idCard = e.detail.value;
    console.log(idCard)
    var ru = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    if (ru.test(idCard) === true) {
      that.setData({
        btnIdCard: true
      })
    }else{
      that.setData({
        btnIdCard: false
      })
    }
    that.userAuth()
  },

  /**
   * 验证商家税号是否输入
   */
  businessNumberAuth: function (e) {
    var that = this;
    var ru = /\d{15}/;
    var businessNumber = e.detail.value;
    if (ru.test(businessNumber)) {
        that.setData({
          businessNumber:true
        })
    }else{
      that.setData({
        businessNumber: false
      })
    }
    that.businessAuth()
  },

  //用户添加身份证图片
  modifyAvatar: function (e) {
    this.setData({
      active: true,
      id: e.target.dataset.id
    })
  },
  isShow: function () {
    this.setData({
      active: false
    })
  },
  bind: function (e) {
    console.log(e)
  },
  //用户选择手机照片
  bindViewTap: function (data) {
    var that = this
    //  选择图片和拍照
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
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
        console.log(that.data.id)
        if (that.data.id == 1) {
          that.setData({ avatarUrlz: tempFilePaths[0], btnCardz: true })
          that.userAuth()
        } else if (that.data.id == 2) {
          that.setData({ avatarUrlf: tempFilePaths[0], btnCardf: true })
          that.userAuth()
        } else if (that.data.id == 3) {
          that.setData({ avatarUrls: tempFilePaths[0], btnCards: true })
          that.businessAuth()
        }
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
  },
  /**
  * 
  * 判断用户btn是否可按
  */
  userAuth: function () {
    var that = this;
    var btnName = that.data.btnName;
    var btnIdCard = that.data.btnIdCard;
    var btnCardz = that.data.btnCardz;
    var btnCardf = that.data.btnCardf;
    console.log(btnName, btnIdCard, btnCardz, btnCardf)
    if (btnName == true && btnIdCard == true && btnCardz == true && btnCardf == true){
      that.setData({
        btnAll: true
      })
    }else{
      that.setData({
        btnAll: false
      })
    }
    that.businessAuth()
  },
    /**
  * 
  * 判断商家btn是否可按
  */
  businessAuth: function () {
    var that = this;
    var btnName = that.data.btnName;
    var businessNumber = that.data.businessNumber;
    var btnCards = that.data.btnCards;
    console.log(btnName, businessNumber, btnCards)
    if (btnName == true && businessNumber == true && btnCards == true) {
      console.log('ok')
      that.setData({
        btnAll2: true
      })
    } else {
      that.setData({
        btnAll2: false
      })
    }
  },
  /**
   * 
   * 点击提交按钮验证用户信息
   */
})