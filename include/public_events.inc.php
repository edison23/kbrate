<?php
defined('KBRATE_PATH') or die('Hacking attempt!');

/**
 * add a prefilter on photo page
 */

function kbrate_loc_end_picture()
{
  // define sources for javascripts
  $KBRATE_JQUERYSPATH = KBRATE_PATH . 'include/jquery-3.3.1.min.js';
  $KBRATE_JSPATH = KBRATE_PATH . 'include/kbrate.js';

  echo "<script type=\"text/javascript\" src=\"" . $KBRATE_JQUERYSPATH . "\"></script>";
  echo "<script type=\"text/javascript\" src=\"" . $KBRATE_JSPATH . "\"></script>";
}
