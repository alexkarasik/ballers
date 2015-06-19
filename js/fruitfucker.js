$(document).ready(function() {
    var fruitUrls = ['http://www.naturipefarms.com/wp-content/uploads/2012/04/Blueberry.png', 
                     'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana21.jpg?a1d5ed',
                     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg',
                     'http://pngimg.com/upload/kiwi_PNG4035.png']
  $('button').click(function(e) {
    
    var fruitUrl = fruitUrls.shift()
    console.log(fruitUrls)
    
    $('img').attr('src', fruitUrl)
  })
})
