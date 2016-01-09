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
    private $id     = null;
    private $url    = null;




    /** | main **/


        /** | create **/

            public function create() {

                        // query
                        $query = '
                            INSERT INTO url (  letter,  url )
                            VALUES          ( :letter, :url )
                        ';

                        // data
                        $data = array(
                            'letter'    => $this->get_data_letter(),
                            'url'       => $this->get_data_url()
                        );

                        // db
                        $this->db->set_query($query);
                        $this->db->set_query_data($data);
                        $this->db->prepare();
                        $this->db->query();
                $id  =  $this->db->get_last_insert_id();

                // return - [ url -> id -> { . } ]
                return array( "url" => array( "id" => $id ) );

            }

        /** create | **/


        /** | read **/

            public function read() {

                        // query
                        $query = '
                            SELECT * FROM url WHERE id = :id
                        ';

                        // data
                        $data = array(
                            'id' => $this->get_data_id()
                        );

                        // db
                        $this->db->set_query($query);
                        $this->db->set_query_data($data);
                        $this->db->prepare();
                        $this->db->query();
                $url =  $this->db->read_single();

                // return - [ url -> id -> { . } ]
                return array( "url" => $url );

            }

        /** read | **/


    /** main | **/




    /** | util **/


        /** | magic **/

            public function __construct() {
                $this->db = new \miv\system\database();
                return true;
            }

        /** magic | **/


        /** | get **/

            private function get_data_id() {
                if( $this->id !== null ){
                    return $this->id;
                } else {
                    throw new \miv\exception\e400();
                }
            }

            private function get_data_letter() {
                if( $this->url !== null ){
                                  $url = parse_url($this->url);
                    return substr($url['host'], 0, 1);
                } else {
                    throw new \miv\exception\e400();
                }
            }

            private function get_data_url() {
                if( $this->url !== null ){
                    return $this->url;
                } else {
                    throw new \miv\exception\e400();
                }
            }

        /** get | **/


        /** | set **/

            public function set_data($data) {
                foreach( $data as $key => $value ){
                                             $method = "set_data_$key";
                    if( method_exists($this, $method) ){
                        $this->$method($value);
                    } else {
                        return false;
                    }
                }
            }

            public function set_data_id($id) {
                if( is_numeric($id) ){
                    $this->id = $id;
                    return true;
                } else {
                    throw new \miv\exception\e400();
                }
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


    /** util | **/




}
/*
 *  php - object - url
 *
 */
?>
