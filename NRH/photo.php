<?php include 'Head.php'; ?>
test
 <?php
 
 	require_once('flicker.php'); 
            $Flickr = new Flickr; 
            $data = $Flickr->search('Horse'); 
            foreach($data['photos']['photo'] as $photo) { 
		// the image URL becomes somthing like 
		// http://farm{farm-id}.static.flickr.com/{server-id}/{id}_{secret}.jpg  
		echo '<img src="' . 'http://farm' . $photo["farm"] . '.static.flickr.com/' . $photo["server"] . '/' . $photo["id"] . '_' .$photo["secret"] . '.jpg">';
          ?>    
    	
    
 
<?php include'footer.php'; ?>

