<script setup >



</script>

<template>
  
  <div class="container" >
    <div class="row mx-auto">
      <h1 style="font-weight: 600;font-size: 40px;">Mamoru Email</h1>
    </div>
    <div class="row mx-auto" style="display: flex;">
      <select class="custom-select custom-select-sm" v-model="searchField" style="width: 200px;margin-right: 1rem;">
        <option selected>Subject</option>
        <option>From</option>
        <option>To</option>
      </select>
      <div class="input-group-sm mb-2">
        <input type="text" class="form-control" v-model="searchValue" aria-label="Text input with dropdown button"
          placeholder="Buscar">
      </div>
    </div>
    <div class=" row" v-if="show">
      <div class=" mx-auto " style="display: flex;">
      <div class="container" >
        <EasyDataTable :headers="headers" :items="data" 
          @click-row="selectMail($event)" border-cell buttons-pagination :rows-per-page="15" />

      </div>

      <div class="container correo " style="margin-left:2rem ;border: solid 1px black;max-width: 45rem; overflow: auto;">

        <table>
          <tbody>
            <!--
              <tr v-if="emailSelected.Message_ID">
              <td>
                <div class="label_Email">
                  <h6>Message-ID:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Message_ID}}</span></td>
            </tr>
            -->
            <tr v-if="emailSelected.Date">
              <td>
                <div class="label_Email">
                  <h6>Date:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Date.trimStart()}}</span></td>
            </tr>
            <tr v-if="emailSelected.From">
              <td>

                <div class="label_Email">
                  <h6>From:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.From.trimStart()}}</span></td>
            </tr>
            <tr v-if="emailSelected.To">
              <td>
                <div class="label_Email" style="vertical-align: text-top;">
                  <h6>To:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.To.trimStart()}}</span></td>
            </tr>
            <tr v-if="emailSelected.Subject">
              <td>
                <div class="label_Email">
                  <h6>Subject: </h6>
                </div>
              </td>
              <td><span>{{emailSelected.Subject.trimStart()}}</span></td>
            </tr>
            <tr v-if="emailSelected.Cc">
              <td>
                <div class="label_Email">
                  <h6>CC:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Cc.trimStart()}}</span></td>
            </tr>
           <!--
              <tr v-if="emailSelected.Mime_Version">
              <td>
                <div class="label_Email">
                  <h6>Mime-Version:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Mime_Version}}</span></td>
            </tr>
            <tr v-if="emailSelected.Content_Type">
              <td>
                <div class="label_Email">
                  <h6>Content-Type:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Content_Type}}</span></td>
            </tr>
            <tr v-if="emailSelected.Content_Transfer_Encoding">
              <td>

                <div class="label_Email">
                  <h6>Content-Transfer-Encoding:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Content_Transfer_Encoding}}</span></td>
            </tr>
          -->
            <tr v-if="emailSelected.Bcc">
              <td>
                <div class="label_Email">
                  <h6>Bcc:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Bcc}}</span></td>
            </tr>
            <!--
            <tr v-if="emailSelected.X_From">
              <td>
                <div class="label_Email">
                  <h6>X-From:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.X_From}}</span></td>
            </tr>
            <tr v-if="emailSelected.X_To">
              <td>
                <div class="label_Email">
                  <h6>X-To:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.X_To}}</span></td>
            </tr>
            <tr v-if="emailSelected.X_Cc">
              <div class="label_Email">
                <h6>X-Cc:</h6>
              </div>
              <td><span>{{emailSelected.X_Cc}}</span></td>
            </tr>
            <tr v-if="emailSelected.X_Bc">
              <div class="label_Email">
                <h6>X-Bcc:</h6>
              </div>
              <td><span>{{emailSelected.X_Bc}}</span></td>
            </tr>
            <tr v-if="emailSelected.X_Folder">
              <td>
                <div class="label_Email">
                  <h6>X-Folder:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.X_Folder}}</span></td>
            </tr>
            <tr v-if="emailSelected.X_Origin">
              <td>
                <div class="label_Email">
                  <h6>X-Origin:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.X_Origin}}</span></td>
            </tr>
            <tr v-if="emailSelected.X_FileName">
              <td style="padding: 0px;">
                <div class="label_Email">
                  <h6>X-FileName:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.X_FileName}}</span></td>
            </tr>
            -->
            <tr style="max-width: 20rem;">
              <td colspan="2">
                <div style="text-align: justify;" >

                  <div v-html="contenEmail"></div>

                </div>
              </td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  setup() {



    const headers = [
      { text: "Subject", value: "Subject", sortable: true, width: 200 },
      { text: "From", value: "From", sortable: true, width: 200 },
      { text: "To", value: "To", sortable: true, width: 200 },

    ];



    return {
      headers
    };
  },
  components: {

  },
  data() {
    return {
      searchValue: '',
      searchField: '',
      emailse: {},
      activeIndex: -1,
      emailSelected: {},
      dt: '',
      drop: false
    }
  },

  computed: {
    ...mapState({
      emails: state => state.emails,

      emailSe() {
        return (this.emailse = this.$store.getters["getEmail"]);
      }
    }),
    contenEmail() {
      if (this.emailSelected.Content != undefined) {
        let c = this.emailSelected.Content.split("\\n")
        let content = ""
        c.forEach(msg => {
          content += msg
          content += "<br>"
        })
        return content
      }
      return ''
    },
    filterData() {
      let data = []
    
     
       try {
        this.emails.forEach(em => {
          if (this.searchField == "To") {
            
            if (em.To.trimStart().substring(0,this.searchValue.length)==this.searchValue){
           
            
           data.push(em)
         }
          } else if (this.searchField == "From") {
            if (em.From.trimStart().substring(0,this.searchValue.length)==this.searchValue){
           
            
           data.push(em)
         }
          } else {
               
            if (em.Subject.trimStart().substring(0,this.searchValue.length)==this.searchValue){
           
            
              data.push(em)
            }
          }
        })
       } catch (error) {
      return data
         
       }

       
    
      return data
    },
    data() {
      if( this.filterData.length==0){
        return []
      }
      let d = []
     
      this.filterData.forEach((e) => {

        let s = ''
        if (e.Subject.length > 27) {
          s = e.Subject.trimStart().substring(0, 25) + "..."
        } else {
          s = e.Subject.trimStart()
        }
        let f = ''
        if (e.From.length > 27) {
          f = e.From.trimStart().substring(0, 25) + "..."
        } else {
          f = e.From.trimStart()
        }
        let t = ''
        if (e.To.length > 27) {
          t = e.To.trimStart().substring(0, 25) + "..."
        } else {
          t = e.To.trimStart()
        }
        //let arr = [s, f, t, e.Message_ID]
        let arr = { "Subject": s, "From": f, "To": t, "Message_ID": e.Message_ID }
        d.push(arr)
      })
      if (d.length == 0) {
        d.push('', '', '')
      }
      return d
    },
    show() {

      if (this.emails.length == 0) {
        return false
      }
      return true
    }

  },
  methods: {
    selectMail($event) {
      try {
        let mail = $event

        this.emailSelected = this.emails.find(e => {
          if (e.Message_ID == mail.Message_ID) {
            console.log(e)
            return e
          }
        })
      } catch (error) {
        console.log(error)

      }
      return {}



    },

  },
  beforeCreate() {


    this.$store.dispatch("getEmails")



  },
 
}
</script>
<style>
@import 'datatables.net-dt';

.text {
  text-overflow: ellipsis;
}

.label_Email {
  overflow: hidden;
  white-space: nowrap;
  width: 65px;
  padding: 0;
  margin: 0;
}

p {
  padding: 0;
  padding-right: 0.5rem;
  margin: 0;
  width: 5rem;
}

td {
  padding: 2px;
  margin: 0px 0px;
}

h6 {
  margin: 0;
  padding-right: 0.5rem;
  font-size: 17px;
  font-weight: 600;
}

.contenedor {
  width: 100%;

}

.titulo {
  width: 100%;

}

.buscador {
  width: 100%;
  background-color: green;
}

.correos {
  width: 100%;

  display: flex;
  max-height: 45rem;
  overflow: auto;

}

.tabla {
  width: 850px;
  margin-right: 2rem;
  margin-left: 2rem;
  max-height: 45rem;
  overflow: auto;
  font-size: 25px;
  overflow-x: hidden;
}

.correo {
  padding: 1rem;
  width: 3000px;
 
  max-height: 47rem;
  border-radius: 5px;
  font-size: 17px;
  border: solid 1px black;
}

.content{
  font-size: 17px;
  border: solid 1px black;
  padding: 2rem;
  width: 670px;
  
}
.encabezado-tabla {

  min-width: 250px;
  max-width: 250px;
  width: 250px;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 1rem;
  margin-bottom: 0.5rem;

  font-size: 15px;
}
.custom-scroll{
  scroll-behavior: smooth;
  
    
  
}
</style>
