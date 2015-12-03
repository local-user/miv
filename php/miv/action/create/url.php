<?php namespace miv\action\create; ?>
<?php




    // require - action - create
    require_once(__DIR__.'/../create.php');

    // require - miv - system - database
    require_once(__DIR__.'/../../system/database.php');




?>
<?php
/*
 *  php - action - create - url
 *
 */
class url extends create {




    // var - database
    private $database               = null;
    private $database_query_create  =               '
        INSERT INTO url ( url ) VALUES ( :url )
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

        public function database_create() {

                    // database - get - set - create
                    $this->database->set_query($this->database_query_create);
                    $this->database->set_query_data($data  = $this->get_data());
                    $this->database->prepare();
                    $this->database->query();
            return  $this->database->get_last_insert_id();

        }

    /** | database **/


    /** | get **/

        public function get_data() {

                    // data - get
                    $data           =   array();
                    $data['url']    =   $this->data_url;
            return  $data;

        }

    /** get | **/


    /** | set **/

        public function set_data_url($url) {

            // ? valid - url
            if ( filter_var($url, FILTER_VALIDATE_URL) === false ){
                throw new \miv\exception\invalid_argument();
            }

            // set
            $this->data_url = $url;

            // return
            return true;

        }

    /** set | **/




}
/*
 *  php - class - action - create - url
 *
 */
?>
