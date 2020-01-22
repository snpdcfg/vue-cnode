export default {
  list: {
    url: 'https://cnodejs.org/api/v1/topics',
    params: (page = 1) => {
      return {
        page: page,
        limit: 20,
        _: new Date().getTime()
      }
    }
  },
  rank_list: {
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
    params: () => {
      return {
        format: 'jsonp',
        g_tk: 5381,
        uin: 0,
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        _: new Date().getTime()
      }
    },
    jsonp: 'jsonpCallback'
  }
}
