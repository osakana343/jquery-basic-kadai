$(function () {

  // 文字色を変更
  $('#change-color').on('click', function () {
    $('#target').css('color', 'red');
  });

  // 文字内容を変更
  $('#change-text').on('click', function () {
    $('#target').text('Hello!');
  });

  // フェードアウト
  $('#fade-out').on('click', function () {
    $('#target').fadeOut();
  });

  // フェードイン
  $('#fade-in').on('click', function () {
    $('#target').fadeIn();
  });

});