const app = getApp()

Page({
  data: {
    content: [],
    hidden: false
  },
  onLoad: function () {
    var that = this

    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      method: 'GET',
      success: function (res) {
        that.setData({
          content: res.data,
          hidden: true
        })
      }, fail: function (res) {

      }, complete: function () {

      }
    })
  },

  onTouch: function (event) {
    console.log(event.currentTarget.id);
    wx.navigateTo({
      url: '../post/post?id=' + event.currentTarget.id,
    })
  },

  onPullDownRefresh: function () {
    var that = this

    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      method: 'GET',
      success: function (res) {
        console.log(res)
        that.setData({
          content: res.data,
          hidden: true
        })
      }, fail: function (res) {

      }, complete: function () {

      }
    })
  }
})
