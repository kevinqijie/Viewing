var lists = document.querySelector('.lists');
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
    data.forEach(item=>{
     
        var itam = '';
        item.data.forEach(it=>{
            var itan = `
                 <div class="col-xs-3 col-md-3 pcShow">
                     <a href='./bofang.html?name=${it.name}'>
                     <img src="${it.bsrc}">
                     <span class="Mongolia">
                     ${it.name}
                     </span>  
                     </a>
                 </div>
         `
         itam += itan;
        })
        var inner =`
        <h1>
        ${item.id}
    </h1>
    <div class="row dians">
       ${itam}
    </div>
        ` 
        console.log(inner)
        lists.innerHTML += inner;
    })
