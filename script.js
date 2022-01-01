function semuaMenu(){
    
    $.getJSON('restaurant.json', function(data){
        let menu = data.menu;
        $.each(menu, function(i, data){
          $('#daftar_menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/'+ data.gambar +' " class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5></p><h5>'+ data.harga +'</h5><h5>'+ data.estimasi +'</h5><a href="#" class="btn btn-primary">Pesan</a></div></div></div>');
        });
      });
}

semuaMenu();

  $('.nav-link').on('click', function(){
      $('.nav-link').removeClass('active');
      $(this).addClass('active');

      let jenis = $(this).html();
      $('h1').html(jenis);

      if(jenis == 'All Menu'){
          semuaMenu();
          return;
      }

      $,getJSON('restaurant.json', function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data){
            if(data.jenis == jenis.toLowerCase()){
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/'+ data.gambar +' " class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5></p><h5>'+ data.harga +'</h5><h5>'+ data.estimasi +'</h5><a href="#" class="btn btn-primary">Pesan</a></div></div></div>';
            }
        });
        $('#daftar_menu').html(content);
  });
});