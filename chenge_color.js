<!--

function colorGen(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
// 匿名関数内で実行
(function (){

	// 各エレメントを取得
	var element = document.getElementById("element_04");
	var element_result = document.getElementById("edit_04_result");
  var prevX,
      prevY,
      nextX,
      nextY;
	// ------------------------------------------------------------
	// マウスオーバー時に実行される関数
	// ------------------------------------------------------------
	function MouseOverFunc(e){
    prevX = e.clientX;
    prevY = e.clientY;
		element.style.backgroundColor = colorGen();
		element_result.value = "マウスオーバー (type:\"" + e.type + "\" X座標:" + prevX + " Y座標:" + prevY + ")\n" + element_result.value;
  }

	// ------------------------------------------------------------
	// マウスカーソルが移動するたびに実行される関数
	// ------------------------------------------------------------
	function MouseMoveFunc(e){
    nextX = e.clientX;
    nextY = e.clientY;
		element.style.backgroundColor = colorGen();
		element_result.value = "マウスカーソルが移動した (type:\"" + e.type + "\" X座標:" + e.clientX + " Y座標:" + e.clientY + "　" + getDistanceFromTwoPoint()　+ " )\n" + element_result.value;
    prevX = e.clientX;
    prevY = e.clientY;
	}

  // ------------------------------------------------------------
  // マウスカーソルが移動するたびに距離を計算して実行される関数
  // ------------------------------------------------------------
  var getDistanceFromTwoPoint = function() {
      return Math.sqrt(Math.pow(prevX - nextX, 2) + Math.pow(prevY - nextY, 2));
  };

	// ------------------------------------------------------------
	// マウスアウト時に実行される関数
	// ------------------------------------------------------------
	function MouseOutFunc(e){
		element_result.value = "マウスアウト (type:\"" + e.type + "\" clientX:" + e.clientX + " clientY:" + e.clientY + ")\n" + element_result.value;
	}

	// ------------------------------------------------------------
	// イベントのリッスンを開始する
	// ------------------------------------------------------------
	// イベントリスナーに対応している
	if(element.addEventListener){

		// マウスオーバー時に実行されるイベント
		element.addEventListener("mouseover" , MouseOverFunc);
		// マウスカーソルが移動するたびに実行されるイベント
		element.addEventListener("mousemove" , MouseMoveFunc);
		// マウスアウト時に実行されるイベント
		element.addEventListener("mouseout" , MouseOutFunc);

	// アタッチイベントに対応している
	}else if(element.attachEvent){

		// マウスオーバー時に実行されるイベント
		element.attachEvent("onmouseover" , MouseOverFunc);
		// マウスカーソルが移動するたびに実行されるイベント
		element.attachEvent("onmousemove" , MouseMoveFunc);
		// マウスアウト時に実行されるイベント
		element.attachEvent("onmouseout" , MouseOutFunc);

	}

})();
//-->
