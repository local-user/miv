<?php namespace miv\object; ?>
<?php
/*
 *  php - object - urls
 *
 */
?>
<?php
/** | require **/


    require_once(__DIR__.'/../system/database.php');


/** require | **/
?>
<?php
class urls {




    // var - object
    private $db = null;




    /** | magic **/

        public function __construct() {
            $this->db = new \miv\system\database();
            return true;
        }

    /** magic | **/


    /** | reads **/

        public function read_count() {

                    // db - read - count - urls
                    $this->db->set_query("
                        SELECT COUNT(id) FROM url AS count
                    ");
                    $this->db->set_query_data($this->get_data());
                    $this->db->prepare();
                    $this->db->query();
            $urls = $this->db->read_list();

            // return - [ urls -> count -> { . } ]
            return array( "urls" => array( "count" =>  $urls ));

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
 *  php - object - urls
 *
 */
?>
