//2d array
var board = [[],[],[],[],[],[],[],[]];
var t_white=0,t_black=0;
var w_pawn=0,w_knight=0,w_bishop=0,w_rook=0;
var w_king=0,w_queen=0;
var b_pawn=0,b_knight=0,b_bishop=0,b_rook=0;
var b_king=0,b_queen=0;

function isAlpha(character) {
    return /^[a-zA-Z]$/.test(character);
}

function FEN_PARSER(fen) {
    var i = 0, j = 0;
    for (var k = 0; k < fen.length; k++) {
        var dgt = false;
        var ec = 0;
        if (!isNaN(fen[k])) {
            dgt = true;
            ec = parseInt(fen[k]);
        }
        if (j > 7) j = 0;
        if (fen[k] === '/') {
            i++;
            continue;
        }
        if (i > 7) i = 0;
        if (!dgt) {

            board[i][j++] = fen[k];
        } else {
            for (var p = 0; p < ec; p++) {
                board[i][j++] = ' ';
            }
        }
    }
}
function statistics() {

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (isAlpha(board[i][j]) && board[i][j].toUpperCase() === board[i][j]) {
                t_white++;
                switch (board[i][j]) {
                    case 'P':
                        w_pawn++;
                        break;
                    case 'B':
                        w_bishop++;
                        break;
                    case 'N':
                        w_knight++;
                        break;
                    case 'R':
                        w_rook++;
                        break;
                    case 'K':
                        w_king++;
                        break;
                    case 'Q':
                        w_queen++;
                        break;
                }
            } else if (isAlpha(board[i][j]) && board[i][j].toLowerCase() === board[i][j]) {
                t_black++;
                switch (board[i][j]) {
                    case 'p':
                        b_pawn++;
                        break;
                    case 'b':
                        b_bishop++;
                        break;
                    case 'n':
                        b_knight++;
                        break;
                    case 'r':
                        b_rook++;
                        break;
                    case 'k':
                        b_king++;
                        break;
                    case 'q':
                        b_queen++;
                        break;
                }
            }
        }
    }
    // console.log(t_white)
    var output = '';
    output += '<pre style="font-size: 20px; background-color: black; color: white;">';
    output += '<span style="color: #00FF00;">STATISTICS</span>\n';
    output += '<span style="color:#00FF00;">-----------------------------------------</span>\n';
    output += '<span style="color: #0000FF;">Total White Pieces: </span><span style="color: #0000FF;">' + t_white + '</span>\t\t<span style="color: #0000FF;">Total Black Pieces: </span><span style="color: #0000FF;">' + t_black + '</span>\n';
    output += '<span style="color: #0000FF;">White Pawns: </span><span style="color: #0000FF;">' + w_pawn + '</span>\t\t\t<span style="color: #0000FF;">Black Pawns: </span><span style="color: #0000FF;">' + b_pawn + '</span>\n';
    output += '<span style="color: #0000FF;">White Knights: </span><span style="color: #0000FF;">' + w_knight + '</span>\t\t<span style="color: #0000FF;">Black Knights: </span><span style="color: #0000FF;">' + b_knight + '</span>\n';
    output += '<span style="color: #0000FF;">White Bishops: </span><span style="color: #0000FF;">' + w_bishop + '</span>\t\t<span style="color: #0000FF;">Black Bishops: </span><span style="color: #0000FF;">' + b_bishop + '</span>\n';
    output += '<span style="color: #0000FF;">White Rooks: </span><span style="color: #0000FF;">' + w_rook + '</span>\t\t\t<span style="color: #0000FF;">Black Rooks: </span><span style="color: #0000FF;">' + b_rook + '</span>\n';
    output += '<span style="color: #0000FF;">White King: </span><span style="color: #0000FF;">' + w_king + '</span>\t\t\t<span style="color: #0000FF;">Black King: </span><span style="color: #0000FF;">' + b_king + '</span>\n';
    output += '<span style="color: #0000FF;">White Queen: </span><span style="color: #0000FF;">' + w_queen + '</span>\t\t\t<span style="color: #0000FF;">Black Queen: </span><span style="color: #0000FF;">' + b_queen + '</span>\n';
    output += '</pre>';

    document.getElementById('statistics').innerHTML = output;
}
function valid_fen(fen) {
    let slash = 0;
    let total = 0;
    let invalid = false;
    let invalidIndex = new Array(fen.length).fill(0);
    let output = '';

    for (let i = 0; i < fen.length; i++) {
        if (fen[i] === '/') slash++;
        else if (/[a-zA-Z]/.test(fen[i])) {
            if ('PpKkQqBbNnRr'.includes(fen[i])) total++;
            else {
                invalidIndex[i] = 1;
                invalid = true;
            }
        }
        else if (/[0-9]/.test(fen[i])) {
            total += parseInt(fen[i]);
        }
        else {
            invalidIndex[i] = 1;
            invalid = true;
        }
    }



    if (invalid) {
        output += '[Invalid piece/s]:\n';
        for (let i = 0; i < fen.length; i++) {
            if (invalidIndex[i]) {
                output += '['+fen[i]+'❌]';
            } else {
                output += '✅';
            }
        }
            output+= '\n';
    

    if (slash < 7) output += '[Row]: Insufficient number of rows [<8]?\n';
    if (slash > 7) output += '[Row]: Row limit exceeded! [>8]?\n';
    if (total < 64) output += '[Total]: Insufficient material!\n';
    if (total > 64) output += '[Total]: Material limit exceeded!\n';
    alert(output);
    window.location.reload();
}

    return (slash === 7 && total === 64 && !invalid);
}

function evaluate() {
    var w_score = 0, b_score = 0;
    w_score += w_pawn * 1;
    w_score += w_knight * 3;
    w_score += w_bishop * 3;
    w_score += w_rook * 5;
    w_score += w_queen * 9;
    b_score += b_pawn * 1;
    b_score += b_knight * 3;
    b_score += b_bishop * 3;
    b_score += b_rook * 5;
    b_score += b_queen * 9;
    
    var w_s_p = w_score / 39;
    var b_s_p = b_score / 39;
    if (w_s_p > 1) w_s_p = 1;
    if (b_s_p > 1) b_s_p = 1;
    
    var w_s_e = Math.round(w_s_p * 10);
    var b_s_e = Math.round(b_s_p * 10);
    
    var b_rem = 10 - b_s_e;
    var w_rem = 10 - w_s_e;
    
    var output = '';
    output += '<pre style="font-size: 20px; background-color: black; color: white;">';
    output += '<span style="color: #f00;">White Score: ' + w_score + '[' + w_s_p.toFixed(2) + ']';
    output += '\t\t<span style="color: #f00;">Black Score: ' + b_score + '[' + (-b_s_p).toFixed(2) + ']</span>\n\n';
    
    output += '<span style="color: #00FF00;">[Evaluation bar]:</span>\n\n';
    for (var i = 0; i < 6; i++) output += ' ';
    output += '(' + b_s_p.toFixed(2) + ')B';
    output += '   W(' + w_s_p.toFixed(2) + ')\n';
    for (var i = 0; i < b_rem; i++) output += '_';
    for (var i = 0; i < b_s_e; i++) output += '#';
    output += ' | ';
    for (var i = 0; i < w_s_e; i++) output += '#';
    for (var i = 0; i < w_rem; i++) output += '_';
    output += '\n-1.0                      1.0\n\n';
    
    output += '<span style="color: #0ff;">*[Approx guess]: </span>';
    if (w_score > b_score) output += '<span style="color: #0f0;">White is winning!</span>\n';
    else if (w_score < b_score) output += '<span style="color: #0f0;">Black is winning!</span>\n';
    else output += '<span style="color: #0f0;">Position is equal for both !</span>\n';
    
    output += '</pre>';
    
    document.getElementById('evaluation').innerHTML = output;
}


function applyAnimation() {
    const elements = document.querySelectorAll('#chessboard, #statistics, #evaluation');
    elements.forEach(element => {

        element.classList.remove('animate-divs');

        void element.offsetWidth;

        element.classList.add('animate-divs');
    });
}


function submitFen() {
    t_white=0,t_black=0;
    w_pawn=0,w_knight=0,w_bishop=0,w_rook=0;
    w_king=0,w_queen=0;
    b_pawn=0,b_knight=0,b_bishop=0,b_rook=0;
    b_king=0,b_queen=0;
    var fen = document.getElementById('fen').value;
    var fen_parse=""
    for(var i=0;i<fen.length;i++){
        if(fen[i]!=' '){
            fen_parse+=fen[i];
        }
        else break;
    }

    console.log(fen_parse);
    FEN_PARSER(fen_parse); 
    if(valid_fen(fen_parse)){
        applyAnimation();
      
    var output = '';
    output += '<pre style="font-size: 20px; background-color: black; color: white;">';
    output += '<span style="color:#00FF00;">Parsed Result: </span>\n';
    output += '<span style="color:#00FF00;">  +---+---+---+---+---+---+---+---+</span>\n';
    for (var i = 0; i < board.length; i++) {
        output += '<span style="color: #00FF00;">' + (8 - i) + ' |</span>';
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] && board[i][j].toUpperCase() === board[i][j]) {
                output += '<span style="color: #00f;"> ' + board[i][j] + '</span>';
            } else if (board[i][j] && board[i][j].toLowerCase() === board[i][j]) {
                output += '<span style="color: #f00;"> ' + board[i][j] + '</span>';
            }
            output += '<span style="color: #00FF00;"> |</span>';
        }
        output += '\n<span style="color: #00FF00;">  +---+---+---+---+---+---+---+---+</span>\n';
    }
    output += '<span style="color: #00FF00;">  a   b   c   d   e   f   g   h</span>\n';
    output += '</pre>';
    document.getElementById('chessboard').innerHTML = output;
    
    statistics();
    evaluate();
    

}
}

