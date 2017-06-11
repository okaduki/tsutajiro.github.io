$(window).on("load", function () {
    var PointArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
        1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000,
        2100, 2200, 2300, 2400, 2500];

    $("#mainconttable").tablesorter();

    $("#difficulty_submit").click(function () {
        var lb = parseInt($("#difficulty_min").val());
        var ub = parseInt($("#difficulty_max").val());

        // 逆でも対応する優しい世界
        if (lb > ub) {
            var temp = lb;
            lb = ub; ub = temp;
        }

        for (var i = 0; i < PointArray.length; i++) {
            // lb 以上 ub 以下の要素に関しては表示し、そうでなければ表示しない
            if (lb <= PointArray[i] && PointArray[i] <= ub) {
                $(".dif_" + PointArray[i]).css('display', 'table-row');
            }
            else {
                $(".dif_" + PointArray[i]).css('display', 'none');
            }
        }
    });

    $('#atcoder_id_submit').click(function () {
        var user_id = $('#atcoder_id').val();
        var url = 'https://query.yahooapis.com/v1/public/yql?callback=?';
        var query = 'select * from json where url="http://kenkoooo.com/atcoder-api/problems?user=' + user_id + '"';
        $.getJSON(url,
            { q: query, format: 'json' },
            function (json) {
                // 色のリセット
                $('#mainconttable tr').each(function (index, elm) {
                    $(elm).css({ backgroundColor: '' });
                });

                if (json.query.results === null) return;

                var id_list = {};
                var get_id = /^.*\/(.*)$/;
                // テーブルから問題idのリストを作る
                $('#mainconttable tr').each(function (index, elm) {
                    var $name = $(elm).children(':eq(1)');
                    var id = get_id.exec($name.children('a').attr('href'));

                    if (id !== null)
                        id_list[id[1]] = $(elm);
                });

                var list = json.query.results.json.json;
                list.forEach(function (prob, index, ar) {
                    if (prob.status === 'AC') {
                        var id = prob.id;
                        if (id_list[id] !== undefined)
                            id_list[id].css({ backgroundColor: '#dff0d8' });
                    }
                });
            });
    });

});

/*
$(window).on('load resize', function(){
    // navbarの高さを取得する
    var height = $('.navbar').height();
    // bodyのpaddingにnavbarの高さを設定する
    $('body').css('padding-top',height + 20); 
});
*/
