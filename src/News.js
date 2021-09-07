import React from 'react';
import noimg from './NoImg.png';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlImg: [],
            titleNews: [],
            urlNews: [],
            shortDescription: [],
            dates: []
        }
    }

    //when component created fetch stock
    componentDidMount() {
        this.fetchNews();
    }

    //fetch stock with api call
    fetchNews() {
        const ptr = this;
        let urlImgTemp = [];
        let titleNewsTemp = [];
        let urlNewsTemp = [];
        let shortDescriptionTemp = [];
        let datesTemp = [];
        let today = new Date();
        let articleDate = today;
        let diff = 0;

        fetch("https://bing-news-search1.p.rapidapi.com/news/search?q=stocks&safeSearch=Off&textFormat=Raw&freshness=Day&sortBy=Date&count=10", 
            {
            "method": "GET",
            "headers": {
                "x-bingapis-sdk": "true",
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                "x-rapidapi-key": "d9843c2fa5msh9d3e79a791ec3eap111d9bjsna68a36dd137b"
            }
        })
        .then(response => {
            return response.json()
        })
        .then(function (data){

            // Test if field of json object is available and if so, insert data into proper array
            for (var key in data['value']) {

                if(data['value'][key]['datePublished'] === undefined){
                    datesTemp.push("No publication date available.");
                } else {
                    articleDate = new Date(data['value'][key]['datePublished']);
                    diff = today - articleDate;
                    if (diff/31536000000 > 1){
                        datesTemp.push(Math.round(diff/31536000000) + " Years ago");
                    } else if(diff/86400000 > 1){
                        datesTemp.push(Math.round(diff/86400000) + " Days ago");
                    } else if(diff/3600000 > 1){
                        datesTemp.push(Math.round(diff/3600000) + " Hrs ago");
                        
                    } else if((diff/60000) > 1){
                        datesTemp.push(Math.round(diff/60000) + " Min ago");
                    }
                    
                }

                if(data['value'][key]['description'] === undefined){
                    shortDescriptionTemp.push("No description available.");
                } else {
                    shortDescriptionTemp.push(data['value'][key]['description']);
                }

                if(data['value'][key]['name'] === undefined){
                    titleNewsTemp.push("No title available.");
                } else {
                    titleNewsTemp.push(data['value'][key]['name']);
                }

                if(data['value'][key]['image'] === undefined){
                    urlImgTemp.push(noimg);
                } else {
                    urlImgTemp.push(data['value'][key]['image']['thumbnail']['contentUrl']);
                }

                if(data['value'][key]['url'] === undefined){
                    urlNewsTemp.push("ErrorPage.html");
                } else {
                    
                    urlNewsTemp.push(data['value'][key]['url']);
                }           

            }

            //set state as temp array
            ptr.setState({
                urlImg: urlImgTemp,
                titleNews: titleNewsTemp,
                urlNews: urlNewsTemp,
                shortDescription: shortDescriptionTemp,
                dates: datesTemp
            })
        })
        .catch(err => {
            console.log("NEWS ERROR: ")
            console.error(err);
        });
        }

    render() {
        return (
            <div class = "selectionarea2">
            <a className = "News" href = {this.state.urlNews[0]}>
                <div className = "imgContainer">
                    <img src={this.state.urlImg[0]} alt="Article thumbnail visual"></img>
                </div>
                <div className = "NewsInner">
                    <div>
                        <br></br>
                        <h4 className = "articleTitle">{this.state.titleNews[0]}</h4>
                        <p>{this.state.dates[0]}</p>
                    </div>
                    <br></br>
                    <p>{this.state.shortDescription[0]}</p>
                </div>
            </a>

            <a className = "News" href = {this.state.urlNews[1]}>
                <div className = "imgContainer">
                    <img src={this.state.urlImg[1]} alt="Article thumbnail visual"></img>
                </div>
                <div className = "NewsInner">
                    <div>
                        <br></br>
                        <h4 className = "articleTitle">{this.state.titleNews[1]}</h4>
                        <p>{this.state.dates[1]}</p>
                    </div>
                    <br></br>
                    <p>{this.state.shortDescription[1]}</p>
                </div>
            </a>

            <a className = "News" href = {this.state.urlNews[2]}>
                <div className = "imgContainer">
                    <img src={this.state.urlImg[2]} alt="Article thumbnail visual"></img>
                </div>
                <div className = "NewsInner">
                    <div>
                        <br></br>
                        <h4 className = "articleTitle">{this.state.titleNews[2]}</h4>
                        <p>{this.state.dates[2]}</p>
                    </div>
                    <br></br>
                    <p>{this.state.shortDescription[2]}</p>
                </div>
            </a>

            <a className = "News" href = {this.state.urlNews[3]}>
                <div className = "imgContainer">
                    <img src={this.state.urlImg[3]} alt="Article thumbnail visual"></img>
                </div>
                <div className = "NewsInner">
                    <div>
                        <br></br>
                        <h4 className = "articleTitle">{this.state.titleNews[3]}</h4>
                        <p>{this.state.dates[3]}</p>
                    </div>
                    <br></br>
                    <p>{this.state.shortDescription[3]}</p>
                </div>
            </a>

            <a className = "News" href = {this.state.urlNews[4]}>
                <div className = "imgContainer">
                    <img src={this.state.urlImg[4]} alt="Article thumbnail visual"></img>
                </div>
                <div className = "NewsInner">
                    <div>
                        <br></br>
                        <h4 className = "articleTitle">{this.state.titleNews[4]}</h4>
                        <p>{this.state.dates[4]}</p>
                    </div>
                    <br></br>
                    <p>{this.state.shortDescription[4]}</p>
                </div>
            </a>

            <a className = "News" href = {this.state.urlNews[5]}>
                <div className = "imgContainer">
                    <img src={this.state.urlImg[5]} alt="Article thumbnail visual"></img>
                </div>
                <div className = "NewsInner">
                    <div>
                        <br></br>
                        <h4 className = "articleTitle">{this.state.titleNews[5]}</h4>
                        <p>{this.state.dates[5]}</p>
                    </div>
                    <br></br>
                    <p>{this.state.shortDescription[5]}</p>
                </div>
            </a>

            <a className = "News" href = {this.state.urlNews[6]}>
                <div className = "imgContainer">
                    <img src={this.state.urlImg[6]} alt="Article thumbnail visual"></img>
                </div>
                <div className = "NewsInner">
                    <div>
                        <br></br>
                        <h4 className = "articleTitle">{this.state.titleNews[6]}</h4>
                        <p>{this.state.dates[6]}</p>
                    </div>
                    <br></br>
                    <p>{this.state.shortDescription[6]}</p>
                </div>
            </a>

            <a className = "News" href = {this.state.urlNews[7]}>
                <div className = "imgContainer">
                    <img src={this.state.urlImg[7]} alt="Article thumbnail visual"></img>
                </div>
                <div className = "NewsInner">
                    <div>
                        <br></br>
                        <h4 className = "articleTitle">{this.state.titleNews[7]}</h4>
                        <p>{this.state.dates[7]}</p>
                    </div>
                    <br></br>
                    <p>{this.state.shortDescription[7]}</p>
                </div>
            </a>

            <a className = "News"  href = {this.state.urlNews[8]}>
                <div className = "imgContainer">
                    <img src={this.state.urlImg[8]} alt="Article thumbnail visual"></img>
                </div>
                <div className = "NewsInner">
                    <div>
                        <br></br>
                        <h4 className = "articleTitle">{this.state.titleNews[8]}</h4>
                        <p>{this.state.dates[8]}</p>
                    </div>
                    <br></br>
                    <p>{this.state.shortDescription[8]}</p>
                </div>
            </a>
            
            <a className = "News" href = {this.state.urlNews[9]}>
                <div className = "imgContainer">
                    <img src={this.state.urlImg[9]} alt="Article thumbnail visual"></img>
                </div>
                <div className = "NewsInner">
                    <div>
                        <br></br>
                        <h4 className = "articleTitle">{this.state.titleNews[9]}</h4>
                        <p>{this.state.dates[9]}</p>
                    </div>
                    <br></br>
                    <p>{this.state.shortDescription[9]}</p>
                </div>
            </a>
        </div>
        )
    }

}

export default News;