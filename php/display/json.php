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

            // display - header
            header('Content-Type: application/json');

            // display - json
            echo json_encode($this->response);

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
