<script setup >



</script>

<template>
  <div>

  </div>
  <div class="contenedor">
    <div class="titulo">
      <h1 style="font-weight: 600;font-size: 40px;">Mamoru Email</h1>
    </div>
    <div style="display: flex;">
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
    <div class="correos">
      <div class="tabla" v-if="show">
        <!--
          <DataTable ref="table" :options="{select: true, }" class="display" :data="data"
          style="font-size: 10px;  white-space: nowrap;overflow: auto;text-overflow: ellipsis;">
          <thead>
            <tr>
              <th>Subject</th>
              <th>From</th>
              <th>To</th>
            </tr>
          </thead>

        </DataTable>
        -->


        <EasyDataTable :headers="headers" :items="data" :search-field="searchField" :search-value="searchValue"
          @click-row="selectMail($event)" border-cell />
        <!--
          <div  style="display: flex;border-bottom: solid 1px black;">
          <div style="display: flex;">
            <div class="encabezado-tabla">
              <span style="font-size: 20px;">Subject</span>
            </div>
            <div class="encabezado-tabla">
              <span style="font-size: 20px;">From</span>
            </div>
            <div class="encabezado-tabla">
              <span style="font-size: 20px;">To</span>
            </div>
          </div>
          </div>
          <div v-for=" (email, index) in emails" @click="selectMail(email,index)" :key="email.Message_ID"
            :class="{ 'table-active': activeIndex == index }" style="display: flex;width:750px ;">
            <div style="display: flex;border-bottom: solid 1px black;" >
              <div class="encabezado-tabla" >

                <span>{{email.Subject}}</span>
              </div>
              <div class="encabezado-tabla">
                <span>{{email.From}}</span>
              </div>
              <div class="encabezado-tabla">
                <span>{{email.To}}</span>
              </div>
            </div>
          </div>
        -->
      </div>
      <div class="correo">
        <table>

          <tbody>
            <tr v-if="emailSelected.Message_ID">
              <td>
                <div class="label_Email">
                  <h6>Message-ID:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Message_ID}}</span></td>
            </tr>
            <tr v-if="emailSelected.Date">
              <td>
                <div class="label_Email">
                  <h6>Date:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Date}}</span></td>
            </tr>
            <tr v-if="emailSelected.From">
              <td>

                <div class="label_Email">
                  <h6>From:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.From}}</span></td>
            </tr>
            <tr v-if="emailSelected.To">
              <td>
                <div class="label_Email">
                  <h6>To:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.To}}</span></td>
            </tr>
            <tr v-if="emailSelected.Subject">
              <td>
                <div class="label_Email">
                  <h6>Subject:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Subject}}</span></td>
            </tr>
            <tr v-if="emailSelected.Cc">
              <td>
                <div class="label_Email">
                  <h6>CC:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Cc}}</span></td>
            </tr>
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
            <tr v-if="emailSelected.Bcc">
              <td>
                <div class="label_Email">
                  <h6>Bcc:</h6>
                </div>
              </td>
              <td><span>{{emailSelected.Bcc}}</span></td>
            </tr>
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

            <tr>
              <td colspan="2">
                <div style="text-align: justify;">
                  <br>
                  <div v-html="contenEmail"></div>

                </div>
              </td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import DataTable from 'datatables.net-vue3';

export default {
  setup() {



    const headers = [
      { text: "Subject", value: "Subject" },
      { text: "From", value: "From", sortable: true },
      { text: "To", value: "To", sortable: true },

    ];



    return {
      headers
    };
  },
  components: {
    DataTable,

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
    data() {

      let d = []

      this.emails.forEach((e) => {

        let s = ''
        if (e.Subject.length > 20) {
          s = e.Subject.substring(0, 17) + "..."
        } else {
          s = e.Subject
        }
        let f = ''
        if (e.From.length > 20) {
          f = e.From.substring(0, 17) + "..."
        } else {
          f = e.From
        }
        let t = ''
        if (e.To.length > 20) {
          t = e.To.substring(0, 17) + "..."
        } else {
          t = e.To
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

      let mail = $event

      this.emailSelected = this.emails.find(e => {
        if (e.Message_ID == mail.Message_ID) {

          return e
        }
      })



    },

  },
  beforeCreate() {


    this.$store.dispatch("getEmails")



  },
  mounted() {
    console.log(this.$refs)
  }
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
  width: 220px;
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
  width: 80rem;
  max-height: 45rem;
  overflow: auto;
  font-size: 17px;
  border: solid 1px black;
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
</style>
