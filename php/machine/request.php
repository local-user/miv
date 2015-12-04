<?php namespace miv\request; ?>
<?php




    // require - machine
    require_once(__DIR__.'/../machine.php');




?>
<?php
/*
 *  php - request
 *
 */
class request extends \miv\machine {




    // var - data
    protected $request_data = null;
    protected $return_data  = null;




    /** | get **/

        public function get_return_data() {

            // ? null
            if( is_null( $this->return_data ) ){
                return array();
            }

            // return
            return $this->return_data;

        }

    /** get | **/


    /** | set  **/

        public function set_request_data( $data ){

            // set - request - data
            $this->request_data = $data;

            // return
            return true;

        }

        protected function set_return_data( $code, $type, $data) {

            // set - return - data
            $this->return_data = array( 'code' => $code, array( $type => $data ) );

            // return
            return true;

        }

    /** set | **/




}
/*
 *  php - request
 *
 */
?>
