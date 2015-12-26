<?php namespace miv\object; ?>
<?php
/*
 *  php - object - msg
 *
 */
?>
<?php
/** | require **/


    require_once(__DIR__.'/../exception/e400.php');
    require_once(__DIR__.'/../system/database.php');


/** require | **/
?>
<?php
class msg {




    // var - object
    private $db = null;

    // var - data
    private $code   = null;
    private $msg    = null;




    /** | magic **/

        public function __construct() {
            $this->db = new \miv\system\database();
            return true;
        }

    /** magic | **/


    /** | create **/

        public function create() {

                    // db - create - msg
                    $this->db->set_query("
                        INSERT INTO msg (  code,  msg )
                        VALUES          ( :code, :msg )
                    ");
                    $this->db->set_query_data($this->get_data());
                    $this->db->prepare();
                    $this->db->query();
            $id  =  $this->db->get_last_insert_id();

            // return - [ msg -> id -> { . } ]
            return array( "msg" => array( "id" => $id ) );

        }

    /** create | **/


    /** | get **/

        private function get_data() {
                    $data           = array();
                    $data['code']   = $this->code;
                    $data['msg']    = $this->msg;
           return   $data;
        }

    /** get | **/


    /** | set **/

        public function set_data($data) {
            if( ! $this->set_data_code($data['code']) ){ return false; }
            if( ! $this->set_data_msg($data['msg'])   ){ return false; }
                                                         return true;
        }

        public function set_data_code($code) {
            if( is_numeric($code) && strlen($code) == 3 ){
                $this->code = $code;
                return true;
            } else {
                throw new \miv\exception\e400();
            }
        }

        public function set_data_msg($msg) {
            if( ! is_null($msg) ){
                $this->msg = $msg;
                return true;
            } else {
                throw new \miv\exception\e400();
            }
        }

    /** set | **/




}
/*
 *  php - object - msg
 *
 */
?>
