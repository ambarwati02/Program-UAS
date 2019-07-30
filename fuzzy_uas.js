var http = require('http');
var fs = require('fs');
var usia = "Masukkan Usia : "

function fuzzy () {
    if(usia >= 25 && usia <=45) {
      console.log('Kategori muda = ' + ((usia - 25) / 15).toFixed(2))
    }else if (usia >= 40 && usia <= 45) {
      console.log('Kategori muda = ' + ((45 - usia) / 5).toFixed(2))
      console.log('Kategori tua = ' + ((usia - 40) /5).toFixed(2))
    }else if (usia >= 25 && usia <= 55) {
      console.log('Kategori tua = ' ((55 - usia) / 30).toFixed(2))
      console.log('Kategori muda = ' ((usia - 45) / 30).toFixed(2))
    }else if (usia >= 55 && usia <= 55) {
      console.log('Kategoru parobaya = ' + ((45 - usia) / 1).toFixed(2))
    }
    document.getElementById("kategori usia").innerHTML = arr1.join('');
}

function Kategori () {
    fuzzy_to_console.log(document.getElementById("input").valur);
}
      
