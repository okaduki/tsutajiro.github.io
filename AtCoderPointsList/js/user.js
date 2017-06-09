$(window).on("load", function() {
    var PointArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
                        1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000,
                        2100, 2200, 2300, 2400, 2500];

    $("#difficulty_submit").click(function() {
        var lb = $("#difficulty_min").val();
        var ub = $("#difficulty_max").val();

        for (var i = 0; i < PointArray.length; i++) {
            // lb 以上 ub 以下の要素に関しては表示し、そうでなければ表示しない
            if(lb <= PointArray[i] && PointArray[i] <= ub) {
                $(".dif_" + PointArray[i]).css('display', 'table-row');
            }
            else {
                $(".dif_" + PointArray[i]).css('display', 'none');
            }
        }
    });

    /*
    // 曲hoverでライナーノーツを表示
    if(w >= 680) {
        $(".note_contents").show();
        $(".list td").hover(
            function() {
                var idname = $(this).attr("id");
                $("#comment_" + idname).stop().show(300, "easeOutExpo");
            },
            function() {
                var idname = $(this).attr("id");
                $("#comment_" + idname).stop().hide(300, "easeOutExpo");
            }
        );
    }
    else {
        $(".note_contents").hide();
    }
    */
});