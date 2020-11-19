const express = require('express');
const router = express.Router();
const pool = require('../../utilities/database');

/*
=============================================================================
We select every record from the vehicles table and we res.send the results.
This is so vue.js can get the results from res.send and insert them
flawslessly into its components for CRUD operations
=============================================================================
*/
router.get('/cmv/admin', (req, res, next) => {
  pool.query('SELECT * FROM vehicles', function (err, results, fields) {
    if (err) throw new Error(err)
    res.send(results);
  })
})

/*
=============================================================================
We are selecting all the vehicle information from Vuetify data tables.
We are inserting into SQL only the checked vehicles and their data.
If all is well, we render a success page specific to this route
"success_sql".
=============================================================================
*/
router.post('/loadData', (req, res, next) => {
    let values = [];
    for(let data in req.body.data) {
            var result = Object.keys(req.body.data[data]).map(function(key) {
            return [req.body.data[data][key]];
          });       
          let arr = result.map(s => {
              let all = s.join(' ');
              return all;
          })
          values.push(arr);
        }
        console.log(values);
        pool.query('INSERT INTO vehicles (index_num, id, year, make, model, trim, cl_price, cl_url, miles_stats_mean, price_stats_mean, price_variance) VALUES ?', [values], function (err, results, fields) {
            if (err)throw new Error(err)
            // Do something?          
})
res.redirect('/');

});

/*
=============================================================================
This is the route to delete a vehicle or vehicles in vue.js
We are assigning the variable id to req.body.cole_id
This is the same unique identifier we use to sort the vuetify data tables
Simple query: We select all the vehicles with that specific id in the
post route from axios in vue.js, and delete them from the database
=============================================================================
*/
router.post('/deleteVehicle', (req, res, next) => {
  let id = req.body.id;
  console.log("This is the server side id " + id);
  pool.query(`DELETE FROM vehicles WHERE id=?`, [id], function (err, results, fields) {
    if (err)throw new Error(err)
    // Do something?     
  })
  res.redirect('/');
})

module.exports = router;