const express = require('express');
const axios = require('axios');
const Calc = require('../middleware/functions');
const csv = require('csv-parser');
const promise = require('bluebird');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage : storage }).single('file');
const streamifier = require('streamifier');
let vehicle_data;
let results = [];

/*
=============================================================================
Home page redirect to assist in the "get /home" route
=============================================================================
*/
router.get('/', (req, res, next) => {
    res.redirect('/home');
});

/*
=============================================================================
Basic home route which will render the CSV file upload form
=============================================================================
*/
router.get('/home', (req, res, next) => {
    res.render('../server/views/client/home');
});

/*
=============================================================================
We are sending the response data so axios can retrieve it with a get request
and render in vue component
=============================================================================
*/
router.get('/scrape', (req, res, next) => {
  res.send(vehicle_data);
})

/*
=============================================================================
1. Upload CSV Data
2. Grab rows in CSV and modify the data
3. Implement the CSV row data as parameters into the URL string
4. Use axios to call multiple URLS in a get request
5. Combine two objects into one array and return this to the "get /scrape"
route
6. Return a success page in clients/views/success.ejs if upload and
Marketcheck API have functioned correcty
TASKS:
 - Work on Bluebird promise library to handle errors in this promise
 - If an error is thrown, do NOT stop calling the other URL strings 
   with their respective parameters
=============================================================================
*/
router.post('/scrape', upload, (req, res, next) => {
  // Read the correct file path from the form upload directory on an individuals computer
  streamifier.createReadStream(req.file.buffer)
    .pipe(csv())
    .on('data', (row) => {
      // Data comes in as an object. We must push the object into an array (outside of router scope)
       results.push(row);
    })
    .on('end', () => {
      // allUrls is an array to capture the URLS from mapping below.
      // We will eventually send a get request promise with axios to each URL
      allUrls = [];
        let total = results.map(function(d, index) {
                    let values = {
                      // Using index_num with Object.assign() towards the end of this route
                      // We will use index_num to join two objects together as a common identifier
                      index_num: index,
                      // Generating a unique identifier for Vuetify data tables to sort by
                      // (duplicates end up selecting each other and we end up with multiple
                      // checkboxes checked after one is selected)
                      id: Calc.genNum(index),
                      // Year Make Model and Trim are generally 0, 1, 2, 3 in the CSV upload
                      // So we treat each item in an array as such to grab those specific values
                      year: d['Title_name'].split(' ')[0],
                      make: d['Title_name'].split(' ')[1],
                      model: d['Title_name'].split(' ')[2],
                      trim: d['Title_name'].split(' ')[3] || 'N/A',
                      cl_price: d['Title_Price'].replace(/\D/g,''), // We are stripping the '$' from each number. Otherwise Vuetify data tables won't sort numbers correctly
                      cl_url: d['Title_url']
                    };
                    let urls = `http://api.marketcheck.com/v2/stats/car?api_key=${MARKET_CHECK_API_KEY}=${values.year}|${values.make}|${values.model}`;
                    // Pushing all URLS generated from CSV upload to global scope array
                    allUrls.push(urls);
                    // Return 'total' variable as we assigned all mapped values to this variable
                    return values;
                  })
                  // Options object we will use as the second parameter in our
                  // axios.get request
                  let options = {
                    'method': 'GET',
                    'headers': {
                      'Host': 'marketcheck-prod.apigee.net'
                    }
                  };

                  let all_details = function() {
                    return axios.all(allUrls.map(url => {
                     return axios.get(url, options)
                     .catch(err => {
                      if(err) {
                        console.log("There was an ERROR! " + err);
                      }
                      return url;
                    })
                     .then(response => {
                        return response.data;
                      })
                 }))
               }
             
               // We are calling all_details as a function
               // Promises return promises and to get the actual data we must
               // call the function in this way at this specific point in the code
               all_details()
               .then(value => {
                 // Fake data is a placeholder with 0's for all Marketcheck values that come back as undefined
                let fake_data = {
                    "price_stats":{
                      "geometric_mean":0,
                      "min":0,
                      "median":0,
                      "population_standard_deviation":0,
                      "variance":0,
                      "max":0,
                      "mean":0,
                      "trimmed_mean":0,
                      "standard_deviation":0,
                      "iqr":0
                   },
                   "miles_stats":{
                      "geometric_mean":0,
                      "min":0,
                      "median":0,
                      "population_standard_deviation":0,
                      "variance":0,
                      "max":0,
                      "mean":0,
                      "trimmed_mean":0,
                      "standard_deviation":0,
                      "iqr":0
                   },
                   "dom_stats":{
                      "geometric_mean":0,
                      "min":0,
                      "median":0,
                      "population_standard_deviation":0,
                      "variance":0,
                      "max":0,
                      "mean":0,
                      "trimmed_mean":0,
                      "standard_deviation":0,
                      "iqr":0
                   },
                   "count":0
                   };
                    
                   // Loop through values (return object from original axios.all promise)
                   // Compare each object in the array object to 'undefined'
                   // If it is undefined , we provide a preset value of 0 for fields in the data table (created with vuetify)
                    let final_value = value.map(function(r, index) {
                      if(typeof r === 'undefined') {
                        r = fake_data;
                        values = {
                          miles_stats_mean: r["miles_stats"].mean,
                          price_stats_mean: r["price_stats"].mean,
                          price_variance: r["price_stats"].variance        
                        }
                        return values;
                      } else {
                        // ELSE these are the values that are not undefined and good data we can use that is accurate
                       values = {
                           miles_stats_mean: r["miles_stats"].mean,
                           price_stats_mean: r["price_stats"].mean,
                           price_variance: r["price_stats"].variance
                         }
                      return values;
                        }
                  })

                 // This is where the magic happens
                 // We are joining to objects and assigning them to one array
                let new_data = total.map((item, i) => Object.assign({}, item, final_value[i]));
                // vehicle_data varialbe is now equivalent ot new_data
                // vehicle_data is treated as a global scope varialbe for other routes to res.send data for vue.js to render components WITH that data
                vehicle_data = new_data;
                
                console.log(vehicle_data);
                // Checking in the console to see if we have handled errors correctly
                // We finally return success.ejs in the views directory if everything has executed correctly

                // Render a success page where we have an href to load the actual data table.
                res.render('../server/views/client/success');
        })     
      })
    });

module.exports = router;