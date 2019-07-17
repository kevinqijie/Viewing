let data = [{
    id: '电影',
    "data": [
        {
            name: '大人物',
            bsrc: './img/9.jpg',
            vsrc: './vedio/1.mp4'
        },
        {
            name: '疯狂的石头',
            bsrc: './img/15.jpg',
            vsrc: './vedio/2.mp4'
        },
        {
            name: '猛龙过江',
            bsrc: './img/17.jpg',
            vsrc: './vedio/3.mp4'
        },
        {
            name: '疯狂外星人',
            bsrc: './img/10.jpg',
            vsrc: './vedio/4.mp4',
        }
    ]
}, {
    id: '电视剧',
    "data": [
        {
            name: '倚天屠龙记',
            bsrc: './img/11.jpg',
            vsrc: './vedio/5.mp4'
        },
        {
            name: '器灵',
            bsrc: './img/16.jpg',
            vsrc: './vedio/6.mp4'
        },
        {
            name: '乡村爱情',
            bsrc: './img/18.jpg',
            vsrc: './vedio/7.mp4'
        },
        {
            name: '黄金瞳',
            bsrc: './img/12.jpg',
            vsrc: './vedio/8.mp4'
        }
    ]
}, {
    id: '动漫',
    "data": [
        {
            name: '斗罗大陆',
            bsrc: './img/19.jpg',
            vsrc: './vedio/9.mp4'
        },
        {
            name: '一人之下',
            bsrc: './img/21.jpg',
            vsrc: './vedio/10.mp4'
        },
        {
            name: '狐妖小红娘',
            bsrc: './img/22.jpg',
            vsrc: './vedio/11.mp4'
        },
        {
            name: '七大罪',
            bsrc: './img/20.jpg',
            vsrc: './vedio/12.mp4'
        }
    ]
},]
var url = window.location.href;
console.log(url);

var obj = {};
var reg = /\?/;
if(url.match(reg)) {
    //判断传入参数，以问号截取，问号后是参数
    var chars = url.split('?')[1];

    //再截&号
    var arr = chars.split('&');

    //获得截取后的数组为键值对字符串
    for (var i = 0; i < arr.length; i++) {

        //保守一点确定看是否为 name=value形式
        var num = arr[i].indexOf("=");

        if (num > 0) {
            //拼接字符串
            var name = arr[i].substring(0, num);
            var value = arr[i].substr(num + 1);

            //拼接对象，并转码
            obj[decodeURIComponent(name)] = decodeURIComponent(value);
        }
    }
}
var at = '';
window.onload = function(){
    var fenl = document.querySelector('.fenl');
    data.forEach(item=>{
        item.data.forEach(it=>{
          if(it.name == obj.name){
            at = it;
              return false;
          }
        })
    })
    var inner = `<ol class="breadcrumb">
    <li><a href="#">首页</a></li>
    
    <li class="active">${at.name}</li>
  </ol>
  <video src="${at.vsrc}" controls></video>`
  fenl.innerHTML = inner;
  
}

