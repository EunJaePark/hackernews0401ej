import Vue from 'vue'
import Vuex from 'vuex'
import { fetchListItem, fetchCommentItem } from '../api/index.js'

Vue.use(Vuex) 

export const store = new Vuex.Store({
  state: {
    list: [],
    commentList: []
  },
  mutations: {
    SET_LIST(state, list) {  //mutations에서는 위의 state를 자동으로 불러옴. ()속에 적은 state가 위의 state를 불러온것으로, 이름은 마음대로 바꿛 된다.
      state.list = list
    },
    SET_COMMENT(state, commentList) {
      state.commentList = commentList
    }
  },
  actions: {  //actions의 주요 역할은 mutations를 실행시키는 것. mutations가 실행되면 당연히 state도 변경되겠지!
    FETCH_LIST(context, pageNum) {  //NewsView.vue에서 dispatch로 받아온 'news'라는 데이터를 pageNum에 넣은것.
      return fetchListItem(pageNum) 
      .then(res => {
        context.commit('SET_LIST', res.data)
        return res
      })
      .catch(err => {
        console.log(err)
        
      })
    },
    FETCH_COMMENT(context, commId) {
      return fetchCommentItem(commId)
      .then(res => {
        context.commit('SET_COMMENT', res.data)
      })
      .catch(err => {
        console.log(err)
        
      })
    }
  },
  modules: {
  }
})
