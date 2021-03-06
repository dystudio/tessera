/**
 * Handlers for the sort menu in the dashboard-list.html template.a
 */

declare var $, URI

$(document).on('click', 'ul.ds-dashboard-sort-menu li', function(e) {
  var column = e.target.getAttribute('data-ds-sort-col')
  var order = e.target.getAttribute('data-ds-sort-order')
  var url = new URI(window.location)
  if (column) {
    url.setQuery('sort', column)
  }
  if (order) {
    url.setQuery('order', order)
  }
  window.location.href = url.href()
})


$(document).ready(function() {
  var params = new URI(window.location).search(true)
  if (params.sort !== 'default' ) {
    $('ul.ds-dashboard-sort-menu li').removeClass('active')
    $('[data-ds-sort-col="' + params.sort + '"][data-ds-sort-order="' + (params.order || 'asc') + '"]')
                                    .parent()
                                    .addClass('active')
  }
})
