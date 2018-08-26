<?php
/*
Plugin Name: kbrate
Version: 0.1
Description: This plugin allows you to rate photos by keyboard (0-9 on numeric block)
Plugin URI: 
Author: edison23
Author URI: http://edison23.net
*/

/**
 * This is the main file of the plugin, called by Piwigo in "include/common.inc.php" line 137.
 * At this point of the code, Piwigo is not completely initialized, so nothing should be done directly
 * except define constants and event handlers (see http://piwigo.org/doc/doku.php?id=dev:plugins)
 */

defined('PHPWG_ROOT_PATH') or die('Hacking attempt!');


// +-----------------------------------------------------------------------+
// | Define plugin constants                                               |
// +-----------------------------------------------------------------------+
global $prefixeTable;

define('KBRATE_ID',           basename(dirname(__FILE__)));
define('KBRATE_PATH' ,        PHPWG_PLUGINS_PATH . KBRATE_ID . '/');
define('KBRATE_TABLE',        $prefixeTable . 'kbrate');
define('KBRATE_ADMIN',        get_root_url() . 'admin.php?page=plugin-' . KBRATE_ID);
define('KBRATE_PUBLIC',       get_absolute_root_url() . make_index_url(array('section' => 'kbrate')) . '/');
define('KBRATE_DIR',          PHPWG_ROOT_PATH . PWG_LOCAL_DIR . 'kbrate/');



// +-----------------------------------------------------------------------+
// | Add event handlers                                                    |
// +-----------------------------------------------------------------------+
// init the plugin
// add_event_handler('init', 'kbrate_init');

/*
 * this is the common way to define event functions: create a new function for each event you want to handle
 */

$public_file = KBRATE_PATH . 'include/public_events.inc.php';

// prefilter on photo page
add_event_handler('loc_end_picture', 'kbrate_loc_end_picture',
  EVENT_HANDLER_PRIORITY_NEUTRAL, $public_file);

// function kbrate_init()
// {
//   global $conf;
//   define('KBRATE_RATEITEMS', $conf['rate_items']);
// };