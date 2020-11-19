<template>
  <div>
      <div class="container">
          <h1>Saved Vehicles</h1>
<div class="row">

  <div v-for="item in info" :key="item.id">
  <div class="col-lg-12">
    <div class="card">
    <div class="card-body">
            <p class="card-title"><strong>{{item.id}}</strong> - <strong>{{item.year}} {{item.make}} {{item.model}}</strong></p>
            <hr>
            <p class="card-text"><strong>Craiglist Price:</strong> ${{item.cl_price}}</p>
            <p class="card-text"><strong>Mile Average:</strong> {{ item.miles_stats_mean }}</p>
            <p class="card-text"><strong>Variance:</strong> ${{ item.price_stats_mean }}</p>
            <p class="card-text"><strong>Variance:</strong> {{ variancePercent(item.cl_price, item.price_stats_mean) }}%</p>
  </div>
  <hr>
    <div class="card-body">
    <!-- <button v-on:click="editVehicle(item.id)" class="card-link"><i class='fas fa-edit'></i></button> -->
    <a :href="item.cl_url" target="_blank"><button class="card-link"><i class='fas fa-link'></i></button></a>
    <button v-on:click="deleteVehicle(item.id)" class="card-link float-right"><i class='fas fa-trash'></i></button>
  </div>
  </div>
</div>
  </div>
  </div>
</div>
        </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: [],
      cole_id: '',
      errors: []
    }
  },
  components: {
  },
  created() {
    this.respData()
  },
  methods: {
        respData() {
          axios
            .get("/cmv/admin") // 'https://localhost:5000/cmv/admin'
            .then(response => {
              this.info = response.data;
              return response;
            })
            .catch(err => {
              if(err) {
                this.errors = err;
              }
            })
      },
      deleteVehicle(id) {
        let self = this;
        axios
          .post("/deleteVehicle", {
            id: id
          })
          .catch(err => {
            console.log("This is the error form deleting a vehicle " + err);
          })
          .then(() => {
            self.$router.go();
          })
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