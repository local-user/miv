<?php namespace miv\object; ?>
<?php
/*
 *  php - object - msg
 *
 */
?>
<?php
/** | require **/


    require_once(__DIR__.'/../system/database.php');


/** require | **/
?>
<?php
class msg {




    // var - object
    private $db = null;




    /** | magic **/

        public function __construct() {

            // database - db - init
            $this->db = new \miv\system\database();

            // return
            return true;

        }

    /** magic | **/


    /** | reads **/

        public function read_list() {

                    // db - query
                    $query = 'SELECT id FROM msg';

                    // db - get - set - read(s)
                    $this->db->set_query($query);
                    $this->db->set_query_data($data = $this->get_data());
                    $this->db->prepare();
                    $this->db->query();
             return $this->db->read_list();

        }

    /** reads | **/


    /** | get **/

        private function get_data() {
            return array();
        }

    /** get | **/


    /** | set **/

        public function set_data($data) {
            return true;
        }

    /** set | **/




}
/*
 *  php - object - msg
 *
 */
?>
