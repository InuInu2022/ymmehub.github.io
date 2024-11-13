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
    const prm = getParam("file");
        $.getJSON(`/json/${prm}.json`, (data) => {
            // JSONデータを受信した後に実行する処理
            document.title = "YMME Hub" + data.name;
            $("#title").text(data.name);
            $("#author").text(data.name);
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
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
})