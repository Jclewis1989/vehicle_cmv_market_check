import axios from "axios"

export default {
  async getEvents() {
    let res = await axios.get("/scrape"); //|| "http://localhost:5000/scrape"); // "https://cmv-cole.herokuapp.com/scrape" || 
    /*
    let results = res.data.map(function(u) {
      let mean = u.cl_price_stats_mean
      let price = u.cl_price
      price = price.replace(/\D/g,'');
      let variance = mean - price
      let total = Math.sqrt(variance)
      total = parseFloat(total.toFixed(2))
      if(isNaN(total)) {
          total = 0
          u.price_variance = total;
      } else { 
        total;
        u.price_variance = total;
      }
      return u;
    })
    */
    return res.data;
  }
  /*
  async getEventSingle(eventId) {
    let res = await axios.get("http://localhost:8000/events/" + eventId);
    return res.data;
  }
  */
}