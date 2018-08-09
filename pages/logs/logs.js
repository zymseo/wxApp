//logs.js
// const util = require('../../utils/util.js')

import wxUtil from "../../utils/util.js";
console.log(wxUtil);

const app = getApp();

Page({
  data: {

  },

  onLoad: (options) => {
		
  },

  onShow () {
    if (!app.globalData.isLogin) {
      const isFromLogin = wx.getStorageSync('is_from_login');
      if (isFromLogin) {
        wx.switchTab({
          url: '/pages/index/index',
        });
      } else {
        wx.navigateTo({
          url: '/pages/login/login'
        });
      }
    } else {
      wx.showLoading({
        title: '加载中',
      })
      console.log('已登录，正常加载数据！');
    }
  }
  
})
