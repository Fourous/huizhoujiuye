var app = getApp()
Page({
  data:{
    current: 0,
    listgoods:[],
    listother:[],
  swiper:{
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
      }
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },
  onLoad:function(options){

    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var tempArr = new Array()
    var temp=new Array()
    for(let i=0;i<9;i++){
      // var goods=that.data.listgoods[i]
      tempArr[i] = app.appData.listgoods[i]
    };
    for (let j = 9; j <48; j++) {
      // var goods=that.data.listgoods[i]
      temp[j-9] = app.appData.listgoods[j]
    };
    that.setData({
      listgoods: tempArr,
      listother:temp
    })
 console.log(that.data.listgoods),
      console.log(that.data.listother)

    //ajax请求数据
    // wx.request({
    //         url: 'http://www.htmlk.cn/json-test/lists.json',
    //         header: {
    //             'Content-Type': 'application/json'
    //         },
    //         success: function(res) {
    //            switch1(res.data);
    //            console.log(res.data);
    //            that.setData({
    //                listgoods:res.data
    //            });
    //         }
    //     })
    //对商品进行价格排序
    // console.log(this.data.listgoods);
    // switch1(this.data.listgoods);
    // function switch1(odata){
    //     for(var i=0;i<odata.length-1;i++){
    //              //console.log(odata[i].price);
    //             for(var j=0;j<odata.length-i-1;j++){
    //                    // console.log(parseInt(odata[j].price)+"-----"+parseInt(odata[j+1].price));
    //               if(parseInt(odata[j].price)>parseInt(odata[j+1].price)){
    //                 var temp=odata[j];
    //                     odata[j]=odata[j+1];
    //                     odata[j+1]=temp;
    //               }
    //             }
    //     }
    // }    
  },
  //详情页跳转
  lookdetail:function(e){
    var lookid=e.currentTarget.dataset;
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url:"/pages/yiguo/detail/detail?id="+lookid.id
    })
  },
  switchSlider:function(e){
    this.setData({
      current:e.target.dataset.index
    })
  },
  changeSlider:function(e){
    this.setData({
      current: e.detail.current
    })
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
  }

})
