<?php namespace miv\system; ?>
<?php
/*
 *  php - system - router
 *
 */
?>
<?php
/** | require **/


    require_once(__DIR__.'/../exception/e400.php');


/** require | **/
?>
<?php
class router {




    /** flag(s) **/
    private $flag_debug         = null;

    /** request **/
    private $request_code       = null;
    private $request_data       = null;
    private $request_method     = null;
    private $request_object     = null;

    /** route **/
    private $route_object       = null;

    /** response **/
    private $response_code      = null;
    private $response_data      = null;




    /** | magic **/

        public function __construct( $debug = false ){
            $this->flag_debug = $debug;
        }

    /** magic | **/


    /** | route **/

        public function route() {
            if( $this->route_init()              ){ } else { return false; }
            if( $this->route_set_request_data()  ){ } else { return false; }
            if( $this->route_exec()              ){ } else { return false; }
            if( $this->route_set_response_data() ){ } else { return false; }
                                                             return true;
        }

        private function route_init() {
            try {
                $object = "\miv\object\\{$this->request_object}";
                if( class_exists($object) ){
                    $this->route_object = new $object ();
                    return true;
                } else {
                    $this->set_response(501, array('error' => 'object not found'));
                    return false;
                }
            } catch( \exception $e ){
                $this->set_response(501, array('error' => $e->getMessage()));
                if ($this->flag_debug) { print_r($e); }
                return false;
            }
        }

        private function route_set_request_data() {
            try {
                $this->route_object->set_data($this->request_data);
                return true;
            } catch( \miv\exception\e400 $e ){
                $this->set_response(400, array('error' => $e->getMessage()));
                if ($this->flag_debug) { print_r($e); }
                return false;
            }
        }

        private function route_exec() {
            if( ! method_exists($this->route_object, $this->request_method) ){
                $this->set_response(501, array('error' => "method not found"));
                return false;
            }
            try {
                $method = $this->request_method;
                $this->route_data = $this->route_object->$method();
                return true;
            } catch( \exception $e ){
                $this->set_response(400, array('error' => $e->getMessage()));
                if ($this->flag_debug) { print_r($e); }
                return false;
            }
        }

        private function route_set_response_data() {
            try {
                $this->set_response_code(200);
                $this->set_response_data($this->route_data);
            } catch( \exception $e ){
                $this->set_response(500, array('error' => $e->getMessage()));
                if ($this->flag_debug) { print_r($e); }
                return false;
            }
        }

    /** route | **/


    /** | get **/

        /** | response **/

            public function get_response() {
                        $response           = array();
                        $response['code']   = $this->response_code;
                        $response['data']   = $this->response_data;
                return  $response;
            }

        /** response | **/

    /** get | **/


    /** | set **/

        /** | request **/

            public function set_request($code, $object = null, $method = null, $data = array()) {
                if( ! $this->set_request_code($code)     ){ return false; }
                if( ! $this->set_request_data($data)     ){ return false; }
                if( ! $this->set_request_method($method) ){ return false; }
                if( ! $this->set_request_object($object) ){ return false; }
                                                            return true;
            }

            public function set_request_code($request_code) {
                if( $this->valid_code($request_code) ){
                    $this->request_code = $request_code;
                } else {
                    return false;
                }
                return true;
            }

            public function set_request_data($request_data) {
                if( $this->valid_data($request_data) ){
                    $this->request_data = $request_data;
                } else {
                    return false;
                }
                return true;
            }

            public function set_request_method($request_method = null) {
                if( $request_method === null && isset($_SERVER['HTTP_MIV_METHOD']) ){
                    $request_method = $_SERVER['HTTP_MIV_METHOD'];
                }
                if( $this->valid_method($request_method) ){
                    $this->request_method = $request_method;
                } else {
                    return false;
                }
                return true;
            }

            public function set_request_object($request_object = null) {
                if( $request_object === null && isset($_SERVER['HTTP_MIV_OBJECT']) ){
                    $request_object = $_SERVER['HTTP_MIV_OBJECT'];
                }
                if( $this->valid_object($request_object) ){
                    $this->request_object = $request_object;
                } else {
                    return false;
                }
                return true;
            }

        /** request | **/

        /** | response **/

            private function set_response($code, $data = array()) {
                if( ! $this->set_response_code($code)     ){ throw new \exception('invalid code');   }
                if( ! $this->set_response_data($data)     ){ throw new \exception('invalid data');   }
                                                             return true;
            }

            private function set_response_code($response_code) {
                if( $this->valid_code($response_code) ){
                    $this->response_code = $response_code;
                } else {
                    return false;
                }
                return true;
            }

            private function set_response_data($response_data) {
                if( $this->valid_data($response_data) ){
                    $this->response_data = $response_data;
                } else {
                    $this->response_data = array();
                }
                return true;
            }

        /** response | **/

    /** set | **/


    /** | valid **/

        private function valid_data($data) {
            if( is_array($data) ){
                return true;
            }
            return false;
        }

        private function valid_code($code) {
            if( is_numeric($code) && strlen($code) == 3 ){
                return true;
            }
            return false;
        }

        private function valid_object($object) {
            if( preg_match("/^[a-zA-Z]+$/", $object) == 1 ){
                                $object_path = __DIR__."/../object/$object.php";
                if( file_exists($object_path) ){
                    require_once($object_path);
                    return true;
                }
            }
            return false;
        }

        private function valid_method($method) {
            if( preg_match("/^[a-zA-Z_]+$/", $method) == 1 ){
                return true;
            }
            return false;
        }

    /** valid | **/




}
/*
 *  php - system - router
 *
 */
?>
