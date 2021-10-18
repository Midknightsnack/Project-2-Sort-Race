/*
    Class: CPSC 335-03
    Assignment: Project 2 - Sort Race

    Authors:
        Valerie Martinez (valeriemartnz@csu.fulleron.edu)
        Anthony Sanchez (sanchezanthony244@csu.fullerton.edu)
        Bradley Diep (bdippin12@csu.fullerton.edu)
        Jason Duong (reddkingdom@csu.fullerton.edu)

    Description:
        code borrowed from professor -> draws a fancy grid with major and minor lines
*/

function draw_grid (rminor, rmajor, rstroke, rfill)  {
    stroke(rstroke);
    fill(rfill);
    let sz = board.cell;
    let width = board.width*board.cell;
    let height = board.height*board.cell; 
    for (var ix = 0; ix < width; ix += rminor) {
        let big_linep = (ix % rmajor == 0);
        let line_wgt = 1;
        if (big_linep) line_wgt = 2;
        strokeWeight(line_wgt);
        line(ix, 0, ix, height);
        strokeWeight(1);
    }
    for (var iy = 0; iy < height; iy += rminor) {
        let big_linep = (iy % rmajor == 0);
        let line_wgt = 1;
        if (big_linep) line_wgt = 2;
        strokeWeight(line_wgt);
        line(0, iy, width, iy);
        strokeWeight(1);
    }
}
