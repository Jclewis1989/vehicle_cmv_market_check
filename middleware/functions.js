  
module.exports = {
    genNum: function(x) {
        let min = 3; 
        let max = 7;  
        let clientID = Math.random() * (+max - +min) + +min;
        clientID = clientID * 10000 + x;
        clientID = 'MCM' + clientID.toFixed(0);
        return clientID;
    }
}