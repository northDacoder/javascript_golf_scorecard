/* $("#hideForm").click(function(){
	$("#hideForm").addClass("hide");
});$(document).ready(function(){
    ('#hideform').click(hideForm);
    ('#updatescores').click(updateScores);
});

$('#hide').click(function(){
    $('#hideform').addClass("hide");
    
});

$("#updatescores").change(function(){
     var total = 0;
     $("#updatescores").each(function(){
         total += $(this).val();
     }
     //now you can use total
}); */

$(document).ready(function() {
  $("input").change(function(){
    var inputVal1 = $("#testInput11").val();
    var inputVal2 = $("#testInput12").val();
    var inputVal3 = $("#testInput13").val();
    var inputVal4 = $("#testInput14").val();
    var inputVal5 = $("#testInput15").val();
    var inputVal6 = $("#testInput16").val();
    var inputVal7 = $("#testInput17").val();
    var inputVal8 = $("#testInput18").val();
    var inputVal9 = $("#testInput19").val();
    $("#testOutput11").html(inputVal1);
    $("#testOutput12").html(inputVal2);
    $("#testOutput13").html(inputVal3);
    $("#testOutput14").html(inputVal4);
    $("#testOutput15").html(inputVal5);
    $("#testOutput16").html(inputVal6);
    $("#testOutput17").html(inputVal7);
    $("#testOutput18").html(inputVal8);
    $("#testOutput19").html(inputVal9);
  });
});

var player1Total = 0;

$("#updateScores").click(function(){
    $("#player1Score td p").each(function(holeScore){
       playerTotal += holeScore;
    });
});

$("#player1Total").html(player1Total);









