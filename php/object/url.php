<?php namespace miv\object; ?>
<?php
/*
 *  php - object - url
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
class url {




    // var - object
    private $db = null;

    // var - data
    private $url    = null;




    /** | magic **/

        public function __construct() {
            $this->db = new \miv\system\database();
            return true;
        }

    /** magic | **/


    /** | create **/

        public function create() {

                    // db - create - url
                    $this->db->set_query("
                        INSERT INTO url (  url )
                        VALUES          ( :url )
                    ");
                    $this->db->set_query_data($this->get_data());
                    $this->db->prepare();
                    $this->db->query();
            $id  =  $this->db->get_last_insert_id();

            // return - [ url -> id -> { . } ]
            return array( "url" => array( "id" => $id ) );

        }

    /** create | **/


    /** | get **/

        private function get_data() {
                    $data           = array();
                    $data['url']    = $this->url;
           return   $data;
        }

    /** get | **/


    /** | set **/

        public function set_data($data) {
            if( ! $this->set_data_url($data['url'])   ){ return false; }
                                                         return true;
        }

        public function set_data_url($url) {
            if( filter_var($url, FILTER_VALIDATE_URL) !== false ){
                $this->url = $url;
                return true;
            } else {
                throw new \miv\exception\e400();
            }
        }

    /** set | **/




}
/*
 *  php - object - url
 *
 */
?>
