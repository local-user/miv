<?php namespace miv; ?>
<?php
/*
 *  php - class - router
 *
 */
class router {




    /** flag(s) **/
    private $flag_debug     = false;

    /** global **/
    private $request_data   = null;
    private $request_method = null;




    /** | magic **/

        public function __construct( $debug = false ){
            $this->flag_debug = $debug;
        }

    /** magic | **/


    /** | display **/

        private function display_static_json( $filename ){
            header('Content-Type: application/json');
            readfile(__DIR__.'/../json/'.$filename);
            return true;
        }

    /** display | **/


    /** | route **/

        public function route() {

                // request - method
                $request_method = $this->get_request_method();
            if( $request_method === false ){    return false;   }

            // request - method - load
            require_once(__DIR__."/class-exception-invalid-argument.php");
            require_once(__DIR__."/class-request-$request_method.php");

            // route - request
            try {
                return $this->route_request();

            // route - unrecognized - error
            } catch( Exception $e ){
                return $this->route_error(500, $e);

            }

            // return
            return true;

        }

        private function route_request() {

            // route - request - init
            try     { $request = new request($this->flag_debug);            }
            catch   ( Exception $e                                         ){
                return $this->route_error(500, $e);
            }

            // route - request - set - request - data
            try     { $request->set_request_data($this->get_request_data()); }
            catch   ( InvalidArgumentException $e                           ){
                return $this->route_error(400, $e);
            }

            // return
            return true;

        }

        private function route_error($code = 500, $e) {

            // code -> file
            switch($code) {
                case 200:   $static_json_error = 'static-error-200.json';   break;
                case 400:   $static_json_error = 'static-error-400.json';   break;
                case 404:   $static_json_error = 'static-error-404.json';   break;
                default:    $static_json_error = 'static-error-500.json';   break;
            }

            // debug
            if( $this->flag_debug ){ print_r($e); }

            // display - static - json
            $this->display_static_json($static_json_error);

            // return
            return true;

        }

    /** route | **/


    /** | get **/

        private function get_request_method() {
            if( is_null($this->request_method) ){
                $this->route_error(400);
                return false;
            }
            return $this->request_method;
        }

        private function get_request_data() {
            if( is_null($this->request_data) ){
                $this->route_error(400);
                return false;
            }
            return $this->request_data;
        }

    /** get | **/


    /** | set **/

        public function set_request_data($get, $post) {
                                          $request_data = array_merge($get, $post);
            if( $this->valid_request_data($request_data) ){
                      $this->request_data=$request_data;
            }
            return true;
        }

        public function set_request_method( $request_method) {
            if( $this->valid_request_method($request_method) ){
                      $this->request_method=$request_method;
            }
            return true;
        }

        public function set_request_method_from_request_data() {
            if( isset($this->request_data['request_method']) ){
                $this->set_request_method($this->request_data['request_method']);
                                    unset($this->request_data['request_method']);
            }
            return true;
        }

    /** set | **/


    /** | valid **/

        private function valid_request_data($request_data) {
            if( is_array($request_data) ){
                return true;
            }
            return false;
        }

        private function valid_request_method($request_method) {
            if(preg_match("/^[a-zA-Z]+$/", $request_method) == 1) {
                                $class_method_path = __DIR__."/class-request-$request_method.php";
                if( file_exists($class_method_path) ){
                    return true;
                }
            }
            return false;
        }

    /** valid | **/




}
/*
 *  php - class - router
 *
 */
?>
