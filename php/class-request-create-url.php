<?php namespace miv; ?>
<?php
/*
 *  php - class - request - create - url
 *
 */
class request {




    // var - object
    private $create_url = null;




    /** | magic **/

        public function __construct() {

            // require - class - action - create
            require(__DIR__.'/class-action-create-url.php');

            // init - class - create
            $this->create_url = new create_url();

            // return
            return true;

        }

    /** magic | **/


    /** | process **/

        public function process() {

            // create - url - database - create
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
 *  php - class - request - create - url
 *
 */
?>
