$(function () {
  // モーダル動画再生
  if ($(".js-modal-video").length) {
    //クラス名js-modal-videoがあれば以下を実行
    $(".js-modal-video").modalVideo({
      channel: "youtube",
      youtube: {
        rel: 0, //関連動画の指定
        autoplay: 1, //自動再生の指定
      },
    });
  }

  // ニュースタブ切り替え
  $(".ntab-list a").click(function () {
    $(this)
      .parent()
      .addClass("active")
      .siblings(".active")
      .removeClass("active");
    var tabContents = $(this).attr("href");
    $(tabContents).addClass("active").siblings(".active").removeClass("active");
    return false;
  });

  // ハンバーガーメニュー
  $(".open-btn").click(function () {
    $(this).toggleClass("active");
    $(".gnav").toggleClass("panelactive");
  });

  $(".gnav a").click(function () {
    $(".open-btn").removeClass("active");
    $(".gnav").removeClass("panelactive");
  });

  // ページ内リンク
  $('.fv-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr("href"); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top; //idの上部の距離を取得
    $("body,html").animate({ scrollTop: pos }, 500); //取得した位置にスクロール。数値が大きくなるほどゆっくりスクロール
    return false;
  });
});
