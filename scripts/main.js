'use strict';
function calculator(logicExpresson) {
    var topInput = $('#inp1').val(),
        bottomInput = $('#inp2').val(),
        result = '';
    var val = {
      "-": Number(topInput) - Number(bottomInput),
      "+": Number(topInput) + Number(bottomInput),
      "/": Number(topInput) / Number(bottomInput),
      "*": Number(topInput) * Number(bottomInput)
    };

    result = val[logicExpresson];

    // switch (topInput || bottomInput) {
    //     case '+':
    //         result += topInput + logicExpresson + bottomInput;
    //         break;
    //     case '-':
    //         result += topInput + logicExpresson + bottomInput;
    //         break;
    //     case '*':
    //         result += topInput + logicExpresson + bottomInput;
    //         break;
    //     case '/':
    //         result += topInput + logicExpresson + bottomInput;
    //         break;
    // }

    $('.calculator').html(result);
}