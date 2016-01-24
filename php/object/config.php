<?php namespace miv\object; ?>
<?php
/*
 *  php - object - config
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
class config {




    // var - object
    private $db     = null;

    // var - data
    private $key    = null;

    // var - valid
    private $valid_keys = array(
        'flag_locked'
    );



    /** | main **/


        /** | read **/

            public function read() {

                        // query
                        $query = '
                            SELECT * FROM config WHERE config.key = :key
                        ';

                        // data
                        $data = array(
                            'key'    => $this->get_data_key()
                        );

                        // db
                        $this->db->set_query($query);
                        $this->db->set_query_data($data);
                        $this->db->prepare();
                        $this->db->query();
                $data = $this->db->read_single();

                // return - [ config -> { key } -> { . } ]
                return array( "config" => array( $this->get_data_key() => $data ));

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

            private function get_data_key() {
                if( $this->key !== null ){
                    return $this->key;
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

            public function set_data_key($key) {
                if( in_array($key, $this->valid_keys) ){
                    $this->key = $key;
                    return true;
                } else {
                    throw new \miv\exception\e400();
                }
            }

        /** set | **/


    /** util | **/




}
/*
 *  php - object - config
 *
 */
?>
