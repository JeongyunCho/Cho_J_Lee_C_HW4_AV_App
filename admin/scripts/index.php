<?php

require 'function.php';

if (isset($_GET['video'])) {
  
    // pass the connection and the movie id to a function
  $data = get_single_video($conn, $_GET['video']);
  echo json_encode($data);
} else {
    // pass the connection and the movie id to a function
  $data = get_all_videos($conn);
  echo json_encode($data);
}
?>