import API from '../api/api'
import axios from 'axios'

function beg (api) {
  return axios.get(api.url, {
    params: api.params()
  })
}

export default {
  actions: {
    getList () {
      return beg(API.list)
    },
    getLists () {
      return API.lists
    }
  }
}
