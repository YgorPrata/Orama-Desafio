$(document).ready(function(){
  //buscar informação ----
  $("#box-barra-pesquisa input").on("keyup", function() {
    var valorDigitado = $(this).val().toLowerCase();
    $(".box-investimento").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(valorDigitado) > -1)
    });
  });

  //tooltip area de busca ----
  /*$( document ).on( "mousemove", function( event ) {
    var x = event.pageX;
    var y = event.pageY;
    $(".aaa").text("x " + x + "  y " + y);
  });*/


  //controlador seta filtro Perfil de risco ----
  $("#column1").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "90%"});
  });
  $("#column2").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "81.5%"});
  });
  $("#column3").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "73.5%"});
  });
  $("#column4").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "65%"});
  });
  $("#column5").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "57%"});
  });
  $("#column6").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "48.8%"});
  });
  $("#column7").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "41%"});
  });
  $("#column8").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "32.5%"});
  });
  $("#column9").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "24.5%"});
  });
  $("#column10").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "16.5%"});
  });
  $("#column11").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "8.5%"});
  });
  $("#column12").mouseover(function(){
    $("#marcador-range img").css({"margin-right" : "0px"});
  });
  $(".filtro-busca").mouseleave(function(){
    $("#marcador-range img").css({"margin-right" : "0px"});
  });

  //fintro Range de risco ----
  $("#column1").click(function(){
    $(".box-investimento").hide(30);
    $(".risco1").show(100);

  });
  $("#column2").click(function(){
    $(".box-investimento").hide(30);
    $(".risco2").show(100);
  });
  $("#column3").click(function(){
    $(".box-investimento").hide(30);
    $(".risco3").show(100);
  });
  $("#column4").click(function(){
    $(".box-investimento").hide(30);
    $(".risco4").show(100);
  });
  $("#column5").click(function(){
    $(".box-investimento").hide(30);
    $(".risco5").show(100);
  });
  $("#column6").click(function(){
    $(".box-investimento").hide(30);
    $(".risco6").show(100);
  });
  $("#column7").click(function(){
    $(".box-investimento").hide(30);
    $(".risco7").show(100);
  });
  $("#column8").click(function(){
    $(".box-investimento").hide(30);
    $(".risco8").show(100);
  });
  $("#column9").click(function(){
    $(".box-investimento").hide(30);
    $(".risco9").show(100);
  });
  $("#column10").click(function(){
    $(".box-investimento").hide(30);
    $(".risco10").show(100);
  });
  $("#column11").click(function(){
    $(".box-investimento").hide(30);
    $(".risco11").show(100);
  });
  $("#column12").click(function(){
    $(".box-investimento").hide(30);
    $(".risco12").show(100);
  });



  //fixar barra filtros na tela ----
  $(window).resize(function() {
    var larguraTelaa = $(window).width();
    if(larguraTelaa < 1000){
      $(".filtro").css({
        "position" : "relative",
        "margin-right" : "0px",
        "margin-top" : "0px",
        "float" : "none"
      });
    }
  });

  $(window).scroll(function() {
	   var distanciaTop = $(window).scrollTop();
     var larguraTela = $(window).width();

     if(distanciaTop >= 300 && larguraTela > 1000){
       $(".filtro").css({
         "position" : "fixed",
         "margin-right" : "25px",
         "margin-top" : "-300px",
         "float" : "right"
       });
     }
     else {
       $(".filtro").css({
         "position" : "relative",
         "margin-right" : "0px",
         "margin-top" : "0px",
         "float" : "none"
       });
     }
   });

  //Expandir e contrair filtros Renda fixa ----
  $(".box-expand").click(function(){
    $(".sub-check, hr").slideToggle(180);
  });

  //controlador check filtro ----
  //Estratégia check Renda Fixa ----
  $(".estratedia-renda-fixa input").change(function() {
    if($(this).prop("checked") == true){
      $(".check-filtro input").prop("checked", true);

      $(".c-indexado-soberano").show(100);
      $(".c-renda-fixa").show(100);
      $(".c-rf-cred-privado").show(100);
      $(".c-cred-priv-hy").show(100);
      $(".c-rf-infl-soberano").show(100);
      $(".c-infl-cred-priv").show(100);
    }
    else{
      $(".check-filtro input").prop("checked", false);
      $(".c-indexado-soberano").hide(100);
      $(".c-renda-fixa").hide(100);
      $(".c-rf-cred-privado").hide(100);
      $(".c-cred-priv-hy").hide(100);
      $(".c-rf-infl-soberano").hide(100);
      $(".c-infl-cred-priv").hide(100);
    }
  }).change();

  //check indexado-soberano ----
  $(".indexado-soberano input").change(function() {
    if($( this ).prop("checked") == true){
      $(".c-indexado-soberano").show(100);
    }
    else{
      $(".c-indexado-soberano").hide(100);
    }
  }).change();

  //check renda-fixa ----
  $(".renda-fixa input").change(function() {
    if($( this ).prop("checked") == true){
      $(".c-renda-fixa").show(100);
    }
    else{
      $(".c-renda-fixa").hide(100);
    }
  }).change();

  //check renda-fixa Crédito Privado ----
  $(".rf-cred-privado input").change(function() {
    if($( this ).prop("checked") == true){
      $(".c-rf-cred-privado").show(100);
    }
    else{
      $(".c-rf-cred-privado").hide(100);
    }
  }).change();

  //check Crédito Privado High Yield ----
  $(".cred-priv-hy input").change(function() {
    if($( this ).prop("checked") == true){
      $(".c-cred-priv-hy").show(100);
    }
    else{
      $(".c-cred-priv-hy").hide(100);
    }
  }).change();

  //check Renda Fixa Inflação Soberano ----
  $(".rf-infl-soberano input").change(function() {
    if($( this ).prop("checked") == true){
      $(".c-rf-infl-soberano").show(100);
    }
    else{
      $(".c-rf-infl-soberano").hide(100);
    }
  }).change();

  //check Inflação Crédito Privado ----
  $(".infl-cred-priv input").change(function() {
    if($( this ).prop("checked") == true){
      $(".c-infl-cred-priv").show(100);
    }
    else{
      $(".c-infl-cred-priv").hide(100);
    }
  }).change();



    $.getJSON("assets/json/novo.json", function(json) {
      var imprimex = "";

      for (x = 0; x < json.length ; x++) {
        nome = json[x].simple_name;
        tipo = json[x].fund_macro_strategy.name;
        subtipo = json[x].fund_main_strategy.name;
        className = json[x].fund_main_strategy.className;
        classAcionaExpand = json[x].classAcionaExpand;
        classExpand = json[x].classExpand;
        data = json[x].initial_date;
        mes = json[x].mes;
        ano = json[x].ano;
        dozem = json[x].dozem;
        valor = json[x].valor;
        risco = json[x].fund_risk_profile;

        if(className == "c-indexado-soberano"){
          imprimex +=
          "<div class='large-12 medium-12 cell box-investimento "
          + risco + " " + className + " " + classAcionaExpand + "'>"

            + "<div class='grid-x'>"
              + "<div class='large-3 medium-3 cell ajuste-info-invest'>"

                + "<div id='info-invest'>"
                  + "<h3>" + nome + "</h3>"

                  + "<div id='info-img'>"

                    + "<img src='assets/images/star.png'>"
                    + "<img src='assets/images/check.png'>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Fundo para investidor qualificado</h6>"
                    + "</pan>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Você já investe neste fundo</h6>"
                    + "</pan>"

                  + "</div>"
                  + "<p>Fundo para investidor qualificado</p>"
              + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell esconde-mobile' id='info-geral'>"
                + "<h5>" + data + "</h5>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-rentabilidade'>"
                + "<div class='grid-x'>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + mes + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + ano + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell esconde-mobile' id='info-geral'>"
                    + "<p>" + dozem + "</p>"
                  + "</div>"
                + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-valor' id='info-geral'>"
                + "<h4>" + valor + "</h4>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-resgate' id='info-geral'>"
                + "<img src='assets/images/check.png'>"

                + "<span class='tooltips tooltips-inf'>"
                + "<h6><strong>Dias para conversão do resgate:</strong> 3º dia útil anterior ao último dia útil do 2º mês calendário subsequente à solicitação de resgateo</h6>"
                + "</pan>"
              + "</div>"

              + "<div class='large-1 medium-1 cell ajuste-aplicar' id='info-img-invest'>"
                + "<img src='assets/images/aplicar.png'>"
              + "</div>"
            + "</div>"
          + "</div>"

          + "<div class='large-12 medium-12 cell box-investimento-expand'>"
            + "<div class='grid-x' id='"
            + classExpand + "'>"
              + "<div class='large-7 medium-7 cell'></div>"
              + "<div class='large-5 medium-5 cell grid-investimento-expand'>"
                + "<div id='info-cotas'>"
                  + "<p><strong>Cotização da aplicação:</strong> D+0</p><p><strong>Cotização do resgate:</strong> D+20</p><p><strong>Liquidação do resgate:</strong> D+1</p><p><strong>Taxa de administração: </strong> 1,83%</p>"
                + "</div>"
                + "<div id='info-fundo'><a href='#'><h4>Conheça mais informações sobre este fundo</h4></a></div><div id='info-cnpj'><h5><strong>CNPJ do fundo:</strong> 33.041.260/1223-59</h5></div>"
              + "</div>"
            + "</div>"
          + "</div>";

          $("#geral-indexado-soberano").html(imprimex);
        }
      }
    });

    $.getJSON("assets/json/novo.json", function(json) {
      var imprimex = "";

      for (x = 0; x < json.length ; x++) {
        nome = json[x].simple_name;
        tipo = json[x].fund_macro_strategy.name;
        subtipo = json[x].fund_main_strategy.name;
        className = json[x].fund_main_strategy.className;
        classAcionaExpand = json[x].classAcionaExpand;
        classExpand = json[x].classExpand;
        data = json[x].initial_date;
        mes = json[x].mes;
        ano = json[x].ano;
        dozem = json[x].dozem;
        valor = json[x].valor;
        risco = json[x].fund_risk_profile;

        if(className == "c-renda-fixa"){
          imprimex +=
          "<div class='large-12 medium-12 cell box-investimento "
          + risco + " " + className + " " + classAcionaExpand + "'>"

            + "<div class='grid-x'>"
              + "<div class='large-3 medium-3 cell ajuste-info-invest'>"

                + "<div id='info-invest'>"
                  + "<h3>" + nome + "</h3>"

                  + "<div id='info-img'>"

                    + "<img src='assets/images/star.png'>"
                    + "<img src='assets/images/check.png'>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Fundo para investidor qualificado</h6>"
                    + "</pan>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Você já investe neste fundo</h6>"
                    + "</pan>"

                  + "</div>"
                  + "<p>Fundo para investidor qualificado</p>"
              + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell esconde-mobile' id='info-geral'>"
                + "<h5>" + data + "</h5>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-rentabilidade'>"
                + "<div class='grid-x'>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + mes + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + ano + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell esconde-mobile' id='info-geral'>"
                    + "<p>" + dozem + "</p>"
                  + "</div>"
                + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-valor' id='info-geral'>"
                + "<h4>" + valor + "</h4>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-resgate' id='info-geral'>"
                + "<img src='assets/images/check.png'>"

                + "<span class='tooltips tooltips-inf'>"
                + "<h6><strong>Dias para conversão do resgate:</strong> 3º dia útil anterior ao último dia útil do 2º mês calendário subsequente à solicitação de resgateo</h6>"
                + "</pan>"
              + "</div>"

              + "<div class='large-1 medium-1 cell ajuste-aplicar' id='info-img-invest'>"
                + "<img src='assets/images/aplicar.png'>"
              + "</div>"
            + "</div>"
          + "</div>"

          + "<div class='large-12 medium-12 cell box-investimento-expand "
          + classExpand + " '>"
            + "<div class='grid-x'>"
              + "<div class='large-7 medium-7 cell'></div>"
              + "<div class='large-5 medium-5 cell grid-investimento-expand'>"
                + "<div id='info-cotas'>"
                  + "<p><strong>Cotização da aplicação:</strong> D+0</p><p><strong>Cotização do resgate:</strong> D+20</p><p><strong>Liquidação do resgate:</strong> D+1</p><p><strong>Taxa de administração: </strong> 1,83%</p>"
                + "</div>"
                + "<div id='info-fundo'><a href='#'><h4>Conheça mais informações sobre este fundo</h4></a></div><div id='info-cnpj'><h5><strong>CNPJ do fundo:</strong> 33.041.260/1223-59</h5></div>"
              + "</div>"
            + "</div>"
          + "</div>";


        $("#geral-renda-fixa").html(imprimex);
        }
      }
    });

    $.getJSON("assets/json/novo.json", function(json) {
      var imprimex = "";

      for (x = 0; x < json.length ; x++) {
        nome = json[x].simple_name;
        tipo = json[x].fund_macro_strategy.name;
        subtipo = json[x].fund_main_strategy.name;
        className = json[x].fund_main_strategy.className;
        classAcionaExpand = json[x].classAcionaExpand;
        classExpand = json[x].classExpand;
        data = json[x].initial_date;
        mes = json[x].mes;
        ano = json[x].ano;
        dozem = json[x].dozem;
        valor = json[x].valor;
        risco = json[x].fund_risk_profile;

        if(className == "c-rf-cred-privado"){
          imprimex +=
          "<div class='large-12 medium-12 cell box-investimento "
          + risco + " " + className + " " + classAcionaExpand + "'>"

            + "<div class='grid-x'>"
              + "<div class='large-3 medium-3 cell ajuste-info-invest'>"

                + "<div id='info-invest'>"
                  + "<h3>" + nome + "</h3>"

                  + "<div id='info-img'>"

                    + "<img src='assets/images/star.png'>"
                    + "<img src='assets/images/check.png'>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Fundo para investidor qualificado</h6>"
                    + "</pan>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Você já investe neste fundo</h6>"
                    + "</pan>"

                  + "</div>"
                  + "<p>Fundo para investidor qualificado</p>"
              + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell esconde-mobile' id='info-geral'>"
                + "<h5>" + data + "</h5>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-rentabilidade'>"
                + "<div class='grid-x'>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + mes + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + ano + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell esconde-mobile' id='info-geral'>"
                    + "<p>" + dozem + "</p>"
                  + "</div>"
                + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-valor' id='info-geral'>"
                + "<h4>" + valor + "</h4>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-resgate' id='info-geral'>"
                + "<img src='assets/images/check.png'>"

                + "<span class='tooltips tooltips-inf'>"
                + "<h6><strong>Dias para conversão do resgate:</strong> 3º dia útil anterior ao último dia útil do 2º mês calendário subsequente à solicitação de resgateo</h6>"
                + "</pan>"
              + "</div>"

              + "<div class='large-1 medium-1 cell ajuste-aplicar' id='info-img-invest'>"
                + "<img src='assets/images/aplicar.png'>"
              + "</div>"
            + "</div>"
          + "</div>"

          + "<div class='large-12 medium-12 cell box-investimento-expand "
          + classExpand + " '>"
            + "<div class='grid-x'>"
              + "<div class='large-7 medium-7 cell'></div>"
              + "<div class='large-5 medium-5 cell grid-investimento-expand'>"
                + "<div id='info-cotas'>"
                  + "<p><strong>Cotização da aplicação:</strong> D+0</p><p><strong>Cotização do resgate:</strong> D+20</p><p><strong>Liquidação do resgate:</strong> D+1</p><p><strong>Taxa de administração: </strong> 1,83%</p>"
                + "</div>"
                + "<div id='info-fundo'><a href='#'><h4>Conheça mais informações sobre este fundo</h4></a></div><div id='info-cnpj'><h5><strong>CNPJ do fundo:</strong> 33.041.260/1223-59</h5></div>"
              + "</div>"
            + "</div>"
          + "</div>";


        $("#geral-rf-cred-privado").html(imprimex);
        }
      }
    });

    $.getJSON("assets/json/novo.json", function(json) {
      var imprimex = "";

      for (x = 0; x < json.length ; x++) {
        nome = json[x].simple_name;
        tipo = json[x].fund_macro_strategy.name;
        subtipo = json[x].fund_main_strategy.name;
        className = json[x].fund_main_strategy.className;
        classAcionaExpand = json[x].classAcionaExpand;
        classExpand = json[x].classExpand;
        data = json[x].initial_date;
        mes = json[x].mes;
        ano = json[x].ano;
        dozem = json[x].dozem;
        valor = json[x].valor;
        risco = json[x].fund_risk_profile;

        if(className == "c-cred-priv-hy"){
          imprimex +=
          "<div class='large-12 medium-12 cell box-investimento "
          + risco + " " + className + " " + classAcionaExpand + "'>"

            + "<div class='grid-x'>"
              + "<div class='large-3 medium-3 cell ajuste-info-invest'>"

                + "<div id='info-invest'>"
                  + "<h3>" + nome + "</h3>"

                  + "<div id='info-img'>"

                    + "<img src='assets/images/star.png'>"
                    + "<img src='assets/images/check.png'>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Fundo para investidor qualificado</h6>"
                    + "</pan>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Você já investe neste fundo</h6>"
                    + "</pan>"

                  + "</div>"
                  + "<p>Fundo para investidor qualificado</p>"
              + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell esconde-mobile' id='info-geral'>"
                + "<h5>" + data + "</h5>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-rentabilidade'>"
                + "<div class='grid-x'>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + mes + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + ano + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell esconde-mobile' id='info-geral'>"
                    + "<p>" + dozem + "</p>"
                  + "</div>"
                + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-valor' id='info-geral'>"
                + "<h4>" + valor + "</h4>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-resgate' id='info-geral'>"
                + "<img src='assets/images/check.png'>"

                + "<span class='tooltips tooltips-inf'>"
                + "<h6><strong>Dias para conversão do resgate:</strong> 3º dia útil anterior ao último dia útil do 2º mês calendário subsequente à solicitação de resgateo</h6>"
                + "</pan>"
              + "</div>"

              + "<div class='large-1 medium-1 cell ajuste-aplicar' id='info-img-invest'>"
                + "<img src='assets/images/aplicar.png'>"
              + "</div>"
            + "</div>"
          + "</div>"

          + "<div class='large-12 medium-12 cell box-investimento-expand "
          + classExpand + " '>"
            + "<div class='grid-x'>"
              + "<div class='large-7 medium-7 cell'></div>"
              + "<div class='large-5 medium-5 cell grid-investimento-expand'>"
                + "<div id='info-cotas'>"
                  + "<p><strong>Cotização da aplicação:</strong> D+0</p><p><strong>Cotização do resgate:</strong> D+20</p><p><strong>Liquidação do resgate:</strong> D+1</p><p><strong>Taxa de administração: </strong> 1,83%</p>"
                + "</div>"
                + "<div id='info-fundo'><a href='#'><h4>Conheça mais informações sobre este fundo</h4></a></div><div id='info-cnpj'><h5><strong>CNPJ do fundo:</strong> 33.041.260/1223-59</h5></div>"
              + "</div>"
            + "</div>"
          + "</div>";


        $("#geral-cred-priv-hy").html(imprimex);
        }
      }
    });

    $.getJSON("assets/json/novo.json", function(json) {
      var imprimex = "";

      for (x = 0; x < json.length ; x++) {
        nome = json[x].simple_name;
        tipo = json[x].fund_macro_strategy.name;
        subtipo = json[x].fund_main_strategy.name;
        className = json[x].fund_main_strategy.className;
        classAcionaExpand = json[x].classAcionaExpand;
        classExpand = json[x].classExpand;
        data = json[x].initial_date;
        mes = json[x].mes;
        ano = json[x].ano;
        dozem = json[x].dozem;
        valor = json[x].valor;
        risco = json[x].fund_risk_profile;

        if(className == "c-rf-infl-soberano"){
          imprimex +=
          "<div class='large-12 medium-12 cell box-investimento "
          + risco + " " + className + " " + classAcionaExpand + "'>"

            + "<div class='grid-x'>"
              + "<div class='large-3 medium-3 cell ajuste-info-invest'>"

                + "<div id='info-invest'>"
                  + "<h3>" + nome + "</h3>"

                  + "<div id='info-img'>"

                    + "<img src='assets/images/star.png'>"
                    + "<img src='assets/images/check.png'>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Fundo para investidor qualificado</h6>"
                    + "</pan>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Você já investe neste fundo</h6>"
                    + "</pan>"

                  + "</div>"
                  + "<p>Fundo para investidor qualificado</p>"
              + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell esconde-mobile' id='info-geral'>"
                + "<h5>" + data + "</h5>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-rentabilidade'>"
                + "<div class='grid-x'>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + mes + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + ano + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell esconde-mobile' id='info-geral'>"
                    + "<p>" + dozem + "</p>"
                  + "</div>"
                + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-valor' id='info-geral'>"
                + "<h4>" + valor + "</h4>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-resgate' id='info-geral'>"
                + "<img src='assets/images/check.png'>"

                + "<span class='tooltips tooltips-inf'>"
                + "<h6><strong>Dias para conversão do resgate:</strong> 3º dia útil anterior ao último dia útil do 2º mês calendário subsequente à solicitação de resgateo</h6>"
                + "</pan>"
              + "</div>"

              + "<div class='large-1 medium-1 cell ajuste-aplicar' id='info-img-invest'>"
                + "<img src='assets/images/aplicar.png'>"
              + "</div>"
            + "</div>"
          + "</div>"

          + "<div class='large-12 medium-12 cell box-investimento-expand "
          + classExpand + " '>"
            + "<div class='grid-x'>"
              + "<div class='large-7 medium-7 cell'></div>"
              + "<div class='large-5 medium-5 cell grid-investimento-expand'>"
                + "<div id='info-cotas'>"
                  + "<p><strong>Cotização da aplicação:</strong> D+0</p><p><strong>Cotização do resgate:</strong> D+20</p><p><strong>Liquidação do resgate:</strong> D+1</p><p><strong>Taxa de administração: </strong> 1,83%</p>"
                + "</div>"
                + "<div id='info-fundo'><a href='#'><h4>Conheça mais informações sobre este fundo</h4></a></div><div id='info-cnpj'><h5><strong>CNPJ do fundo:</strong> 33.041.260/1223-59</h5></div>"
              + "</div>"
            + "</div>"
          + "</div>";


        $("#geral-rf-infl-soberano").html(imprimex);
        }
      }
    });

    $.getJSON("assets/json/novo.json", function(json) {
      var imprimex = "";

      for (x = 0; x < json.length ; x++) {
        nome = json[x].simple_name;
        tipo = json[x].fund_macro_strategy.name;
        subtipo = json[x].fund_main_strategy.name;
        className = json[x].fund_main_strategy.className;
        classAcionaExpand = json[x].classAcionaExpand;
        classExpand = json[x].classExpand;
        data = json[x].initial_date;
        mes = json[x].mes;
        ano = json[x].ano;
        dozem = json[x].dozem;
        valor = json[x].valor;
        risco = json[x].fund_risk_profile;

        if(className == "c-infl-cred-priv"){
          imprimex +=
          "<div class='large-12 medium-12 cell box-investimento "
          + risco + " " + className + " " + classAcionaExpand + "'>"

            + "<div class='grid-x'>"
              + "<div class='large-3 medium-3 cell ajuste-info-invest'>"

                + "<div id='info-invest'>"
                  + "<h3>" + nome + "</h3>"

                  + "<div id='info-img'>"

                    + "<img src='assets/images/star.png'>"
                    + "<img src='assets/images/check.png'>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Fundo para investidor qualificado</h6>"
                    + "</pan>"

                    + "<span class='tooltips tooltips-star'>"
                      + "<h6>Você já investe neste fundo</h6>"
                    + "</pan>"

                  + "</div>"
                  + "<p>Fundo para investidor qualificado</p>"
              + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell esconde-mobile' id='info-geral'>"
                + "<h5>" + data + "</h5>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-rentabilidade'>"
                + "<div class='grid-x'>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + mes + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell' id='info-geral'>"
                    + "<p>" + ano + "</p>"
                  + "</div>"
                  + "<div class='large-4 medium-4 cell esconde-mobile' id='info-geral'>"
                    + "<p>" + dozem + "</p>"
                  + "</div>"
                + "</div>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-valor' id='info-geral'>"
                + "<h4>" + valor + "</h4>"
              + "</div>"

              + "<div class='large-2 medium-2 cell ajuste-resgate' id='info-geral'>"
                + "<img src='assets/images/check.png'>"

                + "<span class='tooltips tooltips-inf'>"
                + "<h6><strong>Dias para conversão do resgate:</strong> 3º dia útil anterior ao último dia útil do 2º mês calendário subsequente à solicitação de resgateo</h6>"
                + "</pan>"
              + "</div>"

              + "<div class='large-1 medium-1 cell ajuste-aplicar' id='info-img-invest'>"
                + "<img src='assets/images/aplicar.png'>"
              + "</div>"
            + "</div>"
          + "</div>"

          + "<div class='large-12 medium-12 cell box-investimento-expand "
          + classExpand + " '>"
            + "<div class='grid-x'>"
              + "<div class='large-7 medium-7 cell'></div>"
              + "<div class='large-5 medium-5 cell grid-investimento-expand'>"
                + "<div id='info-cotas'>"
                  + "<p><strong>Cotização da aplicação:</strong> D+0</p><p><strong>Cotização do resgate:</strong> D+20</p><p><strong>Liquidação do resgate:</strong> D+1</p><p><strong>Taxa de administração: </strong> 1,83%</p>"
                + "</div>"
                + "<div id='info-fundo'><a href='#'><h4>Conheça mais informações sobre este fundo</h4></a></div><div id='info-cnpj'><h5><strong>CNPJ do fundo:</strong> 33.041.260/1223-59</h5></div>"
              + "</div>"
            + "</div>"
          + "</div>";


        $("#geral-infl-cred-priv").html(imprimex);
        }
      }
    });


    $("#geral-indexado-soberano").click(function(){
      $(".box-investimento-expand .grid-x").slideToggle(100);
    });

});

//Expandir e contrair investimento ----
function espandeInvest(numClass){
  var cont = 0;
  while(true) {
    if(numClass == cont){ $(".0" + cont).slideToggle(100); break }
    cont ++;
  }
}

//tooltips investimento ----
function tooltipIn(numClass){
  var cont = 0;
  while(true) {
    if(numClass == cont){ $("#00" + cont).slideToggle(100); break }
    cont ++;
  }
}
function tooltipOut(numClass){
  var cont = 0;
  while(true) {
    if(numClass == cont){ $("#00" + cont).slideToggle(100); break }
    cont ++;
  }
}
