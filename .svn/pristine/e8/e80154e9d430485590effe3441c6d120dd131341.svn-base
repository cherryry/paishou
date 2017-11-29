
//获取应用实例  
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
var app = getApp()
Page({
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    scan: true,
    find: false,


    latitude: 0,//纬度  
    longitude: 0,//经度  
    speed: 0,//速度  
    accuracy: 18,//位置精准度  
    markers: [],
    covers: [],

  },
  onLoad: function (options) {
    var that = this;
    qqmapsdk = new QQMapWX({
      key: 'IGFBZ-NE3WS-CKROM-663R2-IEUOE-4BF34'
    }); 
    
    //获取code和用户信息
    console.log('onLoad')
    var that = this
    //登录

    
    wx.login({
      success: function (res_f) {
        wx.getUserInfo({
          success: function (res) {             
            var userInfo = res.userInfo
            var nickName = userInfo.nickName
            var avatarUrl = userInfo.avatarUrl
            var gender = userInfo.gender //性别 0：未知、1：男、2：女
            var province = userInfo.province
            var city = userInfo.city
            var country = userInfo.country
            console.log(res)
            if (res_f.code) {
              //发起网络请求
              wx.request({
                url: 'https://sender.ngrok.xiaomiqiu.cn/sender/user/code',
                data: {
                  code: res_f.code,
                  nickname: nickName,
                  gender: gender,
                  city: city,
                  province: province,
                  country: country,
                  headimgurl: avatarUrl
                },
                method: "POST",
                header: {
                  'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错
                },
                success: function (res){
                  console.log(res.data)
                }
              })
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    });

    /** 
     * 获取系统信息 
     */

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });

    /** 
     * 获取用户地理位置
     */
    wx.getSetting({
      success: (res) => {        
        res.authSetting = {
          "scope.userInfo": true,
          "scope.userLocation": true
        }
      }
    })

   

    //自动获取当前位置
    that.getlocation();    

  },



  //点击我的
  login:function(){
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        console.log(res);
      }
    }) 
  },
 
  profile: function () {
    wx.navigateTo({
      url: '../profile/profile'
    })
  },

  //派单列表
  list: function () {
    wx.navigateTo({
      url: '../list/list'
    })
  },

  getlocation: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(res);
        that.setData({
          latitude: latitude,
          longitude: longitude,
          markers: [{
            latitude: latitude,
            longitude: longitude,
            name: '成都市政府',
            desc: '我现在的位置' 
          }],
          controls: [{
            id: 1,
            iconPath: '/images/icon_position.png',
            position: {
              left: 0,
              top: 0,
              width: 50,
              height: 50
            },
            clickable: true
          }],
          covers: [{
            latitude: latitude,
            longitude: longitude,
            iconPath: '/images/icon_position.png',
            rotate: 10
          }]
        })
      },

    })
  }
})

