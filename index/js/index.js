/**
 * Created by yubin on 2017/11/20.
 */
$(function () {
/*
* 头部JS
* */
$('#search').mouseenter(function () {
    $('.search-box').addClass('isShow');
    $(this).addClass('toChange');
});
$('header').mouseleave(function () {
    $('.search-box').removeClass('isShow');
    $('#search').removeClass('toChange')
});

/*
* 渲染列表
* */
    var a=[
        {
            list:[
                {username:'1',type:'后端'},
                {username:'2',type:'后端'},
                {username:'3',type:'后端'},
                {username:'4',type:'后端'},
                {username:'5',type:'后端'},
                {username:'6',type:'后端'},
                {username:'7',type:'后端'},
                {username:'8',type:'后端'},
                {username:'9',type:'后端'},
                {username:'10',type:'后端'}
            ]
        },
        {
            list:[
                {username:'11',type:'前端'},
                {username:'12',type:'前端'},
                {username:'13',type:'前端'},
                {username:'14',type:'前端'},
                {username:'15',type:'前端'},
                {username:'16',type:'前端'},
                {username:'17',type:'前端'}
            ]
        }
    ];

    var html = template('js-tmp',a[0]);
    $('.blob_listItem').empty().append(html);

    $("#page").paging({
        pageNo:1,
        totalPage: 200,
        totalSize: 300,
        callback: function(num) {
            var html = template('js-tmp',a[num-1]);
            $('.blob_listItem').empty().append(html);
            $('body').scrollTop(0);
        }
    })
});