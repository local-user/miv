<?php namespace miv\request; ?>
<?php




    // require - php - action - create - url
    require_once(__DIR__.'/../action/read/url.php');

    // require - php - request
    require_once(__DIR__.'/../request.php');




?>
<?php
/*
 *   php - request - get - url
 * ( masquarades as request_ext )
 *
 */
class request_ext extends request {




    // var - action
    private $action         =   null;

    // var - data
    private $request_data   =   null;
    private $return_data    =   null;




    /** | magic **/

        public function __construct() {

            // init - class - create
            $this->action = new \miv\action\read\url();

            // return
            return true;

        }

    /** magic | **/


    /** | process **/

        public function process() {

            // action - create - url - read - all
            $data = $this->action->database_read_all();

            // set - return - data
            $this->set_return_data( 200, 'urls', $data );

            // return
            return true;

        }

    /** process | **/


    /** | get **/

        public function get_return_data() {

            // ? null
            if( is_null($this->return_data) ){
                return array();
            }

            // return
            return $this->return_data;

        }

    /** get | **/


    /** | set **/

        public function set_request_data($data) {

            // set - request - data
            $this->request_data = $data;

            // return
            return true;

        }

        private function set_return_data($code, $type, $data) {

            // set - return - data
            $this->return_data = array( $code, array( $type => $data ) );

            // return
            return true;

        }

    /** set | **/




}
/*
 *   php - request - get - url
 *
 */
?>
