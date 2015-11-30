<?php namespace miv; ?>
<?php


    // require - action
    require_once(__DIR__.'/action.php');


?>
<?php
/*
 *  php - action - create - url
 *
 */
class action_create_url extends action {




    // var - database
    private $database_query_create  = '
        INSERT INTO url (url)
                                      ';

    // var - data
    private $data_url   =   null;




    /** | magic **/
    /** magic | **/


    /** database | **/

        public function database_create() {

            // prepare - data
            $data  = $this->get_data();

            // database - create
            //$this->database->create($this->database_query_create, $data);

            // DEBUG
            print_r($data);
            echo ' -- END - DEBUG -- ';

            // return
            return true;

        }

    /** | database **/


    /** | get **/

        public function get_data() {
                    $data           =   array();
                    $data['url']    =   $this->data_url;
            return  $data;
        }

    /** get | **/


    /** | set **/

        public function set_data_url($url) {
            if ( ! filter_var($url, FILTER_VALIDATE_URL) === false ){
                $this->data_url = $url;
            } else {
                throw new InvalidArgumentException();
            }
            return true;
        }

    /** set | **/




}
/*
 *  php - class - action - create - url
 *
 */
?>
