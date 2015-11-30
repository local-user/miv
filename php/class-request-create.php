<?php namespace miv; ?>
<?php
/*
 *  php - class - request - create
 *
 */
class request {




    /** global **/
    private $valid_data_keys = array('url');




    /** | magic **/

        public function __construct() {

        }

    /** magic | **/


    /** | set **/

        public function set_request_data($data) {
            foreach( $data as $key => $value ){
                if( in_array($key, $this->valid_data_keys) ){
                    $method = "set_data_$key";
                    if( $this->$method($value) ){
                        //
                        //  ^_^ { .. all the cheese! }
                        //
                    } else {
                        throw new InvalidArgumentException("Invalid value.");
                    }
                } else {
                    throw new InvalidArgumentException("Invalid key.");
                }
            }
            return true;
        }

        private function set_data_url($url) {
            if ( ! filter_var($url, FILTER_VALIDATE_URL) === false ){
                $this->data_url = $url;
                return true;
            } else {
                return false;
            }
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
