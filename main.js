const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
};

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
};

const API_KEY=`7188006103df4e1dbdeec801d3df41c1`;
let newsList = [];
const menu = document.querySelectorAll(".menus button")
menus.forEach(menu=>addEventListener("click", (event)=>getNewsByCategory(event)))


const getLatestNews = async ()=>{
    const url= new URL(`https://dancing-gumdrop-55f882.netlify.app/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    render();
    console.log("ddd", newsList);
};

const getNewsByCategory=(event)=>{
    const category = event.target.textContent.toLowerCase();
    const url = new URL(
        `https://dancing-gumdrop-55f882.netlify.app/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    render();
};

    const getNewsByKeyword= async()=>{
    const keyword = document.getElementById("search-input").value;
    const url = new URL(
        `https://dancing-gumdrop-55f882.netlify.app/top-headlines?country=us&q=${keyword}&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    render();
};

const render=()=>{
    const newsHTML = newsList.map(
        (news) => `<div class="row news">
    <div class="col-lg-4">
        <img class="news-img-size" 
        src="${news.urlToImage}"/>
   </div>
    <div class="col-lg-8">
        <h2>${news.title}</h2>
        <p>
           ${news.description}
        </p>
        <div>
            ${news.source.name} * ${news.publishedAt}
        </div>

    </div>
</div>`
).join('');
console.log("html", newsHTML)
    document.getElementById('news-board').innerHTML=newsHTML;
};

getLatestNews();

//1.버튼에 클릭이벤트
//2. 카테별 뉴스 가져오기
//3.그 뉴스를 보여주기
