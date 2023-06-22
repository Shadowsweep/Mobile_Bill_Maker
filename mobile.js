function fillMD(centerArray) {
    removeOptions()
    for (i = 0; i < centerArray.length; i++) {
        var opt = document.createElement('option')
        opt.text = centerArray[i][0]
        opt.value = centerArray[i][1]
        mobdetail.add(opt)

    }


}
function removeOptions() {
    for (j = mobdetail.options.length - 1; j >= 0; j--) {
        mobdetail.remove(j)
    }
}


function showMobiles() {
    var i = mobile.selectedIndex
    switch (i) {
        case 1:
            var real = [['Choose Mobile model', ''], ['Realme6', '14,000'], ['Realme7', '14,999'], ['Realme8', '17,999'], ['Realme9', '14599']]
            fillMD(real)
            break
        case 2:
            var sam = [['Choose Mobile Model', ''], ['SamsungS21FE', '34,999'], ['SamsungS20FE', '34,489'], ['SamsungGalaxyA04s', '13,499']]
            fillMD(sam)
            break
        case 3:
            var one = [['Choose Mobile Model', ''], ['OneplusNord2', '36,490'], ['OneplusNord', '27,999'], ['Oneplus10R', '34,999'], ['Oneplus9pro', '54,399']]
            fillMD(one)
            break

        case 4:
            var apple = [['Choose Mobile Model'], ['IPHONE11', '39,999'], ['IPHONE12', '37,999'], ['IPHONE13', '58,990'], ['IPHONE14', '73,990']]
            fillMD(apple)
            break


    }



}
function mobDetails() {
    var mn = mobdetail.options[mobdetail.selectedIndex].text
    var cn = mobile.options[mobile.selectedIndex].text
    var price = mobdetail.value
    var offer = price * 5 / 100
    var pic = mn + ".jpg"
    var cpic = cn + ".jpg"

    //     var qt = qty.value
    //     var a =  (qt) * (price)


    // if(qt>=5)
    // {
    //     var d =  a*2/100
    //     var na = a + g - d
    // }
    // else
    // {   var d = 'Discount not Available'
    //     var na = a + g}

    var htm = `<table cellspacing=0 cellpadding = 5 border=1 width =80% >`
    //    htm +=` <tr><th><b>${mn}<b></th></tr><br><br>`
    htm += `<caption><h3>${mn}<h3></caption>`
    htm += `<tr><th><img src= '${cpic}' width ="150" ></th></tr>`
    htm += `<tr><th><img src= '${pic}' width ="150" ></th></tr><br><br>`
    htm += `</table><br>`
    htm += `<table cellspacing=0 cellpadding = 5 border=1 width =80% >`
    htm += `<tr><th><b>Price</b></th><th><b>${price}</b></th></tr>`
    htm += `<tr><th><b>Colour</b></th><th><b>Black</b><th></tr>`
    htm += `<tr><th><b>RAM</b></th><th><b>4GB|64GB External </b></th></tr>`

    //    htm += `<tr><th><b>Bank Offer</b></th><th>${offer}}</b></th></tr>`
    //    htm += `<tr><th><b>Quantity</b></th><th>${qty}</b></th></tr>`
    //    htm += `<tr><th><b>Net Amount</b></th><th>${na}</b></th></tr>`
    //    htm += `<tr><th><b>Quantity</b></th><th>${qty}</b></th></tr>`


    htm += `</table>`



    result.innerHTML = htm

}