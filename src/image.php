<?php
   header('Content-Type:application/json; charset=utf-8');
  $imageUrl='[{"url":"images/场景.jpg"},
             {"url":"images/贵州风景.jpg"},
             {"url":"images/田园.jpg"}
  ]';
  echo json_encode($imageUrl);

?>