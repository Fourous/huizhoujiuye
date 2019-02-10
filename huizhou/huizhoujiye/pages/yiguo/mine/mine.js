var app = getApp()
Page({
  data:{
     userInfo: {},
     mine_list:[ 
          {
            "id":"1",
            "pic_url": "/images/icons/iocn_home_01.png",
            "title":"公司简介",
          },
          {
            "id": "2",
            "pic_url": "/images/icons/iocn_home_02.png",
            "title":"拨打电话",
          },
          {
            "id": "3",
            "pic_url": "/images/icons/iocn_home_03.png",
            "title":"我的客服",
          },
      //  {
      //    "id": "4",
      //    "pic_url": "/images/icons/iocn_home_03.png",
      //    "title": "收货地址",
      //  }
          
        ],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          userInfo: res.data
        })
      },
    })
  },

  
  onReady:function(){
   
    // 页面渲染完成
  },
  onShow:function(){
    if(this.data.userInfo==''){
      this.setData({
      'item.signinHidden':false
      })
    }

  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  lookurl1:function(){
    wx.navigateTo({
      url: '../mygoods/mygoods',
    })
  },
  lookurl2: function () {
    wx.makePhoneCall({
      phoneNumber: '‭13951092103',
    })
  },
  // lookurl3: function () {

  // },
//   lookurl:function(e){
//     console.log(e)
//     //我的订单
//     if(e.currentTarget.dataset.id=="1"){
// wx.navigateTo({
//   url: '../mygoods/mygoods',
// })
//     }
//   else if (e.currentTarget.dataset.id == "2"){
// // wx.navigateTo({
// //   url: '../myadress/myadress',
// // })
// wx.makePhoneCall({
//   phoneNumber: '‭13951092103',
// })
//     }

//   }
})