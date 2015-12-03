<?php namespace miv\action\read; ?>
<?php




    // require - action - read
    require_once(__DIR__.'/../read.php');

    // require - miv - system - database
    require_once(__DIR__.'/../../system/database.php');




?>
<?php
/*
 *  php - action - read - url
 *
 */
class url extends read {




    // var - database
    private $database               = null;
    private $database_query_read    =               '
        SELECT id FROM url
                                                    ';

    // var - data
    private $data_url   =   null;




    /** | magic **/

        public function __construct() {

            // db - init
            $this->database = new \miv\system\database();

            // return
            return true;

        }

    /** magic | **/


    /** database | **/

        public function database_read_all() {

                    // database - get - set - read(s)
                    $this->database->set_query($this->database_query_read);
                    $this->database->set_query_data($data  = $this->get_data());
                    $this->database->prepare();
                    $this->database->query();
            return  $this->database->read_list();

        }

    /** | database **/


    /** | get **/

        private function get_data() {
            return array();
        }

        private function get_query_data() {
            return array();
        }

    /** get | **/


    /** | set **/
    /** set | **/




}
/*
 *  php - class - action - read - url
 *
 */
?>
