<?php namespace miv; ?>
<?php


    // require - php - action - create - url
    require_once(__DIR__.'/action_create_url.php');


?>
<?php
/*
 *  php - request - create - url
 *   ( masquarades as request )
 *
 */
class request extends miv {




    // var - object
    private $create_url = null;




    /** | magic **/

        public function __construct() {

            // init - class - create
            $this->create_url = new action_create_url();

            // return
            return true;

        }

    /** magic | **/


    /** | process **/

        public function process() {

            // action - create - url - database - create
            $this->create_url->database_create();

            // return
            return true;

        }

    /** process | **/


    /** | set **/

        public function set_request_data($data) {

            // create - url - set - data
            if( isset($data['url'] )){ $this->create_url->set_data_url($data['url']); }
            else                     { throw new InvalidArgumentException();          }

            // return
            return true;

        }

    /** set | **/




}
/*
 *  php - request - create - url
 *
 */
?>
