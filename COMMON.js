document.addEventListener("DOMContentLoaded", function () {

    const coverArea = document.getElementById("coverArea");
    const fileInput = document.getElementById("fileInput");

    // 再生用Audioオブジェクト
    const audio = new Audio();

    // カバーをタップしたらファイル選択を開く
    coverArea.addEventListener("click", function () {
        fileInput.click();
    });

    // ファイルが選択されたとき
    fileInput.addEventListener("change", function (event) {

        const file = event.target.files[0];
        if (!file) return;

        // OGG以外を弾く（念のため）
        if (!file.type.includes("ogg")) {
            alert("OGGファイルを選択してください");
            return;
        }

        // ローカルURL生成
        const fileURL = URL.createObjectURL(file);

        audio.src = fileURL;
        audio.load();
        audio.play();

        console.log("再生開始:", file.name);
    });

});
