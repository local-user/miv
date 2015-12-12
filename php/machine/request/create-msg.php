<?php namespace miv\request; ?>
<?php




    // require - php - action - create - msg
    require_once(__DIR__.'/../action/create/msg.php');

    // require - php - request
    require_once(__DIR__.'/../request.php');




?>
<?php
/*
 *  php - request - create - msg
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
            $this->action = new \miv\action\create\msg();

            // return
            return true;

        }

    /** magic | **/


    /** | process **/

        public function process() {

            // action - create - msg - database - create
            $id = $this->action->database_create();

            // set - return - data
            $this->set_return_data( 201, 'msg', array( 'id' => $id ));

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

            print_r($data);

            // create - msg - set - data - code
            if( isset($data['code'] )){ $this->action->set_data_code($data['code']);    }
            else                      { throw new \miv\exception\invalid_argument;      }

            // create - msg - set - data - msg
            if( isset($data['msg'] )){ $this->action->set_data_msg($data['msg']);       }
            else                     { throw new \miv\exception\invalid_argument;       }

            // set - request - data
            $this->request_data = $data;

            // return
            return true;

        }

    /** set | **/




}
/*
 *  php - request - create - msg
 *
 */
?>
