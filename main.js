const API_KEY=`7188006103df4e1dbdeec801d3df41c1`;
let news = [];
const getLatestNews = async ()=>{
    const url= new URL(`https://remarkable-llama-5fada7.netlify.app/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("ddd", news);
};

getLatestNews();