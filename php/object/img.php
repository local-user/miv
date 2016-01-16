<?php namespace miv\object; ?>
<?php
/*
 *  php - object - img
 *
 */
?>
<?php
/** | require **/


    require_once(__DIR__.'/../exception/e400.php');
    require_once(__DIR__.'/../system/database.php');


/** require | **/
?>
<?php
class img {




    // var -- db
    private $db = null;

    // var - paths
    private $dir_img_upload = 'webroot/img/upload';

    // var - valid
    private $valid_file_size_max    = 1048576; // 1MB
    private $valid_file_types       = array (
                                                'image/jpeg',
                                                'image/png'
                                            );




    /** | main **/


        /** | create **/

            public function upload() {

                // check - _files
                $this->check_files();

                // | system - store - img

                    $path = tempnam($this->get_path_img_upload(), "IMG-");
                    move_uploaded_file($_FILES['file']['tmp_name'], $path);

                // system - store - img |

                // | db - create - img

                            $query = "
                                INSERT INTO img (  path,  mime,  size )
                                VALUES          ( :path, :mime, :size )
                            ";

                            $data = array(
                                'path'      =>      $path,
                                'mime'      =>      $_FILES['file']['type'],
                                'size'      =>      $_FILES['file']['size']
                            );

                            $this->db->set_query($query);
                            $this->db->set_query_data($data);
                            $this->db->prepare();
                            $this->db->query();
                    $id  =  $this->db->get_last_insert_id();

                // db - create - img |

                // return - [ img -> id -> { . } ]
                return array( "img" => array( "id" => $id ) );

            }

        /** create | **/


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

            private function get_path_img_upload() {
                return __DIR__.'/../../'.$this->dir_img_upload;
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
 *  php - object - img
 *
 */
?>
