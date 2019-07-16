var lists = document.querySelector('.lists');
let data = [{
    id:'电视剧',
    "data":[
        {
            name:'大人物',
            bsrc:'./img/9.jpg',
            vsrc:'./vedio/1.mp4'
        },
         {
            name:'疯狂外星人',
            bsrc:'./img/10.jpg',
            vsrc:'./vedio/2.mp4'
        },
        {
            name:'大人物',
            bsrc:'./img/9.jpg',
            vsrc:'./vedio/1.mp4'
        },
         {
            name:'疯狂外星人',
            bsrc:'./img/9.jpg',
            vsrc:'./vedio/2.mp4',
        }
    ]
    },{
    id:'电影',
    "data":[
        {
            name:'倚天屠龙记',
            bsrc:'./img/11.jpg',
            vsrc:'./vedio/3.mp4'
        },
         {
            name:'黄金瞳',
            bsrc:'./img/12.jpg',
            vsrc:'./vedio/4.mp4'
        },
        {
            name:'倚天屠龙记',
            bsrc:'./img/11.jpg',
            vsrc:'./vedio/3.mp4'
        },
         {
            name:'黄金瞳',
            bsrc:'./img/12.jpg',
            vsrc:'./vedio/4.mp4'
        }
    ]
    },{
    id:'动漫',
    "data":[
        {
            name:'芝麻胡同',
            bsrc:'./img/13.jpg',
            vsrc:'./vedio/5.mp4'
        },
         {
            name:'大人物',
            bsrc:'./img/9.jpg',
            vsrc:'./vedio/6.mp4'
        },
        {
            name:'芝麻胡同',
            bsrc:'./img/13.jpg',
            vsrc:'./vedio/5.mp4'
        },
         {
            name:'大人物',
            bsrc:'./img/9.jpg',
            vsrc:'./vedio/6.mp4'
        }
    ]
    },]
  
    data.forEach(item=>{
     
        var itam = '';
        item.data.forEach(it=>{
            var itan = `
                 <div class="col-md-3 col-sm-4 col-xs-6  pcShow">
                     <a href='./bofang.html?name=${it.name}'>
                     <img src="${it.bsrc}"> 
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
 