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
      console.log(state.emails)

    }

  },
  actions: {
    async getEmails({commit}) {
      for (let i = 0; i < 1; i++) {
        await axios.get(`http://localhost:9001/getEmails/${i}`)
        .then(res => {
          console.log((res.data))
          let email = (res.data)
          commit("getEmails", email.hits.hits)
        }
        )
        .catch(Error => {
          console.log(Error)
        })
        
      }
      
     /* for (let i = 0; i < 7; i++) {
     
        let q = {
        search_type: "alldocuments",
        from: i*10000,
       max_results: 10000,
        _source: []

      }
      
      axios.post('http://localhost:4080/api/olympics/_search', q, {
        auth: {
          username: 'admin',
          password: '0208Mavl'
        }
      })
        .then(res => {
          console.log(res.data)
        })
      
       

      }*/

    }
  },
  modules: {
  }
})
