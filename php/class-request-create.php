<?php
/*
 *  php - class - request - create
 *
 */
class request {




    /** global **/
    private $valid_data_keys = array('url');


    /** | magic **/

        public function __construct($data) {
            $this->load_data($data);
        }

    /** magic | **/


    /** | load **/

        private function load_data($data) {
            foreach( $data as $key => $value ){
                if( in_array($key, $this->valid_data_keys) ){
                    $method = "set_data_$key";
                    $this->$method($value);
                } else {
                    throw new InvalidArgumentException("Unrecognized key '$key'");
                }
            }
            return true;
        }

    /** load |**/


    /** | set **/

        private function set_data_url($url) {
            $this->data_url = $url;
        }

    /** set | **/


    /** | valid **/
    /** valid | **/




}
/*
 *  php - class - router
 *
 */
?>
