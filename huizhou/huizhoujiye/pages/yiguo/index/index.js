// pages/yiguo/index/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  onGotUserInfo: function (e) {
    console.log(e.detail.userInfo)
    var that = this;
    //获取必要的变量
    var userInfo = e.detail.userInfo;
    var appId = app.globalData.g_appID;
    var appSecret = app.globalData.g_appSecret;
    wx.login({
      success: function (res) {
        console.log(res);
        wx.setStorage({
          key: 'userInfo',
          data: userInfo,
        })
        var code = res.code;//获取code这个code是实时变化的
        if (code) {
          wx.switchTab({
            url: '../indexx/index',
          })
        }
       
      },
      fail: function () {
        console.log('登录失败！');
      }
    })
  },

  getOpenId: function (code, appId, appSecret, userInfo) {
    var that = this;
    var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + appSecret + '&js_code=' + code + '&grant_type=authorization_code';
    wx.request({
      url: url,
      method: 'GET',
      data: '',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.switchTab({
          url: '../indexx/index',
        })
      },
      fail: function () {
        console.log('请求openID失败');
      }
    })
  },
})