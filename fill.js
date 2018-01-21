var myTable = document.getElementById('grid');
for (var i = 0; i < 7; i++) {
  for (var y = 0; y < 7; y++) {

    if (y == 0 && i == 0) {
      continue;
    }

    if (y == 1 && i == 0) {
      continue;
    }

    if (y == 1 && i == 1) {
      continue;
    }
    if (y == 0 && i == 1) {
      continue;
    }

    //2

    if (y == 6 && i == 0) {
      continue;
    }

    if (y == 5 && i == 0) {
      continue;
    }

    if (y == 5 && i == 1) {
      continue;
    }
    if (y == 6 && i == 1) {
      continue;
    }

    //3

    if (y == 0 && i == 5) {
      continue;
    }

    if (y == 0 && i == 6) {
      continue;
    }

    if (y == 1 && i == 5) {
      continue;
    }
    if (y == 1 && i == 6) {
      continue;
    }

    //4

    if (y == 5 && i == 5) {
      continue;
    }

    if (y == 6 && i == 5) {
      continue;
    }

    if (y == 5 && i == 6) {
      continue;
    }
    if (y == 6 && i == 6) {
      continue;
    }
    grid.rows[i].cells[y].innerHTML = 'o';

    grid.rows[3].cells[3].innerHTML = '';
  }

}
var el;
var circle = 0;



$(document).ready(function() {

  $("#reset").on("click", function() {
      $('td').text(function() {
        console.log("testuje");
         $('#horizontal44').html('');
        return $(this).data('default');

      })
  });

  function move() {
    if ($(".clicked2").html() == '') {
      $('.clicked1').empty();
      $('.clicked2').append('o');

      circle++;
      numbers = [];
      console.log("Works!");
    }
  }
  $("td").click(function(event) {
    // this.append wouldn't work


    if ($("td").has("o") && $("td").hasClass('clicked1')) {

      if ($("td").has("o") && $("td").hasClass('clicked2')) {

        console.log("Clear Cell");

        var numbers = [];

        for (var i = 0; i <= 80; i++) {

          if ($('td#horizontal' + i).hasClass('clicked1') == true) {
            numbers.push(i);

          }

          if ($('td#horizontal' + i).hasClass('clicked2') == true) {
            numbers.push(i);

          }


        }


        if (numbers.length == 2) {



          for (var secondDigit = 0; secondDigit < 10; secondDigit++) {

            if (numbers[0] == (numbers[1] - 2) && numbers[1] == (numbers[0] + 2) || numbers[0] == (numbers[1] + 2) && numbers[1] == (numbers[0] - 2) || (('' + numbers[0])[0] == 1 && ('' + numbers[0])[1] == secondDigit) && (('' + numbers[1])[0] == 3 && ('' + numbers[1])[1] == secondDigit) ||
              (('' + numbers[0])[0] == 2 && ('' + numbers[0])[1] == secondDigit) && (('' + numbers[1])[0] == 4 && ('' + numbers[1])[1] == secondDigit) ||
              (('' + numbers[0])[0] == 3 && ('' + numbers[0])[1] == secondDigit) && (('' + numbers[1])[0] == 5 && ('' + numbers[1])[1] == secondDigit) ||
              (('' + numbers[0])[0] == 4 && ('' + numbers[0])[1] == secondDigit) && (('' + numbers[1])[0] == 6 && ('' + numbers[1])[1] == secondDigit) ||
              (('' + numbers[0])[0] == 5 && ('' + numbers[0])[1] == secondDigit) && (('' + numbers[1])[0] == 7 && ('' + numbers[1])[1] == secondDigit))


            {


              var firstNumber = 0;
              var secondNumber = 2;
              if ($('td#horizontal' + numbers[0]).hasClass('clicked1') && $('td#horizontal' + numbers[1]).hasClass('clicked2') &&
                !($.trim($('.clicked2').html()) == "o")) {

                  for(var i = 0; i< 8; i++)
                  {

                    firstNumber++;

                    secondNumber++;


                if ((('' + numbers[0])[0] == firstNumber && ('' + numbers[0])[1] == secondDigit) && (('' + numbers[1])[0] == secondNumber && ('' + numbers[1])[1] == secondDigit) &&
                  !($.trim($('td#horizontal' + (numbers[0] + 10)).html()) == "")) {
                  $('td#horizontal' + (numbers[0] + 10)).empty();
                  move();
                }



                if ((numbers[0] == (numbers[1] - 2) && numbers[1] == (numbers[0] + 2) || numbers[0] == (numbers[1] + 2) && numbers[1] == (numbers[0] - 2)) &&
                  !($.trim($('td#horizontal' + (numbers[1] - 1)).html()) == "")) {

                  $('td#horizontal' + (numbers[1] - 1)).empty();
                  move();
                }
}
              }

              if ($('td#horizontal' + numbers[1]).hasClass('clicked1') && $('td#horizontal' + numbers[0]).hasClass('clicked2') &&
                !($.trim($('.clicked2').html()) == "o")) {

                  for(var i = 0; i< 8; i++)
                  {

                    firstNumber++;

                    secondNumber++;


                if ((('' + numbers[0])[0] == firstNumber && ('' + numbers[0])[1] == secondDigit) && (('' + numbers[1])[0] == secondNumber && ('' + numbers[1])[1] == secondDigit) &&
                  !($.trim($('td#horizontal' + (numbers[0] + 10)).html()) == "")) {
                  $('td#horizontal' + (numbers[0] + 10)).empty();
                  move();
                }
              }
                if ((numbers[0] == (numbers[1] - 2) && numbers[1] == (numbers[0] + 2) || numbers[0] == (numbers[1] + 2) && numbers[1] == (numbers[0] - 2)) &&
                  !($.trim($('td#horizontal' + (numbers[1] - 1)).html()) == "")) {

                  $('td#horizontal' + (numbers[1] - 1)).empty();
                  move();
                }


              }


              


            }
          }



        }




      }


    }


  });
});
