import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    emailSelected: '',
    emails: [

    ]
  },
  getters: {
    getEmail(state) {

      let email = state.emails.forEach(e => {
        console.log(e)
        if (e.Message_ID == state.emailSelected) {
          return e
        }
      })
      return email
    }
  },
  mutations: {
    selectEmail(state, id) {
      state.emailSelected = id
    },
    getEmails(state, emails) {

     emails.forEach(e => {

         state.emails.push(e._source)
      })

    }

  },
  actions: {
    async getEmails({ commit }) {

      for (let i = 0; i < 1; i++) {
        await axios.get('http://localhost:9000/getEmails', {
          params: {
            id: (i * 10000+1),
          }
        })
          .then(res => {
            let email = JSON.parse(res.data)
            console.log(email)

            commit("getEmails", email.hits.hits)
          }
          )
          

      }


    }
  },
  modules: {
  }
})
