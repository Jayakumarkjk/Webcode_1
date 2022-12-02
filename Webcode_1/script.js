// let api = (`AIzaSyAbzjXFE2poWsC5rrMF0OYx1d9sucJCJzs`)
// let subscriptions = (`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UCAuUUnT6oDeKwE6v1NGQxug&key=`)
// let videos = (`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCK8sQmJBp8GCxrOtXWBpyEA&key=`)
// let channels = (`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=UCK8sQmJBp8GCxrOtXWBpyEA&key=`)

// async function video (){
//     let data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyAbzjXFE2poWsC5rrMF0OYx1d9sucJCJzs`)
//     let res = await data.json()
//     console.log(res)
// }
// video();


// const sidebarcontainer = document.querySelector('sidebar');

// let subcount = document.getElementById('crip')

async function subscriptions(){
    let retrive = await fetch(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UCAuUUnT6oDeKwE6v1NGQxug&key=AIzaSyAbzjXFE2poWsC5rrMF0OYx1d9sucJCJzs`)
    let res1 = await retrive.json()
    console.log(res1)
    // subcount.innerHTML = res1["items"].subscriptions
}
subscriptions();


async function video(){
    let view = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyAbzjXFE2poWsC5rrMF0OYx1d9sucJCJzs`)
    let res2 = await view.json()
    console.log(res2)
    // playlist.innerHTML = res2["items2"]
}
video();


async function channel(){
    let info = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=UCK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyAbzjXFE2poWsC5rrMF0OYx1d9sucJCJzs`)
    let res3 = await info.json()
    console.log(res3)
}
channel();

// const link = document.querySelectorAll('.links');
// function activeLink(){
//     link.forEach((item)=>
//     item.classList.remove('active'));
//     this.classList.add('active');
// }

// link.forEach((item)=>
// item.addEventListener('click', activeLink));


// var sidebar = document.createElement('div')
// sidebar.innerHTML=`<input type = "text" id="txt">
// <button type="button" onClick="getSubscription()">Title</button>`;
// sidebar.setAttribute('id', 'count')
// document.body.append(sidebar);

// async function getSubscription(){
//     let test = document.getElementById("count")
//     console.log(test);

// }