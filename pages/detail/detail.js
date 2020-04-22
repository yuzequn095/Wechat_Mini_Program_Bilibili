// pages/detail/detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    videoInfo: null,
    othersList: [],
    commentData: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },

    // 获取视频详情
    getCurrentVideo(videoId){
      const that = this;
      wx.request({
        url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id='+videoId,
        success(res){
          //console.log(res);
          if(res.data.code === 0) {
            that.setData({
              videoInfo: res.data.data.videoInfo
            });
          }
        }
      })
    },

    // 获取推荐视频
  getOthersList(videoId){
    const that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id='+videoId,
      success(res){
        if(res.data.code === 0) {
          that.setData({
            othersList: res.data.data.othersList
          });
        }
      }
    });
  },

  // 获取评论数据
  getCommentList(videoId){
    const that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id='+videoId,
      success(res){
        if(res.data.code === 0) {
          that.setData({
            commentData: res.data.data.commentData
          });
        }
      }
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})