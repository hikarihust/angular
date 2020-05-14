<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Get Playlist Info</title>

    <!-- Bootstrap -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<?php
        require_once('libs/define.php'); 
        require_once('libs/my-func.php');
        
        $playlistInfo  = [];
        $playlistID    = isset($_POST['playlist-id']) ? trim($_POST['playlist-id']) : '';
        $result     = '';
        $msg        = '';

        // Step 01 - Get Playlist Info
        $strInfoURL = createURL([
            'part'  => 'snippet',
            'id'    => $playlistID,
            'key'   => $API_KEY
        ]);

        $dataInfoReturn   = json_decode(file_get_contents($API_URL . 'playlists?' . $strInfoURL), true);

        if($dataInfoReturn['items']){
            $snippet = $dataInfoReturn['items'][0]['snippet'];
            $playlistInfo['id']            = $playlistInfo;
            $playlistInfo['publishedAt']   = $snippet['publishedAt'];
            $playlistInfo['title']         = $snippet['title'];
            $playlistInfo['slug']          = createSlug($snippet['title']);
            $playlistInfo['description']   = $snippet['description'];
            $playlistInfo['thumbnails']    = $snippet['thumbnails']['standard']['url'];
        }

        echo "<pre>";
        print_r($playlistInfo);
        echo "</pre>";

        if (isset($_POST["btnPreview"])){
            // $result = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' . $videoInfo['id'] . '" frameborder="0" allow="accelerometer; 
            //     autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (isset($_POST["btnSave"])){
            // $videoIDs = file_get_contents($FILE_VIDEO_TXT);

            // if (strpos($videoIDs,  "##" . $videoID . "##") === false){ 
            //     // Step 1: Lưu $videoID vào file videos.txt
            //     file_put_contents($FILE_VIDEO_TXT, $videoIDs . "##" . $videoID . "##");   

            //     // Step 2: Lưu thông tin video $videoInfo của $videoID vào file videos.json    
            //     $json   = json_decode(file_get_contents($FILE_VIDEO_JSON), true);
            //     $json[] = $videoInfo;

            //     file_put_contents($FILE_VIDEO_JSON, json_encode($json));

            //     $msg   = 'Video đã được lưu thành công';
            // }else {
            //     // Xuất thông báo video này đã lưu rồi
            //     $msg   = 'Video này đã được lưu rồi';
            // }
        } else if (isset($_POST["btnClear"])){
            $result     = '';
            $playlistInfo  = [];
            $playlistID    = '';
        }
    ?>

    <div class="container-fluid">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h2>Youtube - Playlist</h2>
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title">Search Playlist</h3>
                </div>
                <div class="panel-body">
                    <form action="playlist.php" method="POST" class="form-inline" role="form">
                        <div class="form-group">
                            <label class="sr-only" for="">label</label>
                            <input type="text" class="form-control" id="" name="playlist-id" placeholder="Video ID" value="<?php echo $playlistID; ?>">
                        </div>
                        <button type="submit" name="btnPreview" class="btn btn-primary">Preview Video</button>
                        <button type="submit" name="btnSave" class="btn btn-success">Save To File</button>
                        <button type="submit" name="btnClear" class="btn btn-danger">Clear</button>
                        
                    </form>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <h3 class="panel-title">Result</h3>
                </div>
                <div class="panel-body">
                    <?php 
                        if($msg) echo $msg ;
                    ?>
                </div>
                <div class="panel-footer">
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="assets/js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="assets/js/bootstrap.min.js"></script>
</body>
</html>