$(document).ready(function () {
  var click_function = document.getElementById('alert-info')
  click_function.style = 'display:none'

  $.ajax({
    type: 'GET',
    url: './json/cart.json',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function (data) {
      $.each(data, function (index, element) {
        for (i = 0; i < element.length; i++) {
          console.log('Element: ', data.items[i].name)
          var htmlString = ''
          $('.product-wrapper').append(
            (htmlString +=
              '<div class=card> <div class=card__header>  <span>' +
              data.items[i].discount +
              '% off' +
              '</span>  </div> <div class=card__body>' +
              '<img src=' +
              data.items[i].image +
              '>' +
              '</div><div class="card__footer"> <p> ' +
              data.items[i].name +
              '</p> <ul> <li> <span class=normal-text>$' +
              data.items[i].price.actual +
              '</span>' +
              '  <span>$' +
              data.items[i].price.display +
              '</span>' +
              '</li> <li><button onclick=btn_click()>Add to cart</button></li> </ul></di></div>'),
          )
        }
      })
    },
  })

  btn_click = () => {
    click_function.style = 'display:block'
    setTimeout(function () {
      click_function.style = 'display:none'
    }, 3000)
  }
})
