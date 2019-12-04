const hornArray = []

function Horn(hornObj) {
  this.keyword = hornObj.keyword
  this.image_url = hornObj.image_url
  this.title = hornObj.title
  this.description = hornObj.description
  this.horns = hornObj.horns

  hornArray.push(this)
}

Horn.prototype.render = function () {
  const myTemplate = $('#horn-template').html()
  const $newSection = $('<section></section>')
  $newSection.html(myTemplate)
  $newSection.find('h2').text(this.keyword)
  $newSection.find('img').attr('src', this.image_url)
  $newSection.find('img').attr('alt', this.title)
  $newSection.find('p').text(this.description)
  $newSection.find('div').text(this.horns)
  $('main').append($newSection)
}

$.get('/data/page-1.json', data => {
  data.forEach(horn => {
    new Horn(horn).render()
  });
})

