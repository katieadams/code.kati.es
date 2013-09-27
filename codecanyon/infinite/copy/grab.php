<?php

/*
This is the grabber PHP script which 'paginates' your content, and splits it into chunks.
All the necessary data is stored in data.txt, which is infact a HTML page in disguise.
You can access different pages of the script by saying:

http://127.0.0.0/infinite/grab.php?p=1
http://127.0.0.0/infinite/grab.php?p=2
http://127.0.0.0/infinite/grab.php?p=3

etc

*/

function paginate($display, $pg, $total) {

  if(isset($_SERVER['QUERY_STRING']) && trim(
    $_SERVER['QUERY_STRING']) != '') {
    if(stristr($_SERVER['QUERY_STRING'], 'pg='))
      $query_str = '?'.preg_replace('/pg=\d+/', 'pg=', 
        $_SERVER['QUERY_STRING']);
    else
      $query_str = '?'.$_SERVER['QUERY_STRING'].'&pg=';
  } else
    $query_str = '?pg=';
    

  $pages = ($total <= $display) ? 1 : ceil($total / $display);
    

  $first = '<a href="'.$_SERVER['PHP_SELF'].$query_str.'1">
</a>';
  $prev = '<a href="'.$_SERVER['PHP_SELF'].$query_str.($pg - 1).'">
</a>';
  $next = '<a href="'.$_SERVER['PHP_SELF'].$query_str.($pg + 1).'">
</a>';
  $last = '<a href="'.$_SERVER['PHP_SELF'].$query_str.$pages.'">
</a>';
   

  echo '<div style="display:none"><p align="center">';
  echo ($pg > 1) ? "$first : $prev :" : ' :  :';
  

  $begin = $pg - 4;
  while($begin < 1)
    $begin++;
  $end = $pg + 4;
  while($end > $pages)
    $end--;
  for($i=$begin; $i<=$end; $i++)
    echo ($i == $pg) ? ' ['.$i.'] ' : ' <a href="'.
      $_SERVER['PHP_SELF'].$query_str.$i.'">'.$i.'</a> ';
    

  echo ($pg < $pages) ? ": $next : $last" : ':  : ';
  echo '</p></div>';
}

/////////////////////////////
// YOU MAY NEED TO EDIT THIS
/////////////////////////////

// $display is how many LINES you will need parsed, per page
// 150 Is the default value, and is a 'safe bet' if you want to keep your readers satisfied
// You may increase it, but beware!


$display = 150;
$pg = (isset($_REQUEST['pg']) && ctype_digit($_REQUEST['pg'])) ?
  $_REQUEST['pg'] : 1;
$start = $display * $pg - $display;



$data = file('data.txt');
$total = count($data);
$news = array_slice($data, $start, $display); 

paginate($display, $pg, $total);


foreach($news as $value) {
    echo $value;
}
paginate($display, $pg, $total);
?>