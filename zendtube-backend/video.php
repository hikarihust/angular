<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Get Video Info</title>

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

        $videoInfo  = [];
        $videoID    = isset($_POST['video-id']) ? trim($_POST['video-id']) : '';
        $result     = '';

        $strURL = createURL([
            'part'  => 'snippet',
            'id'    => $videoID,
            'key'   => $API_KEY
        ]);

        $dataReturn   = json_decode(file_get_contents($API_URL . 'videos?' . $strURL), true);

        if($dataReturn['items']){
            $snippet = $dataReturn['items'][0]['snippet'];
            $videoInfo['id']            = $videoID;
            $videoInfo['publishedAt']   = $snippet['publishedAt'];
            $videoInfo['title']         = $snippet['title'];
            $videoInfo['slug']          = createSlug($snippet['title']);
            $videoInfo['description']   = $snippet['description'];
            $videoInfo['tags']          = $snippet['tags'];
            $videoInfo['thumbnails']    = $snippet['thumbnails']['standard']['url'];
        }

        if (isset($_POST["btnPreview"])){
            $result = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' . $videoInfo['id'] . '" frameborder="0" allow="accelerometer; 
                autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
       } else if (isset($_POST["btnSave"])){
       } else if (isset($_POST["btnClear"])){
           $result     = '';
           $videoInfo  = [];
           $videoID    = '';
       }
    ?>
    <div class="container-fluid">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h2>Youtube - Video</h2>
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title">Search Video</h3>
                </div>
                <div class="panel-body">
                    <form action="video.php" method="POST" class="form-inline" role="form">
                        <div class="form-group">
                            <label class="sr-only" for="">label</label>
                            <input type="text" class="form-control" id="" name="video-id" placeholder="Video ID" value="<?php echo $videoID; ?>">
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
                        if($result) {
                            echo "<pre>";
                            print_r(json_encode($videoInfo));
                            echo "</pre>";
                            echo $result;
                        }
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