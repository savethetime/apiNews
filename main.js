const API_KEY=`7188006103df4e1dbdeec801d3df41c1`;
let newsList = [];
const getLatestNews = async ()=>{
    const url= new URL(`https://remarkable-llama-5fada7.netlify.app/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    render();
    console.log("ddd", newsList);
};

const render=()=>{
    const newsHTML = newsList.map(
        (news) => `<div class="row news">
    <div class="col-lg-4">
        <image class="news-img-size" 
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