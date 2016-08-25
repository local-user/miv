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
    private $value  = null;

    // var - valid
    private $valid_keys = array(
        'container_height',
        'container_width',
        'flag_locked',
        'flag_turled',
        'url_height',
        'url_width'
    );



    /** | main **/


        /** | read **/

            public function read() {

                        // query
                        $query = '
                            SELECT value FROM config WHERE config.key = :key
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
                return array( "config" => array( $this->get_data_key() => $data["value"] ));

            }

        /** read | **/


        /** | usert **/

            public function usert() {

                // query
                $query = '
                    INSERT INTO config  (  config.key,  config.value )
                    VALUES              (        :key,        :value )
                    ON DUPLICATE KEY UPDATE
                        config.key     =   :key,
                        config.value   =   :value
                ';

                // data
                $data = array(
                    'key'    => $this->get_data_key(),
                    'value'  => $this->get_data_value()
                );

                // db
                $this->db->set_query($query);
                $this->db->set_query_data($data);
                $this->db->prepare();
                $this->db->query();

                // return
                return $this->read();

            }

        /** usert | **/


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

            private function get_data_value() {
                if( $this->value !== null ){
                    return $this->value;
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

            public function set_data_value($value) {
                if( strlen($value) <= 100 ){
                    $this->value = $value;
                    return true;
                } else {
                    throw new \miv\exception\e400();
                }
            }

        /** set | **/


    /** util | **/

        /** set | **/


    /** util | **/




}
/*
 *  php - object - config
 *
 */
?>
