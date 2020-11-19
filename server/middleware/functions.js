  
module.exports = {
    // genNum will create coles id specific to each vehicle he decides to save into sql
    // This number is treated as unique in Vuetify data tables to avoid duplicate uploads
    // It is very rare this specific number will be generated twice in a new upload of CSV data
    genNum: function(x) {
        let min = 2; 
        let max = 9;  
        let clientID = Math.random() * (+max - +min) + +min;
        clientID = clientID * 357345.45678 + x / 953.65987;
        clientID = 'M' + clientID.toFixed(0);
        return clientID;
    }
}