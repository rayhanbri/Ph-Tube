function showLoader(){
  document.getElementById('loader').classList.remove('hidden')
  document.getElementById('video-container').classList.add('hidden')
}
function hideLoader(){
  document.getElementById('loader').classList.add('hidden')
  document.getElementById('video-container').classList.remove('hidden')
}



function removeActiveClass(){
  const activeButton  = document.getElementsByClassName('active');

  for(let btn of activeButton){
    btn.classList.remove('active');
  }
  // console.log(activeButton)
}






function loadCategories() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
}

// load videos function 


function loadVideos(search = '') {
  showLoader()
  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`)
    .then(response => response.json())
    .then(data => {
      // this is for all button 
      removeActiveClass();
      document.getElementById('btn-all').classList.add('active');
      displayVideos(data.videos)
    })

}


function loadCategoryVideos (id){
  showLoader();
  const url  = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
  
  fetch(url)
  .then(response => response.json())
  .then (data => {
   removeActiveClass();
    const cilckedButton = document.getElementById(`btn-${id}`)
    cilckedButton.classList.add('active');
    // console.log(cilckedButton)
    displayVideos(data.category)
  })
}

const loadVideoDetails =(videoId)=>{
 
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`

  fetch(url)
  .then (response => response.json())
  .then (data => displayvideoDetails(data.video))

  console.log(url);

}

const displayvideoDetails = (video) => {
  console.log(video);
  document.getElementById('video_details').showModal();

  const videoDetails = document.getElementById('video-details')
  videoDetails.innerHTML=`
  <div class="card bg-base-100 image-full  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
  `

}




// {category_id: '1001', category: 'Music'}

function displayCategories(categories) {
  const categroyContainer = document.getElementById('categroy-container');


  for (let cat of categories) {
    // console.log(cat);
    const containerDiv = document.createElement('div');
    containerDiv.innerHTML = `
  <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
  `;
    categroyContainer.append(containerDiv);
  }
}







const displayVideos = (videos) => {

  const videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = "";

  if(videos.length == 0 ){
    videoContainer.innerHTML = `
    <div class="col-span-4 flex flex-col justify-center items-center  ">
      <img class="w-[120px] " src="asset/Icon.png" alt="">
      <h1 class="text-3xl font-bold text-center w-[433px]">Oops!! Sorry, There is no content here</h1> 
     </div>
     `;
     hideLoader();
     return;
  }  
  // console.log(video)

  videos.forEach(video => {
    // console.log(video)
    

    const videoCard = document.createElement('div');
    videoCard.innerHTML = `
    <div class="card bg-base-100 ">
        <figure class="relative">
          <img class="w-full h-[120px] object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute bottom-2 right-2 p-1 rounded-sm text-white bg-black text-[10px]">
              3hrs 56 min ago
            </span>
        </figure>
        <div class="card-body px-0 py-5 flex flex-row">
          <div class="profile">
            <div class="avatar">
              <div class="w-9 rounded-full">
                <img src="${video.authors[0].profile_picture
                }" />
              </div>
            </div>
          </div>
          <div class="information">
            <h2 class="text-base font-bold">${video.title}</h2>
            <h1 class="text-xs text-gray-400 flex gap-1 pt-2">${video.authors[0].profile_name}
            ${video.authors[0].verified == true?     `<img class="w-5 h-5" src="https://img.icons8.com/?size=64&id=2AuMnRFVB9b1&format=png" alt=""></h1>
              <h3 class="text-xs text-gray-400 ">91K views</h3>` : ``
            }
             
          </div>
         
        </div>
        <button onclick="loadVideoDetails('${video.video_id}')" class="btn btn-block">Show Details</button>
      </div>
    `
    videoContainer.append(videoCard);


  });
  hideLoader()

}

document.getElementById('input-field').addEventListener('keyup',(e)=>{
  const input = e.target.value;
  loadVideos(input)
})
loadCategories()






// "category_id": "1001",
//       "category": "Music"

// {category_id: '1001', video_id: 'aaal', thumbnail: 'https://i.ibb.co/hdtZYbB/enchnting.jpg', title: 'Enchanted Harmonies', authors: Array(1), …}
// authors
// :
// Array(1)
// 0
// :
// {profile_picture: 'https://i.ibb.co/jh1q2F3/shopia.jpg', profile_name: 'Sophia Williams', verified: false}
// length
// :
// 1
// [[Prototype]]
// :
// Array(0)
// category_id
// :
// "1001"
// description
// :
// "'Enchanted Harmonies' by Sophia Williams enchants listeners with its delicate, soothing sounds and melodic complexity. Garnering 7.6K views, this piece is perfect for those seeking an immersive musical experience that blends elegance with emotion, offering a unique soundscape that resonates deeply with its audience."
// others
// :
// posted_date
// :
// "16450"
// views
// :
// "7.6K"
// [[Prototype]]
// :
// Object
// thumbnail
// :
// "https://i.ibb.co/hdtZYbB/enchnting.jpg"
// title
// :
// "Enchanted Harmonies"
// video_id
// :
// "aaal"
// [[Prototype]]
// :
// Object


