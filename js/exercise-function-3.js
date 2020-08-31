year = prompt ("masukkan umur kucing")

const catAgeConverter = (year) => {if (year == 1){
    return 15;
} else if (year == 2){
    return 24;
} else if (year >2){
    return 24 + 4 * (year - 2);
} else {
    return "mohon masukkan umur";
}
} 

// console.log(catAgeConverter (3))
alert ("kucing anda berumur sekitar " + catAgeConverter(year) + " tahun pada manusia")
