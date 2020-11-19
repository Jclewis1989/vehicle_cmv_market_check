const express = require('express');
const router = express.Router();
const express_graphql = require('express-graphql');
// =============================================
let {buildSchema} = require('graphql');
let schema = buildSchema(`
    type Query {
        vehicle(id: Int!): Vehicle
        vehicles(topic: String): [Vehicle]
    }
    type Vehicle {
        id: Int
        year: String
        make: String
        model: String
    }

    type ResData {
        price: String
        mileage: String
    }
`);

let getVehicle = function(args) {
    let id = args.year;
    return vehiclesData.filter(course => {
        return course.id == id;
    })
}

// resolver
let root = {
    vehicle: getVehicle,
    // vehicles: getVehicles
}
// =============================================

// Graph ql
router.use('/graphql', express_graphql ({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

module.exports = router;
