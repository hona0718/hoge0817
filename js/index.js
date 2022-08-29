// ページトップボタン
$(function () {
  const pageTop = $("#page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
// フッター手前でストップ
$(document).ready(function () {
  $("#page-top").hide();
  $(window).on("scroll", function () {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    test = scrollHeight - scrollPosition;
    if (scrollHeight - scrollPosition <= footHeight) {
        console.log("フッターの高さ" + footHeight);
        console.log("読み込んだページの全高さ" + scrollHeight);
        console.log("ブラウザ中のスクロール部分の高さ+スクロール位置" + scrollPosition);
        console.log("比較値" + test);
      $("#page-top").css({
        // フッターまでスクロールした状態
        // 比較値がフッターより小さい場合
        position: "absolute",
        bottom: footHeight + -30,
      });
    } else {
        // 画面をスクロール中
      $("#page-top").css({
        position: "fixed",
        bottom: "30px",
      });
    }
  });
});