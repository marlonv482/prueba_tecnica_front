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
    getEmails(state,emails){
     
      emails.forEach(e=>{
        
          state.emails.push(e._source)  
      })
      
    }
  
  },
  actions: {
    getEmails({ commit }) {
      axios.get('http://localhost:9000/getEmails')
      .then(res => {
       let email=JSON.parse(res.data)
       
        
        commit("getEmails",email.hits.hits)
      }
      )

    }
  },
  modules: {
  }
})
