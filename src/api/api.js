export default {
  list: {
    url: 'https://cnodejs.org/api/v1/topics',
    params: (page = 1) => {
      return {
        page: page,
        limit: 3,
        _: new Date().getTime()
      }
    }
  },
  lars: {
    url: 'https://cnodejs.org/api/v1/topic/'
  }
}
