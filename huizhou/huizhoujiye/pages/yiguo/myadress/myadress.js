// pages/yiguo/myadress/myadress.js
var app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    money:0,
    openid:null,
    wintype:'',
    sessionkey:null,
    id:'',
    name:'',
    tel:'',
    adress:'',
    wechat:'',
    msg:'',
    num:0,
    image:'',
    typeis:'',
    winname:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that=this
  console.log(options.id)
    console.log(options)
  var id=options.id-1
    console.log(app.appData.listgoods[id].id)
    console.log(app.appData.listgoods[id].name)
  that.setData({
    money: options.money,
    wintype:options.wintype,
    id: app.appData.listgoods[id].id,
    num:options.num,
    image: app.appData.listgoods[id].pic_mask,
    winname: app.appData.listgoods[id].name
  })
    if (that.data.wintype=="A"){
      that.setData({
        typeis:"500ML单瓶"
      })
    } else if (that.data.wintype == "B"){
      that.setData({
        typeis: "500ML两瓶(送精美礼袋)"
      })
    } else if (that.data.wintype == "C"){
      that.setData({
        typeis: "500ML×6瓶(整箱6瓶装)"
      })
  }
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
  name:function(e){
    console.log(e)
    console.log(e.detail.value)
    this.setData({
      name:e.detail.value
    })
  },
  tel:function(e){
    console.log(e)
    console.log(e.detail.value)
    this.setData({
      tel: e.detail.value
    })
  },
  adress:function(e){
    console.log(e)
    console.log(e.detail.value)
    this.setData({
      adress: e.detail.value
    })
  },
  purchase:function(){
    var that = this
    that.setData({
      msg: that.data.id+that.data.wintype+that.data.name+that.data.tel+that.data.adress
    })
    console.log("显示信息")
    console.log(that.data.msg)
    if (that.data.id != '' && that.data.name != '' && that.data.tel != '' && that.data.adress!=''){
      wx.login({
        success: function (res) {
          console.log(res)
          wx.request({
            url: 'https://www.wanyangculture.com/php/payone/getopenid.php',
            data: {
              code: res.code,
            },
            method: 'POST',
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
              console.log("获取openid")
              console.log(res.data)
              var listid = res.data
              console.log(listid)
              that.setData({
                openid: listid[0],//获取到的openid
                sessionkey: listid[1],//获取到session_key 
              })
              console.log(that.data.sessionkey)
              console.log(that.data.openid)
              console.log(listid[0])
              console.log(that.data.money)
              console.log(that.data.msg)
              wx.request({
                url: 'https://www.wanyangculture.com/php/payone/payfee.php',
                method: "POST",
                data: {
                  id: listid[0],
                  fee: that.data.money*100,
                  body: that.data.msg
                },
                header: {//请求头
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                success: function (res) {
                  console.log(res)
                  console.log("payment前面")
                  wx.requestPayment({
                    timeStamp: res.data.timeStamp,
                    nonceStr: res.data.nonceStr,
                    package: res.data.package,
                    signType: 'MD5',
                    paySign: res.data.paySign,
                    success: function (res) {
                      console.log(res)
                      console.log("付款成功")
                    },
                    complete: function (res) {
                      console.log("修改数据")
                      console.log(res)

                    }
                  })
                },
                fail: function (err) {
                  console.log(err)
                },//请求失败
                complete: function () { }//请求完成后执行的函数
              })

            }
          })
        }
      })
    }else{
      wx.showToast({
        title: '您必填项缺失',
        icon: '../image/erro.png',
        image: '../image/erro.png',
        duration: 1500,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }

  }
})