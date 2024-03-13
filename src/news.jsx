import React, { Component } from "react";
import NewsItm from "./newsItm";
import "./style.css";
class NewsComponent extends Component {
    articles = [
        {
            source: {
                id: null,
                name: "Digital Trends",
            },
            author: "Trevor Mogg",
            title: "NASA, Boeing delay Starliner’s first crewed flight again - Digital Trends",
            description:
                "NASA and Boeing have pushed the target launch date for the first crewed test flight of the Starliner spacecraft from April to May.",
            url: "https://www.digitaltrends.com/space/starliner-test-flight-has-been-delayed-again/",
            urlToImage:
                "https://www.digitaltrends.com/wp-content/uploads/2021/08/boeing-starliner-troubleshooting-in-vif1.jpeg?resize=1200%2C630&p=1",
            publishedAt: "2024-03-11T04:30:20Z",
            content:
                "Boeing’s CST-100 Starliner spacecraft.Boeing / Boeing\r\nThe first crewed test flight of Boeing Space’s CST-100 Starliner spacecraft has been delayed yet again, but this time it’s not the result of an … [+1894 chars]",
        },
        {
            source: {
                id: null,
                name: "Moneycontrol",
            },
            author: "Moneycontrol News",
            title: "Tata Chemicals stock plunges 10% as Tata Sons seeks options to avoid IPO - Moneycontrol",
            description:
                "If the Tata Sons IPO does not materialise, Tata Chemicals will lose on the potential value unlocking as it is expected to be the biggest beneficiary of the much anticipated public issue",
            url: "https://www.moneycontrol.com/news/business/markets/tata-chemicals-stock-plunges-10-as-tata-sons-seeks-options-to-avoid-ipo-12435151.html",
            urlToImage:
                "https://images.moneycontrol.com/static-mcnews/2021/01/Tata-Chemicals-1-770x433.jpg",
            publishedAt: "2024-03-11T04:12:41Z",
            content:
                "If the Tata Sons IPO does not materialise, Tata Chemicals will lose on the potential value unlocking as it is expected to be the biggest beneficiary of the much anticipated public issue\r\n Discover th… [+182 chars]",
        },
        {
            source: {
                id: null,
                name: "The Indian Express",
            },
            author: "The Indian Express",
            title: "Is lemon and honey a powerful remedy for sore throat as the weather changes? - The Indian Express",
            description: null,
            url: "https://indianexpress.com/article/lifestyle/life-style/lemon-honey-ginger-powerful-remedy-sore-throat-weather-changes-9198485/",
            urlToImage: null,
            publishedAt: "2024-03-11T04:06:41Z",
            content: null,
        },
        {
            source: {
                id: null,
                name: "Hindustan Times",
            },
            author: "Khushi Pal",
            title: "5 healthy vegetable juices for weight loss - Hindustan Times",
            description:
                "Here are five vegetable juices to help you lose weight.",
            url: "https://www.hindustantimes.com/web-stories/lifestyle/5-healthy-vegetable-juices-for-weight-loss-101710125922169.html",
            urlToImage: null,
            publishedAt: "2024-03-11T03:58:44Z",
            content:
                "By Khushi PalPublished Mar 11, 2024\r\nHindustan TimesLifestylePhoto Credits: Pexels",
        },
        {
            source: {
                id: "google-news",
                name: "Google News",
            },
            author: null,
            title: '"It\'s a Backroom Team Made Up Of Cheerleaders": Michael Vaughan Rips Apart Ben Stokes And Co - NDTV Sports',
            description:
                "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
            url: "https://news.google.com/rss/articles/CBMijQFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pbmRpYS12cy1lbmdsYW5kLTIwMjQvaXMtYS1iYWNrcm9vbS10ZWFtLW1hZGUtdXAtb2YtY2hlZXJsZWFkZXJzLW1pY2hhZWwtdmF1Z2hhbi1yaXBzLWFwYXJ0LWJlbi1zdG9rZXMtYW5kLWNvLTUyMTE0NDLSAZMBaHR0cHM6Ly9zcG9ydHMubmR0di5jb20vaW5kaWEtdnMtZW5nbGFuZC0yMDI0L2lzLWEtYmFja3Jvb20tdGVhbS1tYWRlLXVwLW9mLWNoZWVybGVhZGVycy1taWNoYWVsLXZhdWdoYW4tcmlwcy1hcGFydC1iZW4tc3Rva2VzLWFuZC1jby01MjExNDQyL2FtcC8x",
            urlToImage:
                "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
            publishedAt: "2024-03-11T03:43:19Z",
            content: null,
        },
        {
            source: {
                id: null,
                name: "Hindustan Times",
            },
            author: "Vishal Joshi",
            title: "Trust deficit between farm unions once again comes to fore during Rail Roko stir - Hindustan Times",
            description:
                "Sharp differences among farmer union leaders resurfaced during 'rail roko' in Punjab. Lack of unity blamed as trust deficit widens. Leaders clash publicly.",
            url: "https://www.hindustantimes.com/cities/chandigarh-news/trust-deficit-between-farm-unions-once-again-comes-to-fore-during-rail-roko-stir-101710098345430.html",
            urlToImage:
                "https://www.hindustantimes.com/ht-img/img/2024/03/11/1600x900/Farm-leader-Sarwan-Singh-Pandher--C--with-other-le_1710098342341_1710125946605.jpg",
            publishedAt: "2024-03-11T03:01:12Z",
            content:
                "Bathinda Sharp differences among the farmer union leaders cropped up once again even as they worked together to make rail roko a success across the state on Sunday.\r\nFarm leader Sarwan Singh Pandher … [+4481 chars]",
        },
    ];
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
        };
    }
    async componentDidMount() {
        let apiKey = "8be757224860bf9f849efb62c4cb6948";
        let url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=${apiKey}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData)
        this.setState({ articles: parsedData.articles });
        // console.log("fetched")
    }
    render() {
        return (
            <>
                <div className="flex news-container my-5 ">
                    <h1 className="heading">
                        Goggey News - Top News Headlines
                    </h1>
                    <div className="news">
                        {this.state.articles.map((element) => {
                            return (
                                <NewsItm
                                    key={element.url}
                                    imgUrl={element.image}
                                    title={element.title.slice(0, 50)}
                                    description={
                                        element.description
                                            ? element.description.slice(0, 90)
                                            : ""
                                    }
                                    newsUrl={element.url}
                                />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default NewsComponent;
