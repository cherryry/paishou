var app = getApp();
var util = require('../../utils/util.js')  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    $id: 1,
    //test
    searchSongList: [], //放置返回数据的数组  
    isFromSearch: true,   // 用于判断searchSongList数组是不是空数组，默认true，空的数组  
    searchPageNum: 1,   // 设置加载的第几次，默认是第一次  
    callbackcount: 10,      //返回数据的个数  
    searchLoading: false, //"上拉加载"的变量，默认false，隐藏  
    searchLoadingComplete: false  //“没有数据”的变量，默认false，隐藏 
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据  
    app.getUserInfo(function (userInfo) {
      //更新数据  
     
    })
    //发起请求
    wx.request({
      url: 'https://sender.ngrok.xiaomiqiu.cn/sender/info/queryAll',
      data: {

      },
      method: "GET",
      success: function (res) {
        var dataList = res.data;
        that.setData({
          searchSongList: dataList
        })
      }
    })
  },

  //搜索，访问网络  
  fetchSearchList: function (res) {
    let that = this;
    let searchPageNum = that.data.searchPageNum,//把第几次加载次数作为参数  
        callbackcount = that.data.callbackcount; //返回数据的个数  
    //访问网络  
    util.getSearchMusic(searchPageNum, callbackcount, function (data) {
      //判断是否有数据，有则取数据 
      var dataList = res.data;
      console.log(dataList,'length') 
      if (data.data.length != 0) {
        let searchList = [];
        //如果isFromSearch是true从data中取出数据，否则先从原来的数据继续添加  
        that.data.isFromSearch ? searchList = data.data : searchList = that.data.searchSongList.concat(data.data)
        that.setData({
          searchSongList: searchList, //获取数据数组  
          zhida: data.data.zhida, //存放歌手属性的对象  
          searchLoading: true   //把"上拉加载"的变量设为false，显示  
        });
        //没有数据了，把“没有数据”显示，把“上拉加载”隐藏  
      } else {
        that.setData({
          searchLoadingComplete: true, //把“没有数据”设为true，显示  
          searchLoading: false  //把"上拉加载"的变量设为false，隐藏  
        });
      }
    })
  },
  //点击搜索按钮，触发事件  
  keywordSearch: function (e) {
    this.setData({
      searchPageNum: 1,   //第一次加载，设置1  
      searchSongList: [],  //放置返回数据的数组,设为空  
      isFromSearch: true,  //第一次加载，设置true  
      searchLoading: true,  //把"上拉加载"的变量设为true，显示  
      searchLoadingComplete: false //把“没有数据”设为false，隐藏  
    })
    this.fetchSearchList();
  },
  //滚动到底部触发事件  
  searchScrollLower: function () {
    let that = this;
    if (that.data.searchLoading && !that.data.searchLoadingComplete) {
      that.setData({
        searchPageNum: that.data.searchPageNum + 1,  //每次触发上拉事件，把searchPageNum+1  
        isFromSearch: false  //触发到上拉事件，把isFromSearch设为为false  
      });
      that.fetchSearchList();
    }
  },

  //保存参数
  toGrab: function (e) {
    var that = this;
    var $id = e.currentTarget.dataset.id;
    that.setData({
      $id: $id
    })
    wx.navigateTo({
      url: '../index/index?id=that.data.$id',
    })
    console.log(that.data.$id)
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
    this.fetchSearchList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})