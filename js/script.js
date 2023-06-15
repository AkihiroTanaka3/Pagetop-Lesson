$(function() {
    $('#back a').on('click',function(event){ // #back内のaタグをクリックしたときの処理
        $('body,html').animate({
            scrollTop:0 //scrollTop は、スクロール位置を取得できるメソッド。今回は「scrollTop:0」を指定しているので、「最上部に移動する」の意味
        }, 800); //アニメーションの動作時間を「800」で指定しているので、「800ミリ秒間（0.8秒間）かけてページの最上部まで移動する」の意味になります。
               //アニメーションの動作時間は、ミリ秒で指定する以外にも、「slow」、「normal」、「fast」で指定することも可能
        event.preventDefault(); //aタグの機能を無効にするメソッド
    });
});