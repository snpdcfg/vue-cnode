export default {
  list: {
    url: 'https://cnodejs.org/api/v1/topics',
    // 本来是想分页的，但是接口好像没有
    params: (page = 1) => {
      return {
        page: page,
        limit: 20,
        _: new Date().getTime()
      }
    }
  },
  lars: {
    url: 'https://cnodejs.org/api/v1/topic/'
  },
  user: {
    url: 'https://cnodejs.org/api/v1/user/'
  }
}
