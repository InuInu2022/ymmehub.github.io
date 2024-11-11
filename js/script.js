function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
$(function () {
        const file = '/json/' + getParam("file") + '.json';
        $.getJSON(file, (data) => {
            // JSONデータを受信した後に実行する処理
            $("#title").text(data.name);
            $("#author").text(data.author);
            $("#description").html("<p>" + data.desc + "</p>");
            const download = "/file/ymme/" + data.file;
            $("#download").html('<a class="button is-success" href="' + "/file/ymme/" + data.file + '" download>ダウンロードする</a>');
            console.log(data.img);
            console.log(data.id);
            console.log(download);
            console.log('/file/img/' + data.id + '/1.png');
            switch (data.img) {
                case "0":
                    $("#img_item").html("<div></div>");
                    break;
                case "1":
                    $(".img1").html('<img src="' + '/file/img/' + data.id + '/1.png' + '" id="img1" alt="画像" class="cell" width="480" height="270">');
                    break;
                case "2":
                    $(".img1").html('<img src="' + '/file/img/' + data.id + '/1.png' + '" id="img1" alt="画像" class="cell"> width="480" height="270"');
                    $(".img2").html('<img src="' + '/file/img/' + data.id + '/2.png' + '" id="img2" alt="画像" class="cell"> width="480" height="270"');
                    break;
                case "3":
                    $(".img1").html('<img src="' + '/file/img/' + data.id + '/1.png' + '" id="img1" alt="画像" class="cell"> width="480" height="270"');
                    $(".img2").html('<img src="' + '/file/img/' + data.id + '/2.png' + '" id="img2" alt="画像" class="cell"> width="480" height="270"');
                    $(".img3").html('<img src="' + '/file/img/' + data.id + '/3.png' + '" id="img3" alt="画像" class="cell"> width="480" height="270"');
                    break;
                case "4":
                    $(".img1").html('<img src="' + '/file/img/' + data.id + '/1.png' + '" id="img1" alt="画像" class="cell"> width="480" height="270"');
                    $(".img2").html('<img src="' + '/file/img/' + data.id + '/2.png' + '" id="img2" alt="画像" class="cell"> width="480" height="270"');
                    $(".img3").html('<img src="' + '/file/img/' + data.id + '/3.png' + '" id="img3" alt="画像" class="cell"> width="480" height="270"');
                    $(".img4").html('<img src="' + '/file/img/' + data.id + '/4.png' + '" id="img4" alt="画像" class="cell"> width="480" height="270"');
                    break;
                default:
                    break;
            }
        });
})