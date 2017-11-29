Page({
  data: {
    flag: false,
    codeDis: false,
    phoneCode: "获取验证码",
    telephone: "",
    codePhone: ""
  },
  phoneinput(e) {
    console.log(e)
    let value = e.detail.value
    //把输入框内的值变动时把值给value这个变量
    console.log(value)
    this.setData({
      telephone: value
    })
    //同时改变data定义的机号码值 = 这个value变量名
    //所以每次改动就会跟着改动这个telephone值
  },
  changeCode() {
    var _this = this
    //  把这个_this指向从新指向
    let telephone = this.data.telephone
    //拿到telephone数据
    if (telephone.length != 11 || isNaN(telephone)) {
      //先进行基本的11位和数字校验
      wx.showToast({
        title: '请输入有效的手机号码',
        icon: "loading"
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
      return
    }
    //如果以上校验不成功就弹提示
    this.setData({
      codeDis: true
    })
    //成功的话我们把codeDis这个数据状态改成不可点击，点击无效
    //发送短信验证码
    RQ.request({  //这里的写法是封装的发送请求，用官方的api一个样
      url: "******************", //请求地址
      data: {
        phone: this.data.telephone
        //把手机号码传给后台
      },
      success: function (res) {
        let data = res.data
        //成功之后拿到返回的数据
        if (data.respCode != "000") {
          //表示返回不成功 000
          _this.setData({
            codeDis: false
          })
          //不成功的话把这个点击按钮的状态再变成可点击的
          wx.showToast({
            title: data.respMessage,
            icon: "loading"
          })
          setTimeout(function () {
            wx.hideToast()
          }, 2000)
          //提示错误信息
        } else {
          //这里表示返回成功的话
          _this.setData({
            phoneCode: 60
          })
          //先把按钮上的值变成60,
          //<text hidden="{{phoneCode == '获取验证码'}}">S</text>经过判断会显示60s
          let time = setInterval(() => {
            let phoneCode = _this.data.phoneCode
            //把phoneCode这个数据赋值给phoneCode这个变量
            phoneCode--
            //每秒进行减1
            _this.setData({
              phoneCode: phoneCode
            })
            //每一秒减一的时候同时再改变phoneCode这个数据
            if (phoneCode == 0) {
              //当phoneCode这个数据变成0的时候
              clearInterval(time)
              //停掉计时
              _this.setData({
                phoneCode: "获取验证码",
                flag: true
              })
              //再把phoneCode这个数据改成 "获取验证码"
              //同时再把 flag这个数据变成true此时就代表已经发送过一次
              //<text hidden="{{flag != true || phoneCode == '获取验证码'}}">重发
              //如果再点击发送的话上面的这个重发就会生效显示 
            }
          }, 1000)
        }
      }
    })

  }



})