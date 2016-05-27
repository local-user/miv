<?php namespace miv\object; ?>
<?php
/*
 *  php - object - setting
 *
 */
?>
<?php
/** | require **/


    require_once(__DIR__.'/../exception/e400.php');
    require_once(__DIR__.'/../exception/e404.php');
    require_once(__DIR__.'/../system/database.php');


/** require | **/
?>
<?php
class setting {




    // var - db
    private $db                     = null;

    // var - path
    private $path_favicon           = 'webroot/img/favicon.ico';
    private $path_welcome           = 'webroot/img/welcome.img';

    // var - valid
    private $valid_file_size_max    = 2048000;
    private $valid_file_types       = array (
                                                'image/jpeg',
                                                'image/jpg',
                                                'image/png'
                                            );




    /** | main **/


        /** | delete **/

            public function delete() {

                    // fs - delete - image
                    unlink($data['setting']['path']);

            }

            private function delete_favicon() {

                // get - path - favicon
                $favicon = $this->get_path_favicon();

                // fs - unlink - favicon
                unlink($favicon);

                // return
                return true;

            }

            private function delete_welcome() {

                // get - path - welcome
                $welcome = $this->get_path_welcome();

                // fs - unlink - welcome
                unlink($welcome);

                // return
                return true;

            }

        /** delete | **/


        /** | upload **/

            public function upload_favicon() {

                // check - _files
                $this->check_files();

                // delete - existing
                $this->delete_favicon();

                // get - path - favicon
                $favicon = $this->get_path_favicon();

                // move - upload - file
                move_uploaded_file($_FILES['file']['tmp_name'], $favicon);

                // return - [ setting -> upload_favicon -> { true|false } ]
                return array( "setting" => array( "upload_favicon" => true ) );

            }

            public function upload_welcome() {

                // check - _files
                $this->check_files();

                // delete - existing
                $this->delete_welcome();

                // get - path - welcome
                $welcome = $this->get_path_welcome();

                // move - upload - file
                move_uploaded_file($_FILES['file']['tmp_name'], $welcome);

                // return - [ setting -> upload_welcome -> { true|false } ]
                return array( "setting" => array( "upload_welcome" => true ) );

            }

        /** upload | **/


    /** main | **/




    /** | util **/


        /** | magic **/

            public function __construct() {
                $this->db = new \miv\system\database();
                return true;
            }

        /** magic | **/


        /** | check **/

            private function check_files() {

                // files - valid - index
                if( ! isset($_FILES['file'])) {
                    throw new \miv\exception\e400();
                }

                // files - valid - file - size
                if( ! $this->valid_file_size($_FILES['file']['size']) ){
                    throw new \miv\exception\e400();
                }

                // files - valid - file - type
                if( ! $this->valid_file_type($_FILES['file']['tmp_name']) ){
                    throw new \miv\exception\e400();
                }

                // return
                return true;

            }

        /** check | **/


        /** | get **/

            private function get_path_favicon() {
                return __DIR__.'/../../'.$this->path_favicon;
            }

            private function get_path_welcome() {
                return __DIR__.'/../../'.$this->path_welcome;
            }

        /** get | **/


        /** | set **/

            public function set_data($data = array()) {
                foreach( $data as $key => $value ){
                                             $method = "set_data_$key";
                    if( method_exists($this, $method) ){
                        $this->$method($value);
                    } else {
                        return false;
                    }
                }
            }

        /** set | **/


        /** | valid **/

            private function valid_file_size($size) {
                if( $size <= $this->valid_file_size_max ){
                    return true;
                } else {
                    return false;
                }
            }

            private function valid_file_type($path) {

                                   // get - file - mime
                                   $fp = finfo_open(FILEINFO_MIME_TYPE);
                $mime = finfo_file($fp, $path);
                       finfo_close($fp);

                // valid - mime
                if( in_array($mime, $this->valid_file_types) ){
                    return true;
                } else {
                    return false;
                }

            }

        /** valid | **/


    /** | util **/




}
/*
 *  php - object - setting
 *
 */
?>
