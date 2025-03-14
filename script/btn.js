






function loadCategories() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
}

// load videos function 


function loadVideos() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideos(data.videos))

}


function loadCategoryVideos (id){
  const url  = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
  
  fetch(url)
  .then(response => response.json())
  .then (data => displayVideos(data.category
  ))
}





// {category_id: '1001', category: 'Music'}

function displayCategories(categories) {
  const categroyContainer = document.getElementById('categroy-container');


  for (let cat of categories) {
    const containerDiv = document.createElement('div');
    containerDiv.innerHTML = `
  <button onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
  `;
    categroyContainer.append(containerDiv);
  }
}







const displayVideos = (videos) => {

  const videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = "";
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
            <h1 class="text-xs text-gray-400 flex gap-1 pt-2">Awlad Hossain <img class="w-5 h-5" src="https://img.icons8.com/?size=64&id=2AuMnRFVB9b1&format=png" alt=""></h1>
            <h3 class="text-xs text-gray-400 ">91K views</h3>
          </div>
         
        </div>
      </div>
    `
    videoContainer.append(videoCard);


  });

}


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
