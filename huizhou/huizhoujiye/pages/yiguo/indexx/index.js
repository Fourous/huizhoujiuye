//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    toView: "",
    motto: 'MiHome_Store',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    newgoods: [
      {
        "id":1,
        "hg_pic": "../image/ch2.jpg"
      },
       {
         "id": 2,
        "hg_pic": "../image/zj2.jpg"
      },
       {
         "id":3,
        "hg_pic": "../image/by3.jpg"
      }
    ],
    othergoodniew:[
      {
        "id": 49,
        "hg_pic":"../image/dzj_2.jpg"
      },
      {
        "id": 49,
        "hg_pic": "../image/dzj_1.jpg"
      },
      {
        "id": 49,
        "hg_pic": "../image/dzj_3.jpg"
      }
    ],
    othergoods1:[
      {
        "id": 20,
        "hg_pic": "../image/zgm1.jpg"
      },
      {
        "id": 5,
        "hg_pic": "../image/zgh1.jpg"
      },
      {
        "id": 6,
        "hg_pic": "../image/zgl1.jpg"
      }
    ],
    othergoods2: [
      {
        "id": 7,
        "hg_pic": "../image/jwzz1.jpg"
      },
      {
        "id": 8,
        "hg_pic": "../image/jwzz2.jpg"
      },
      {
        "id": 9,
        "hg_pic": "../image/zgm1.jpg"
      }
    ],
    othergoods3: [
      {
        "id": 10,
        "hg_pic": "../image/zgh2.jpg"
      },
      {
        "id": 11,
        "hg_pic": "../image/zgh1.jpg"
      },
      {
        "id": 12,
        "hg_pic": "../image/zgm3.jpg"
      }
    ],
    hotgoods: [],
    // 这里是首页最顶的滑动图片，这只是图片，没有其他链接，可以随便改
    banner_list: [
      {
        "banner": [
          {
            "pic_url": "../image/zj4.jpg",
          },
          {
            "pic_url": "../image/by1.jpg",
          },
          {
            "pic_url": "../image/by4.jpg",
          },
          {
            "pic_url": "../image/zj3.jpg",
          }
        ]
      },
      {
        "banner": []
      }
    ]
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },
  scroll: function (e) {
    if (this.data.toView == "top") {
      this.setData({
        toView: ""
      })
    }
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tap: function () {
    this.setData({
      toView: "top"
    })
  },
  onLoad: function () {

    //调用应用实例的方法获取全局数据
    var that = this;
    //通过原生调取数据
    wx.request({
      url: 'https://wxapi.hotapp.cn/api/get',
      data: {
        appkey: 'hotapp25781921',
        key: 'hot1'
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function (a) {
        console.log(a)
        return "function" == typeof b && b(a.data)
      },
      fail: function (err) {
        console.log(err)
        return "function" == typeof b && b(!1)
      }
    })
    //fecth调用
    var fekchobj = {
      R_GET: function (url, params) {
        if (params) {
          let paramsArray = []
          Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
          if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')

          } else {
            url += '&' + paramsArray.join('&')
          }
        }

        return new Promise(function (resolve, reject) {
          fetch(url)
            .then((response) => {
              if (response.ok) {
                return response.json()

              } else {
                reject('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
              }
            })
            .then((response) => {
              if (response && response.status) {
                resolve(response)//response.status 是与服务器端的约定，非0就是错误
              } else {
                reject(response)//response也是与服务器端的约定
              }
            })
            .catch((err) => {
              reject(_parseErrorMsg(err))
            })
        })
      }
    }
    //监测错误
    try{
     
    }catch(e){
      console.log(e)
    }
   console.log(fekchobj)
    


  },
  hotde:function(e){
    var id = e.currentTarget.dataset.id;
    console.log(e)
    wx.navigateTo({
      url: '/pages/yiguo/detail/detail?id='+id,
    })
  }
})
