const MOD = (function() {

let e = {
    table: '.table',
    search: '.search',
    rows: '.rows',
    records: '.records',
    data: 'TD'
}

let table = document.querySelector(e.table);
let search = document.querySelector(e.search);
let rows = document.querySelectorAll(e.rows);
let records = document.querySelectorAll(e.records);
let data = document.querySelectorAll(e.data);

let hide_records = () => {
    console.log(data);
}

let load = () => {
    window.addEventListener('load', hide_records);
}


/*
let display_records = (list_of_records) => {
    list_of_records.display
}
*/

return {
    init: function () {
        load();
    }
}

})();

MOD.init();