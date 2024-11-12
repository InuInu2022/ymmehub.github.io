function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
  $(window).on('load', function () {
        const file = '/json/' + getParam("file") + '.json';
        $.getJSON(file, (data) => {
            // JSONデータを受信した後に実行する処理
            document.title = "YMME Hub" + data.name;
            $("#title").text(data.name);
            $("#author").text(data.author);
            $("#description").html("<p>" + data.desc + "</p>");
            const download = "/file/ymme/" + data.file;
            $("#download").html('<a class="button is-success" href="' + "/file/ymme/" + data.file + '" download>ダウンロードする</a>');
            console.log(data.img);
            console.log(data.id);
            console.log(download);
            console.log(data.img);
            console.log('/file/img/' + data.id + '/1.png');
            switch (data.img) {
                case "0":
                    $("#img_item").html("<div></div>");
                    break;
                case "1":
                    $("#img1").attr('src', '/file/img/' + data.id +'/1.png');
                    for (let img = 2; img < 5; img++) {
                        $("#img" + img).remove();
                    }
                    break;
                case "2":
                    for (let img = 1; img < 3; img++) {
                        $("#img" + img).attr("src", "/file/img/" + data.id + "/" + img + ".png");
                    }
                    for (let img = 3; img < 5; img++) {
                        $("#img" + img).remove();
                    }
                    break;
                case "3":
                    for (let img = 1; img < 4; img++) {
                        $("#img" + img).attr("src", "/file/img/" + data.id + "/" + img + ".png");
                    }
                    for (let img = 4; img < 5; img++) {
                        $("#img" + img).remove();
                    }
                    break;
                case "4":
                    for (let img = 1; img < 5; img++) {
                        $("#img" + img).attr("src", "/file/img/" + data.id + "/" + img + ".png");
                    }
                    break;
                default:
                    break;
            }
        });
})