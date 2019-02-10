var app = getApp()
Page({
  data:{
    detailgood:{},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    listgood: app.appData.listgoods,
    select1:1,
    select2:0,
    select3:0,
    selectm: 1,
    num:0,//数量为0
    money:0,
    wintype:"A",//默认为第一种酒
    pricetm:0,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var  id=options.id;
    let list=this.data.listgood;
    var that=this;
    list.forEach(function(arr){
      console.log(arr.id.toString())
      console.log(id)
      if(id==arr.id){
        that.setData({
          detailgood:arr
        })
      }
      console.log(that.data.detailgood)
    })
    console.log(this.data.detailgood)
  },

  onReady:function(){
 
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  selec1:function(){
    var that=this;
    that.setData({
      select1:1,
      select2: 0,
      select3: 0,
      wintype: "A",
      pricetm: that.data.detailgood.price1,
      selectm:1,
    })
    that.setData({
      money: that.data.pricetm * that.data.num,
    })
  },

  selec2:function(){
    var that = this;
    that.setData({
      select1: 0,
      select2: 1,
      select3: 0,
      pricetm: that.data.detailgood.price2 ,
      wintype: "B",
      selectm:2,
    })
    that.setData({
      money: that.data.pricetm * that.data.num,
    })
  },
  selec3:function(){
    var that = this;
    var ptem =0;
    that.setData({
      select1: 0,
      select2: 0,
      select3: 1,
      wintype: "C",
      pricetm: that.data.detailgood.price3,
      selectm:3,
    })
    that.setData({
      money: that.data.pricetm * that.data.num,
    })
  },

  addnum:function(){
    var that=this;
    console.log("这里是+")
    var selectm=that.data.selectm
    if (selectm == 1) {
      that.setData({
        pricetm: that.data.detailgood.price1,
      })
    } else if (selectm == 2) {
      that.setData({
        pricetm: that.data.detailgood.price2,
      })
    } else if (selectm == 3) {
      that.setData({
        pricetm: that.data.detailgood.price3,
      })
    }
    if(that.data.num == 20){
      that.setData({
        num: 20,
        money: that.data.pricetm * that.data.num,
      })
    }
    else{
      console.log(that.data.numtm)
      that.setData({
        num: that.data.num+1,
      })
      that.setData({
        money: that.data.pricetm * that.data.num
      })
    }
    
    console.log(that.data.num)
    console.log(that.data.money)
  },

  delnum: function () {
    var that = this;
    var selectm = that.data.selectm
    console.log(that.data.pricetm)
    console.log(that.data.num)
    if (selectm == 1) {
      that.setData({
        pricetm: that.data.detailgood.price1,
      })
    } else if (selectm == 2) {
      that.setData({
        pricetm: that.data.detailgood.price2,
      })
    } else if (selectm == 3) {
      that.setData({
        pricetm: that.data.detailgood.price3,
      })
    }
    console.log(that.data.num)
    if (that.data.num == 0) {
      that.setData({
        num: 0,
      })
      // 这里的setData必须有先后，不然会出错
      that.setData({
        money: that.data.pricetm * that.data.num
      })
    }
    else {
      that.setData({
        num: that.data.num - 1,
      })
      that.setData({
        money: that.data.pricetm * that.data.num
      })
    }
    console.log(that.data.num)
  },

  purchase: function () {
    var that = this
    console.log(that.data.detailgood)
    console.log(that.data.detailgood.id)
    console.log("/pages/yiguo/myadress/myadress?id=" + that.data.detailgood.id + "&wintype=" + that.data.wintype + "&money=" + that.data.money + "&num=" + that.data.num)
    wx.navigateTo({
url: "/pages/yiguo/myadress/myadress?id=" + that.data.detailgood.id + "&wintype=" + that.data.wintype + "&money=" + that.data.money+"&num="+that.data.num
    })
  },
})
