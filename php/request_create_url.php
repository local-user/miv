<?php namespace miv; ?>
<?php


    // require - php - action - create - url
    require_once(__DIR__.'/action_create_url.php');


?>
<?php
/*
 *  php - request - create - url
 * ( masquarades as request_ext )
 *
 */
class request_ext extends miv {




    // var - data
    private $request_data = null;
    private $return_data  = null;

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
            $id = $this->create_url->database_create();

            // set - return - data
            $this->set_return_data('url', array( 'id' => $id ));

            // return
            return true;

        }

    /** process | **/


    /** | get **/

        public function get_return_data() {

            // ? null
            if( is_null($this->return_data) ){
                throw new NoDataException();
            }

            // return
            return $this->return_data;

        }

    /** get | **/


    /** | set **/

        public function set_request_data($data) {

            // create - url - set - data
            if( isset($data['url'] )){ $this->create_url->set_data_url($data['url']); }
            else                     { throw new InvalidArgumentException();          }

            // set - request - data
            $this->request_data = $data;

            // return
            return true;

        }

        private function set_return_data($type, $data) {

            // set - return - data
            $this->return_data = array( $type => $data );

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
