export default {
  list: {
    url: 'https://cnodejs.org/api/v1/topics',
    params: (page = 1) => {
      return {
        page: page,
        limit: 1,
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
