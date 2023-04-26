
const videoCardContainer = document.querySelector('.video-container')



let api_key = "AIzaSyAbzjXFE2poWsC5rrMF0OYx1d9sucJCJzs"
let video_http = "https://www.googleapis.com/youtube/v3/videos?"
let channel_http = "https://www.googleapis.com/youtube/v3/channels?"
const subscribers = "https://www.googleapis.com/youtube/v3/channels?";
const youtubeUser = "MILLY-TEC";

// let subscriptions = "https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UCAuUUnT6oDeKwE6v1NGQxug&key="
// let videos = "https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCK8sQmJBp8GCxrOtXWBpyEA&key="
// let channels = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=UCK8sQmJBp8GCxrOtXWBpyEA&key="


fetch(video_http + new URLSearchParams ({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults:50,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
    console.log(data);
    data.items.forEach(item => {
        getChannelIcon(item);
    })

})

.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then (res => res.json())
    .then (data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        console.log(video_data);
        makeVideoCard(video_data);
    })

}


const makeVideoCard=(data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onClick="location.href = 'https://www.youtube.com/watch?v=${data.id}'">
    <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="" >
    <div class="content"></div>
    <img src="${data.channelThumbnail}" class="channel-icon" alt="" >
    <div class="info"></div>
    <h4 class="title" >${data.snippet.title}</h4>
    <p class="channel-name">${data.snippet.channelTitle}</p>



</div>
    `
}


const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
});


const subCount = document.getElementById('subCount');


let getSubscribers = ()=> {

    fetch (`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${api_key}`)
    .then(res => res.json())   
    .then (data3 => {
        console.log(data3);
        subCount.innerHTML = data3["items"].statistics.subscriberCount;
    })
}

getSubscribers();

