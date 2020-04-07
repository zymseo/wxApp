// pages/partial-refresh/partial-refresh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: [
      { id: 0, name: 'zhangsan', age: 18 },
      { id: 1, name: 'lisi', age: 19 },
      { id: 2, name: 'wangwu', age: 20 },
      { id: 3, name: 'zhaoliu', age: 21}
    ]
  },

  onChangeAge (e) {
    const {idx} = e.currentTarget.dataset;
    const age = `users[${idx}].age`
    this.setData({
      [age]: Math.random()
    })
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

  }
})