<?php
	function createURL($arrURL){
		$strURL = '';
		foreach ($arrURL as $key => $value) {
        	$strURL .= '&' . $key . '=' . $value;
    	}
    	return ltrim($strURL, '&');
	}

	function createSlug($value){
		/*a à ả ã á ạ ă ằ ẳ ẵ ắ ặ â ầ ẩ ẫ ấ ậ b c d đ e è ẻ ẽ é ẹ ê ề ể ễ ế ệ
		 f g h i ì ỉ ĩ í ị j k l m n o ò ỏ õ ó ọ ô ồ ổ ỗ ố ộ ơ ờ ở ỡ ớ ợ
		p q r s t u ù ủ ũ ú ụ ư ừ ử ữ ứ ự v w x y ỳ ỷ ỹ ý ỵ z*/
		$value = trim($value);
		$value = str_replace(' ', '-', $value);
		$value = preg_replace('#(-)+#', '-', $value);

		$value		= mb_strtolower($value, 'UTF-8');
		
		$characterA	= '#(a|à|ả|ã|á|ạ|ă|ằ|ẳ|ẵ|ắ|ặ|â|ầ|ẩ|ẫ|ấ|ậ)#imsU';
		$replaceA	= 'a';
		$value = preg_replace($characterA, $replaceA, $value);
		
		$characterD	= '#(đ|Đ)#imsU';
		$replaceD	= 'd';
		$value = preg_replace($characterD, $replaceD, $value);
		
		$characterE	= '#(è|ẻ|ẽ|é|ẹ|ê|ề|ể|ễ|ế|ệ)#imsU';
		$replaceE	= 'e';
		$value = preg_replace($characterE, $replaceE, $value);
		
		$characterI	= '#(ì|ỉ|ĩ|í|ị)#imsU';
		$replaceI	= 'i';
		$value = preg_replace($characterI, $replaceI, $value);
		
		$charaterO = '#(ò|ỏ|õ|ó|ọ|ô|ồ|ổ|ỗ|ố|ộ|ơ|ờ|ở|ỡ|ớ|ợ)#imsU';
		$replaceCharaterO = 'o';
		$value = preg_replace($charaterO,$replaceCharaterO,$value);
		
		$charaterU = '#(ù|ủ|ũ|ú|ụ|ư|ừ|ử|ữ|ứ|ự)#imsU';
		$replaceCharaterU = 'u';
		$value = preg_replace($charaterU,$replaceCharaterU,$value);
		
		$charaterY = '#(ỳ|ỷ|ỹ|ý)#imsU';
		$replaceCharaterY = 'y';
		$value = preg_replace($charaterY,$replaceCharaterY,$value);
		
		$charaterSpecial = '#(,|$)#imsU';
		$replaceSpecial = '';
		$value = preg_replace($charaterSpecial,$replaceSpecial,$value);
		
		
		return $value;
	}