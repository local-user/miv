<?php namespace miv\display; ?>
<?php
/*
 *  php - display - json
 *
 */
class json {




    // var
    private $response = null;




    /** | display **/

        public function display() {

            // display - resposne - code
            if( isset($this->response['code']) ){
                http_response_code($this->response['code']);
            }

            // display - header
            header('Content-Type: application/json');

            // display - json
            echo json_encode($this->response['data']);

            // return
            return true;

        }

    /** display | **/


    /** | set **/

        public function set_response($data) {
            $this->response = $data;
        }

    /** set | **/




}
/*
 *  php - display - json
 *
 */
?>
