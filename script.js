var lastClicked;
var counter = 0;

var grid = clickableGrid(7,7,function(el,row,col,i){
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);
    $(".clicked1").removeAttr( 'style' );
    counter++;

    if(counter == 2)
    {
      $(".arrow").css({"display":"none"});
    }
    
    if(counter == 1 || counter == 3)
    {

      if(counter == 3)
      {

      counter = 1;
          $( "td" ).removeClass( "clicked1");
            $( "td" ).removeClass( "clicked2");

      }

      el.className='clicked1';

      if (lastClicked) lastClicked.className='';

      //lastClicked = el;
    }




    if(counter == 2)
  {

            $(".clicked1").css({"backgroundColor": "white", "color": "black",   "font-weight": "normal"});

    el.className='clicked2';

    if (lastClicked) lastClicked.className='';

  }




});

document.getElementById("gridTable").appendChild(grid);

function clickableGrid( rows, cols, callback ){
    var i=0;

    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=1;r<=rows;++r){


        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=1;c<=cols;++c){

            var cell = tr.appendChild(document.createElement('td'));


            $( cell ).attr( 'id', "horizontal" +r +c);
            $( cell ).attr( 'data-default',  "o");
            cell.innerHTML = ++i;
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}
