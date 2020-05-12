// The client ID is obtained from the {{ Google Cloud Console }}
// at {{ https://cloud.google.com/console }}.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.

let API_KEY = 'AIzaSyDQFQIkqeOJhVxrieG1Xaj3P_Q_5OUkbRg';
let API_URL = 'https://www.googleapis.com/youtube/v3/';
let videoId = 'vo1XjuLVaZo';

$.ajax({
    url: API_URL + "videos?id=" + videoId + "&key="+ API_KEY + "&fields=items(snippet)&part=snippet", 
    dataType: "jsonp",
    success: function(data){
        console.log(data.items[0].snippet);           
    },
    error: function(jqXHR, textStatus, errorThrown) {
        alert (textStatus, + ' | ' + errorThrown);
    }
});