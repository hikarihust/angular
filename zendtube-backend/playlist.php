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
                            <input type="text" class="form-control" id="" name="playlist-id" placeholder="Video ID" value="">
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