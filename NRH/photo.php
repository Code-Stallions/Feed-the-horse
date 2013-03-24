<?php include 'Head.php'; 
					
	
	
?>
	
<div class="row">
    <div class="span16">
       <div class="offset1"> 
        <ul class="thumbnails" id="images">
        </ul>
    </div>
    </div>
</div>
<script>
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: "horse",
    tagmode: "any",
    format: "json"
  },
  function (data) {
   $.each(data.items, function (i, item) {
 
  // build some elements and then append them accordingly
    var li = $("<li>").attr("class", "span2");
    var a = $("<a>").attr("href", item.link).attr("class", "thumbnail").attr("title", item.title);
  // we want the larger square (150px) thumbnail instead of the smaller one (75px)
  var img = $("<img/>").attr("src", item.media.m.replace("_m.jpg", "_q.jpg"));
                img.appendTo(a);
                a.appendTo(li);
                $("#images").append(li);
 
                // stop at 18 photos (i is 0 based)
                if (i == 21) return false;
            });
      });
  
  
  </script>    	
 
 
  
 
 
 
 
 
 
 
    
 
<?php include'footer.php'; ?>

