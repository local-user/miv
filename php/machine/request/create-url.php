<?php namespace miv\request; ?>
<?php




    // require - php - action - create - url
    require_once(__DIR__.'/../action/create/url.php');

    // require - php - request
    require_once(__DIR__.'/../request.php');




?>
<?php
/*
 *  php - request - create - url
 * ( masquarades as request_ext )
 *
 */
class request_ext extends request {




    // var - action
    protected $action         =   null;

    // var - data
    protected $request_data   =   null;
    protected $return_data    =   null;




    /** | magic **/

        public function __construct() {

            // init - class - create
            $this->action = new \miv\action\create\url();

            // return
            return true;

        }

    /** magic | **/


    /** | process **/

        public function process() {

            // action - create - url - database - create
            $id = $this->action->database_create();

            // set - return - data
            $this->set_return_data( 201, 'url', array( 'id' => $id ));

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
            if( isset($data['url'] )){ $this->action->set_data_url($data['url']); }
            else                     { throw new InvalidArgumentException();      }

            // set - request - data
            $this->request_data = $data;

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
