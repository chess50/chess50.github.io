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
function isLowerCase(char) {
    return /^[a-z]$/.test(char);
}
function isUpperCase(char) {
    return /^[A-Z]$/.test(char);
}

function isWhiteCheck(x,y) {
   
        //check for pawn checks
        if(x-1>=0 && x-1<=7 && y-1>=0 && y-1<=7 && board[x-1][y-1]==='p') {console.log("Pawn check!");return true;}
        if(x-1>=0 && x-1<=7 && y+1>=0 && y+1<=7 && board[x-1][y+1]==='p') {console.log("Pawn check!");return true;}
        //check for rook checks
        for(var i=x+1;i<=7;i++){
            if(board[i][y]==='r' || board[i][y]==='q') {console.log("Rook/queen check!");return true;}
            else if(board[i][y]===' ' || board[i][y]==='K') continue;
            else break;
        }
        for(var i=x-1;i>=0;i--){
            if(board[i][y]==='r' || board[i][y]==='q') {console.log("Rook/queen check!");return true;}
            else if(board[i][y]===' ' || board[i][y]==='K') continue;
            else break;
        }
        for(var i=y+1;i<=7;i++){
            if(board[x][i]==='r' || board[x][i]==='q') {console.log("Rook/queen check!");return true;}
            else if(board[x][i]===' ' || board[x][i]==='K') continue;
            else break;
        }
        for(var i=y-1;i>=0;i--){
            // console.log("checking for rook check at "+x+" "+i)
            if(board[x][i]==='r' || board[x][i]==='q') {console.log("Rook/queen check! returning true");return true;}
            else if(board[x][i]===' ' || board[x][i]==='K') continue;
            else break;
        }
        //check for bishop checks
        // console.log("checking for bishop/queen check at")
        for(var i=x+1,j=y+1;i<=7 && j<=7;i++,j++){
            if(board[i][j]==='b' || board[i][j]==='q'){console.log("bishop/queen check!");return true;}
            else if(board[i][j]===' ' || board[i][j]==='K') continue;
            else break;
        }
        for(var i=x-1,j=y-1;i>=0 && j>=0;i--,j--){
            if(board[i][j]==='b' || board[i][j]==='q'){console.log("bishop/queen check!");return true;}
            else if(board[i][j]===' ' || board[i][j]==='K') continue;
            else break;
        }
        for(var i=x+1,j=y-1;i<=7 && j>=0;i++,j--){
            // console.log("checking for bishop/queen check at "+i+" "+j)
            if(board[i][j]==='b' || board[i][j]==='q') {console.log("bishop/queen check!");return true;}
            else if(board[i][j]===' ' || board[i][j]==='K') continue;
            else break;
        }
        for(var i=x-1,j=y+1;i>=0 && j<=7;i--,j++){
            if(board[i][j]==='b' || board[i][j]==='q') {console.log("bishop/queen check!");return true;}
            else if(board[i][j]===' ' || board[i][j]==='K') continue;
            else break;
        }
        //check for knight checks
        // console.log("checking for knight check ")
        if(x+2<=7 && y+1<=7 && board[x+2][y+1]==='n') {console.log("Knight check!");return true;}
        if(x+2<=7 && y-1>=0 && board[x+2][y-1]==='n') {console.log("Knight check!");return true;}
        if(x-2>=0 && y+1<=7 && board[x-2][y+1]==='n') {console.log("Knight check!");return true;}
        if(x-2>=0 && y-1>=0 && board[x-2][y-1]==='n') {console.log("Knight check!");return true;}
        if(x+1<=7 && y+2<=7 && board[x+1][y+2]==='n') {console.log("Knight check!");return true;}
        if(x+1<=7 && y-2>=0 && board[x+1][y-2]==='n') {console.log("Knight check!");return true;}
        if(x-1>=0 && y+2<=7 && board[x-1][y+2]==='n') {console.log("Knight check!");return true;}
        if(x-1>=0 && y-2>=0 && board[x-1][y-2]==='n') {console.log("Knight check!");return true;}
      return false;

}
function checkmateWhite(){
    var legal_moves = [];
    var x,y;
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[i].length;j++){
            if(board[i][j]==='K') {x=i;y=j;break;}
            }
    }

    if(x+1<=7 && y+1<=7 && !isWhiteCheck(x+1,y+1)&& (board[x+1][y+1]===' ' || (isLowerCase(board[x+1][y+1]) && isAlpha(board[x+1][y+1])))) legal_moves.push([x+1,y+1]);
    if(x+1<=7 && y-1>=0 && !isWhiteCheck(x+1,y-1)&& (board[x+1][y-1]===' ' || (isLowerCase(board[x+1][y-1]) && isAlpha(board[x+1][y-1])))) legal_moves.push([x+1,y-1]);
    if(x-1>=0 && y+1<=7 && !isWhiteCheck(x-1,y+1)&& (board[x-1][y+1]===' ' || (isLowerCase(board[x-1][y+1]) && isAlpha(board[x-1][y+1])))) legal_moves.push([x-1,y+1]);
    if(x-1>=0 && y-1>=0 && !isWhiteCheck(x-1,y-1)&& (board[x-1][y-1]===' ' || (isLowerCase(board[x-1][y-1]) && isAlpha(board[x-1][y-1])))) legal_moves.push([x-1,y-1]);
    if(x+1<=7 && !isWhiteCheck(x+1,y)&& (board[x+1][y]===' ' || (isLowerCase(board[x+1][y]) && isAlpha(board[x+1][y]))))legal_moves.push([x+1,y]);
    if(x-1>=0 && !isWhiteCheck(x-1,y)&& (board[x-1][y]===' ' || (isLowerCase(board[x-1][y]) && isAlpha(board[x-1][y]))))legal_moves.push([x-1,y]);
    if(y+1<=7 && !isWhiteCheck(x,y+1)&& (board[x][y+1]===' ' || (isLowerCase(board[x][y+1]) && isAlpha(board[x][y+1]))))legal_moves.push([x,y+1]);
    if(y-1>=0 && !isWhiteCheck(x,y-1)&& (board[x][y-1]===' ' || (isLowerCase(board[x][y-1]) && isAlpha(board[x][y-1]))))legal_moves.push([x,y-1]);
    console.log(legal_moves)


    
    return legal_moves.length===0 && isWhiteCheck(x,y) && board[x][y]==='K';
    

}
function isBlackCheck(x,y) {
    //check for pawn checks
    if(x-1>=0 && x-1<=7 && y-1>=0 && y-1<=7 && board[x-1][y-1]==='P') {console.log("Pawn check!");return true;}
    if(x-1>=0 && x-1<=7 && y+1>=0 && y+1<=7 && board[x-1][y+1]==='P') {console.log("Pawn check!");return true;}
    //check for rook checks
    for(var i=x+1;i<=7;i++){
        if(board[i][y]==='R' || board[i][y]==='Q') {console.log("Rook/queen check!");return true;}
        else if(board[i][y]===' ' || board[i][y]==='k') continue;
        else break;
    }
    for(var i=x-1;i>=0;i--){
        if(board[i][y]==='R' || board[i][y]==='Q') {console.log("Rook/queen check!");return true;}
        else if(board[i][y]===' ' || board[i][y]==='k') continue;
        else break;
    }
    for(var i=y+1;i<=7;i++){
        if(board[x][i]==='R' || board[x][i]==='Q') {console.log("Rook/queen check!");return true;}
        else if(board[x][i]===' ' || board[x][i]==='k') continue;
        else break;
    }
    for(var i=y-1;i>=0;i--){
        // console.log("checking for rook check at "+x+" "+i)
        if(board[x][i]==='R' || board[x][i]==='Q') {console.log("Rook/queen check! returning true");return true;}
        else if(board[x][i]===' ' || board[x][i]==='k') continue;
        else break;
    }
    //check for bishop checks
    // console.log("checking for bishop/queen check at")
    for(var i=x+1,j=y+1;i<=7 && j<=7;i++,j++){
        if(board[i][j]==='B' || board[i][j]==='Q'){console.log("bishop/queen check!");return true;}
        else if(board[i][j]===' ' || board[i][j]==='k') continue;
        else break;
    }
    for(var i=x-1,j=y-1;i>=0 && j>=0;i--,j--){
        if(board[i][j]==='B' || board[i][j]==='Q'){console.log("bishop/queen check!");return true;}
        else if(board[i][j]===' ' || board[i][j]==='k') continue;
        else break;
    }
    for(var i=x+1,j=y-1;i<=7 && j>=0;i++,j--){
        // console.log("checking for bishop/queen check at "+i+" "+j)
        if(board[i][j]==='B' || board[i][j]==='Q') {console.log("bishop/queen check!");return true;}
        else if(board[i][j]===' ' || board[i][j]==='k') continue;
        else break;
    }
    for(var i=x-1,j=y+1;i>=0 && j<=7;i--,j++){
        if(board[i][j]==='B' || board[i][j]==='Q') {console.log("bishop/queen check!");return true;}
        else if(board[i][j]===' ' || board[i][j]==='k') continue;
        else break;
    }
    //check for knight checks
    // console.log("checking for knight check ")
    if(x+2<=7 && y+1<=7 && board[x+2][y+1]==='n') {console.log("Knight check!");return true;}
    if(x+2<=7 && y-1>=0 && board[x+2][y-1]==='n') {console.log("Knight check!");return true;}
    if(x-2>=0 && y+1<=7 && board[x-2][y+1]==='n') {console.log("Knight check!");return true;}
    if(x-2>=0 && y-1>=0 && board[x-2][y-1]==='n') {console.log("Knight check!");return true;}
    if(x+1<=7 && y+2<=7 && board[x+1][y+2]==='n') {console.log("Knight check!");return true;}
    if(x+1<=7 && y-2>=0 && board[x+1][y-2]==='n') {console.log("Knight check!");return true;}
    if(x-1>=0 && y+2<=7 && board[x-1][y+2]==='n') {console.log("Knight check!");return true;}
    if(x-1>=0 && y-2>=0 && board[x-1][y-2]==='n') {console.log("Knight check!");return true;}
    // console.log("returning false reached end ")
  return false;

    
}
function checkmateBlack(){
    var legal_moves = [];
    var x,y;
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[i].length;j++){
            if(board[i][j]==='k') {x=i;y=j;break;}
            }
    }
    if(x+1<=7 && y+1<=7 && !isBlackCheck(x+1,y+1)&& (board[x+1][y+1]===' ' || (isUpperCase(board[x+1][y+1]) && isAlpha(board[x+1][y+1])))) legal_moves.push([x+1,y+1]);
    if(x+1<=7 && y-1>=0 && !isBlackCheck(x+1,y-1)&& (board[x+1][y-1]===' ' || (isUpperCase(board[x+1][y-1]) && isAlpha(board[x+1][y-1])))) legal_moves.push([x+1,y-1]);
    if(x-1>=0 && y+1<=7 && !isBlackCheck(x-1,y+1)&& (board[x-1][y+1]===' ' || (isUpperCase(board[x-1][y+1]) && isAlpha(board[x-1][y+1])))) legal_moves.push([x-1,y+1]);
    if(x-1>=0 && y-1>=0 && !isBlackCheck(x-1,y-1)&& (board[x-1][y-1]===' ' || (isUpperCase(board[x-1][y-1]) && isAlpha(board[x-1][y-1])))) legal_moves.push([x-1,y-1]);
    if(x+1<=7 && !isBlackCheck(x+1,y)&& (board[x+1][y]===' ' || (isUpperCase(board[x+1][y]) && isAlpha(board[x+1][y]))))legal_moves.push([x+1,y]);
    if(x-1>=0 && !isBlackCheck(x-1,y)&& (board[x-1][y]===' ' || (isUpperCase(board[x-1][y]) && isAlpha(board[x-1][y]))))legal_moves.push([x-1,y]);
    if(y+1<=7 && !isBlackCheck(x,y+1)&& (board[x][y+1]===' ' || (isUpperCase(board[x][y+1]) && isAlpha(board[x][y+1]))))legal_moves.push([x,y+1]);
    if(y-1>=0 && !isBlackCheck(x,y-1)&& (board[x][y-1]===' ' || (isUpperCase(board[x][y-1]) && isAlpha(board[x][y-1]))))legal_moves.push([x,y-1]);
    console.log(legal_moves)


    
    return legal_moves.length===0 && isBlackCheck(x,y) && board[x][y]==='k';

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


    if (slash < 7)  {invalid=true;output += '[Row]: Insufficient number of rows [<8]?\n';}
    if (slash > 7)  {invalid=true;output += '[Row]: Row limit exceeded! [>8]?\n';}
    if (total < 64) {invalid=true;output += '[Total]: Insufficient material!\n';}
    if (total > 64) {invalid=true;output += '[Total]: Material limit exceeded!\n';}

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
    
   
    console.log("total"+total);
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
    
    var w_s_p = w_score / (w_score+b_score);
    var b_s_p = b_score / (w_score+b_score);
    // if (w_s_p > 1) w_s_p = 1;
    // if (b_s_p > 1) b_s_p = 1;
    
    var w_s_e = Math.round(w_s_p * 10);
    var b_s_e = Math.round(b_s_p * 10);
    
    var b_rem = 10 - b_s_e;
    var w_rem = 10 - w_s_e;
    
    var output = '';
    output += '<pre style="font-size: 20px; background-color: black; color: white;">';
    output += '<span style="color: #f00;">White Score: ' + w_score + '[' + w_s_p.toFixed(2) + ']';
    output += '\t\t<span style="color: #f00;">Black Score: ' + b_score + '[' + (-b_s_p).toFixed(2) + ']</span>\n\n';
    
    output += '<span style="color: #0f0;">[Evaluation bar]:</span>\n\n';
    output += '(' + w_s_p.toFixed(2) + ')W';
    output += '   B(' + b_s_p.toFixed(2) + ')\n';
    for (var i = 0; i < w_rem; i++) output += '_';
    for (var i = 0; i < w_s_e; i++) output += '#';
    output += ' | ';
    for (var i = 0; i < b_s_e; i++) output += '#';
    for (var i = 0; i < b_rem; i++) output += '_';
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
function detectDeviceType() {
    // Check if the screen width is less than or equal to a certain threshold (e.g., 768 pixels)
    if (window.innerWidth <= 768) {
        return 'Mobile'; // Return 'Mobile' if the screen width is smaller or equal to 768 pixels
    } else {
        return 'Desktop'; // Return 'Desktop' otherwise
    }
}

window.onload = function() {
var deviceType = detectDeviceType();
if(deviceType=='Mobile'){
    alert("This website is not optimized for mobile devices. Please use a desktop site for better experience.");
    document.write('<h1 id="mobile" style="color:red;text-align: center;">If you are using Mobile Phone , please open this in "Desktop mode/site" \<br\> \<br\> Its as easy as just clicking  on three dots on top right corner and click on "Desktop site" to view the result. \<br\> \<br\>\<br\> \<br\>Its because the chessboard doesnt appears well after parsing due to spacing constraints!</h1>')
}
}

function submitFen() {
    var deviceType = detectDeviceType();
if(deviceType=='Mobile'){
    document.write('<h1 id="mobile" style="color:red;text-align: center;">If you are using Mobile Phone , please open this in "Desktop mode/site" \<br\> \<br\> Its as easy as just clicking  on three dots on top right corner and click on "Desktop site" to view the result. \<br\> \<br\>\<br\> \<br\>Its because the chessboard doesnt appears well after parsing due to spacing constraints!</h1>')
}
else{
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
    if(valid_fen(fen_parse) &&deviceType=='Desktop'){
        applyAnimation();
    var output = '';
    output += '<pre style="font-size: 16px; background-color: black; color: white;">';
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
    var wx,wy,bx,by
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[i].length;j++){
            if(board[i][j]==='K') {wx=i;wy=j;}
            if(board[i][j]==='k') {bx=i;by=j;}
            }
        }
    statistics();
    evaluate();
    // console.log(isBlackCheck(bx,by))
    if(checkmateWhite()){
        alert("Checkmate , Black wins!");
    }
    else if(checkmateBlack()){
        alert("Checkmate , White wins!");
    }
    else{
        alert("White in check? :"+isWhiteCheck(wx,wy))
        alert("Black in check? :"+isBlackCheck(bx,by))
    
    }
    

}
else if(deviceType=='Mobile'){
    alert('Please change to desktop site!!\nClick on three dots on top right corner and click on "Desktop site" to view the result.')
}
}
}

