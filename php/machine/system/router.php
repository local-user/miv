<?php namespace miv\system; ?>
<?php




    // require - miv - system
    require_once(__DIR__.'/../system.php');




?>
<?php
/*
 *  php - miv - system - router
 *
 */
class router extends system {




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

        private function display_json( $data ){

            // http - code - override
            if(isset($data['code'])) {
                http_response_code($data['code']);
                unset($data['code']);
            }

            // display - json
            header('Content-Type: application/json');
            echo json_encode($data);

            // return
            return true;

        }

        private function display_json_error( $code, $message ){

            // return - display - json
            return $this->display_json( array(
                'code'  => $code,
                'error' => $message
            ));

        }

        private function display_json_static( $code, $filename ){

            // display - json
            http_response_code($code);
            header('Content-Type: application/json');
            readfile(__DIR__.'/../json/'.$filename);

            // return
            return true;

        }

    /** display | **/


    /** | route **/

        public function route() {

                // request - method
                $request_method = $this->get_request_method();
            if( $request_method === false ){    return false;   }

            // request - method - load
            require_once(__DIR__."/../request/$request_method.php");

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

            // route - request - load
            try     { $request = new \miv\request\request_ext($this->flag_debug);   }
            catch   ( Exception $e                                                  ){
                return $this->route_error(500, $e);
            }

            // route - request - set - request - data
            try     { $request->set_request_data($this->get_request_data());    }
            catch   ( \miv\exception\invalid_argument $e                        ){
                return $this->route_error(400, $e);
            }

            // route - request - process
            try     { $request->process();                      }
            catch   ( Exception $e                              ){
                return $this->route_error(400, $e);
            }

            // route - request - get - return - data
            try     { $data = $request->get_return_data();      }
            catch   ( Exception $e                              ){
                return $this->route_error(400, $e);
            }

            // route - request - display - json
            try     { $this->display_json($data);               }
            catch   ( Exception $e                              ){
                return $this->route_error(500, $e);
            }

            // return
            return true;

        }

        private function route_error($code = 500, $e = null, $message = null) {

            // ? message
            if( ! $message ){

                // get - message - from - code
                if( $e ){
                    $message = $e->getMessage();
                } else {
                    $message = 'internal route error';
                }

            }

            // display - static - json
            $this->display_json_error($code, $message);

            // debug - dump - exception
            if( $e && $this->flag_debug ){ print_r($e); }

            // return
            return true;

        }

    /** route | **/


    /** | get **/

        private function get_request_method() {
            if( is_null($this->request_method) ){
                $this->route_error(404, null, 'request method not found');
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
            if(preg_match("/^[a-zA-Z_-]+$/", $request_method) == 1) {
                                $class_method_path = __DIR__."/../request/$request_method.php";
                if( file_exists($class_method_path) ){
                    return true;
                }
            }
            return false;
        }

    /** valid | **/




}
/*
 *  php - miv - system - router
 *
 */
?>
