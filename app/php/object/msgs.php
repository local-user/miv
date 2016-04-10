<?php namespace miv\object; ?>
<?php
/*
 *  php - object - msgs
 *
 */
?>
<?php
/** | require **/


    require_once(__DIR__.'/../system/database.php');


/** require | **/
?>
<?php
class msgs {




    // var - object
    private $db = null;




    /** | magic **/

        public function __construct() {
            $this->db = new \miv\system\database();
            return true;
        }

    /** magic | **/


    /** | reads **/

        public function read_list() {

                    // db - read_list - msgs
                    $this->db->set_query("
                        SELECT id FROM msg
                    ");
                    $this->db->set_query_data($data = $this->get_data());
                    $this->db->prepare();
                    $this->db->query();
            $msgs = $this->db->read_list();

            // return - [ msgs -> { ... } ]
            return array( "msgs" => $msgs );

        }

    /** reads | **/


    /** | get **/

        private function get_data() {
            return array();
        }

    /** get | **/


    /** | set **/

        public function set_data($data = array()) {
            return true;
        }

    /** set | **/




}
/*
 *  php - object - msgs
 *
 */
?>
