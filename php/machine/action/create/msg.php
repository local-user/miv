<?php namespace miv\action\create; ?>
<?php




    // require - action - create
    require_once(__DIR__.'/../create.php');

    // require - miv - system - database
    require_once(__DIR__.'/../../system/database.php');




?>
<?php
/*
 *  php - action - create - msg
 *
 */
class msg extends create {




    // var - database
    private $database               = null;
    private $database_query_create  =                           '
        INSERT INTO msg ( code, msg ) VALUES ( :code, :msg )
                                                                ';

    // var - data
    private $data_msg   =   null;




    /** | magic **/

        public function __construct() {

            // db - init
            $this->database = new \miv\system\database();

            // return
            return true;

        }

    /** magic | **/


    /** database | **/

        public function database_create() {

                    // database - get - set - create
                    $this->database->set_query($this->database_query_create);
                    $this->database->set_query_data($data  = $this->get_data());
                    $this->database->prepare();
                    $this->database->query();
            return  $this->database->get_last_insert_id();

        }

    /** | database **/


    /** | get **/

        public function get_data() {

                    // data - get
                    $data           =   array();
                    $data['code']   =   $this->data_code;
                    $data['msg']    =   $this->data_msg;
            return  $data;

        }

    /** get | **/


    /** | set **/

        public function set_data_code($code) {

            // ? numeric
            if( ! is_numeric($code) ){ throw new \miv\exception\invalid_argument(); }

            // ? length
            if( strlen($code) > 3   ){ throw new \miv\exception\invalid_argument(); }

            // set
            $this->data_code = $code;

            // return
            return true;

        }

        public function set_data_msg($msg) {

            // set
            $this->data_msg = $msg;

            // return
            return true;

        }

    /** set | **/




}
/*
 *  php - class - action - create - msg
 *
 */
?>
