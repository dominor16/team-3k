// 匿名関数内で実行
(function (){

	// 各エレメントを取得
	var element = document.getElementById("element_04");
	var element_result = document.getElementById("edit_04_result");
  var prevX,
      prevY,
      nextX,
      nextY,
			total = 0,
			h = 500;

	// ------------------------------------------------------------
	// マウスオーバー時に実行される関数
	// ------------------------------------------------------------
	function MouseOverFunc(e){
    prevX = e.clientX;
    prevY = e.clientY;
		element.style.backgroundColor = "#f66";
		element_result.value = "マウスオーバー (type:\"" + e.type + "\" X座標:" + prevX + " Y座標:" + prevY + ")\n" + element_result.value;
  }

	// ------------------------------------------------------------
	// マウスカーソルが移動するたびに実行される関数
	// ------------------------------------------------------------
	function MouseMoveFunc(e){
		slide();
    nextX = e.clientX;
    nextY = e.clientY;
		element_result.value = "マウスカーソルが移動した (type:\"" + e.type + "\" X座標:" + e.clientX + " Y座標:" + e.clientY + "　" + getDistanceFromTwoPoint()　+ " , " + totalDistance() + " )\n" + element_result.value;
    prevX = e.clientX;
    prevY = e.clientY;
	}

  // ------------------------------------------------------------
  // マウスカーソルが移動するたびに距離を計算して実行される関数
  // ------------------------------------------------------------
  function getDistanceFromTwoPoint() {
      return Math.sqrt(Math.pow(prevX - nextX, 2) + Math.pow(prevY - nextY, 2));
  };

	// ------------------------------------------------------------
  // マウスカーソルの移動距離の合計を計算して実行される関数
  // ------------------------------------------------------------
  function totalDistance() {
     total += getDistanceFromTwoPoint()/10;
		 return total;
	}
	// ------------------------------------------------------------
	// マウスアウト時に実行される関数
	// ------------------------------------------------------------
	function MouseOutFunc(e){
		element.style.backgroundColor = "#f44";
		element_result.value = "マウスアウト (type:\"" + e.type + "\" clientX:" + e.clientX + " clientY:" + e.clientY + ")\n" + element_result.value;
	}

	function slide(){
	  var bar = document.getElementById("bar");

		bar.y.baseVal.value = h - total;
	  bar.height.baseVal.value =  total;
		console.log(bar.height.baseVal.value);
	}

	// ------------------------------------------------------------
	// マウスが動いていないとき一定時間ごとにbar.height.baseVal.valueの値を減少させる
	// ------------------------------------------------------------
	// hoge = bar.height.baseVal.value - 10;


  //関数decrease()を1000ミリ秒間隔で呼び出す
  setInterval( function() {
		total = bar.y.baseVal.value += 5;
		total = bar.height.baseVal.value -= 5;
		console.log(bar.height.baseVal.value);
	},300);



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
