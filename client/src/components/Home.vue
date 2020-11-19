<template>
  <div>
          <v-app> <!-- This is important, the v-app acts as a required wrapper around v-data-table -->
              <v-data-table
                v-model="selected"
                :headers="headers"
                :items = "items"
                :single-select="singleSelect"
                item-key="id"
                show-select
                class="elevation-1"
                :items-per-page="100">
<template v-slot:top>

      <v-toolbar flat color="white">
        <v-toolbar-title>Recent Upload - Filter Sort &amp; Save Data</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.year" label="Vehicle Year"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.make" label="Vehicle Make"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.model" label="Vehicle Model"></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.trim" label="Trim"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.cl_price" label="Price"></v-text-field>
                  </v-col>                   
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.miles_stats_mean" label="Average Miles"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.price_stats_mean" label="Variance ($)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.price_variance" label="Variance (%)"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>



    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>


        <template v-slot:item.price_variance="{ item }">
           <td>{{ variancePercent(item.cl_price, item.price_stats_mean)}}% </td>
         </template>

         <template v-slot:item.cl_price="{ item }">
           <td>${{ item.cl_price }}</td>
         </template>

         <template v-slot:item.price_stats_mean="{ item }">
           <td>${{ item.price_stats_mean }}</td>
         </template>


              </v-data-table>
              <hr>
              <button class="btn btn-md btn-primary right" @click="loadData()">Submit Checked Data</button>
        </v-app>
</div>
</template>

<script>
import axios from 'axios';
import APIData from '@/services/APIData.js';

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      pagination: {
        rowsPerPage: 100
      },
      dialog: false,
      singleSelect: false,
      selected: [],
      event: {},
      items: [],
      editedIndex: -1,
      editedItem: {
        year: '',
        make: '',
        model: '',
        trim: '',
        cl_price: 0,
        miles_stats_mean: '',
        price_stats_mean: '',
        price_variance: ''
        
      },
      defaultItem: {
        year: '',
        make: '',
        model: '',
        trim: '',
        cl_price: 0,
        miles_stats_mean: '',
        price_stats_mean: '',
        price_variance: ''
      },
        search: null,
        slots: [
          'body',
          'body.append',
          'body.prepend',
          'footer',
          'header.data-table-select',
          'header',
          'progress',
          'item.data-table-select',
          'item.<name>',
          'no-data',
          'no-results',
          'top',
        ],
        headers: [
                {text: 'ID', value: 'id'},
                {text: 'Year', value: 'year'},
                {text: 'Make', value: 'make'},
                {text: 'Model', value: 'model'},
                {text: 'Trim', value: 'trim'},
                {text: 'Price', value: 'cl_price'},
                {text: 'Average Miles', value: 'miles_stats_mean'},
                {text: 'Variance ($)', value: 'price_stats_mean'},
                {text: 'Variance (%)', value: 'price_variance'},
                {text: 'Actions', value: 'actions', sortable: false }
        ],
    };
  },
      computed: {
      
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      rules() {
      return [
        this.selected.length > 0 || "At least one item should be selected"
      ];
    },
    },
     watch: {

      dialog (val) {
        val || this.close()
      },
    },
  created() {
    this.getEventsData();  // NEW - call getEventData() when the instance is created
  },
  // Critical async method we are importing from APIData.js
  // This will automatically load as the page loads to generate the 'this.events' array with table data
  methods: {
    async getEventsData() {
      APIData.getEvents()
      .then((items => {
          this.$set(this, "items", items);
        }).bind(this));
    },
    // we are enablign the modal 'dialog' box to appear so we can edit items.
      editItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.items.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      // Whatever values we save will be passed in the post route as real values and persist to the database
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.close()
      },
      // This is the post route where we save data to the database in SQL. Credentials are in the utilities directory in their respective files.
    loadData() {
      let self = this; // Critical variable assignment. See router below
      axios
        .post("/loadData", { // process.env.PORT acts as the http://localhost:5000 respectively. We simply just add the actual url path and process.env.PORT takes care of
                             // in heroku
          data: this.selected
        })
        .catch(err => {
          console.log("This is the error from vue.js post /loadData " + err);
        })
        .then(() => {
          self.$router.push('/admin'); // Because axios doesn't recognize "this", we must assign "this", to an outiside variable allowing our desired scope to function
        })
      },
      isEnabled (slot) {
        return this.enabled === slot
      },

      variancePercent(price, mean) {
        let new_variance = mean - price;
        let total = Math.sqrt(new_variance);
        total = parseFloat(total.toFixed(2))
        if(isNaN(total)) {
          return 0;
        } else {
          return total;
        }
      }
}
}
</script>

<style>

</style>