//= libs/jquery.scrollbar.min.js
//= banksData.js

$(document).ready(function() {
  function initTable() {
    // add banks to the list
    for (let i in banks) {
      let bank = banks[i]

      $('#add-bank .dropdown-menu').append(
        $(`
        <div class="dropdown-item m-bank-icon-wrapper" data-name="${i}">
          <img src="/img/banks/${bank.image}" class="bank__logo">
          <h3 class="bank__title">${bank.title}</h3>
        </div>
      `)
      )
    }

    // initTable
    $('.m-dropdown').click(function(e) {
      let dropdown = this
      $(dropdown).addClass('active')

      if ($(dropdown).hasClass('active')) event.stopPropagation()

      $(document).click(function() {
        $(dropdown).removeClass('active')
      })

      $(dropdown)
        .children('.dropdown-menu')
        .children('.dropdown-item')
        .click(function(e) {
          $(dropdown).removeClass('active')
          event.stopPropagation()
        })
    })

    // When clicking on bank in the list, add it to the table
    $('#add-bank .dropdown-item').click(function(e) {
      let name = $(e.currentTarget).attr('data-name')
      const bankObject = banks[name]

      $(`
      <td>
        <div class="bank-col m-bank-icon-wrapper">
          <img src="/img/banks/${bankObject.image}" class="bank__logo" /> 
          <h3 class="bank__title">${bankObject.title}</h3>
        </div>
      </td>
      `).insertBefore('#banks-table .add-bank-wrapper')

      $('#banks-table tr.info').each(function(index) {
        $(this).append($(`<td>${bankObject.blocks[index]}</td>`))
      })

      $('#banks-table tr.action').append(
        $(`
        <td><a href="${bankObject.link}" target="_blank" class="btn btn--small">Оформить</a></td>
    `)
      )

      $(`.dropdown-item[data-name="${name}"]`).remove()

      if ($('.dropdown-item').length == 0) $(`.add-bank-wrapper`).remove()
    })
  }

  $('.compare__wrapper').scrollbar()

  initTable()
})
