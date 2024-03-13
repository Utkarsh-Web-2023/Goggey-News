import React, { Component } from "react";

class NewsItm extends Component {
    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (
            <>
                <div className="card news-card card-image-cover card-border">
                    <div className="image-container">
                        <img src={!imgUrl?'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.hindustantimes.com%2Fimg%2F2022%2F11%2F23%2F1600x900%2FWhatsApp_Image_2021-09-18_at_094218_1669161946458_1669161946620_1669161946620.jpeg&tbnid=drgaSEantkCdFM&vet=12ahUKEwjbzLzAhfGEAxWK3DgGHQ_OCd8QMygXegUIARCrAQ..i&imgrefurl=https%3A%2F%2Fwww.hindustantimes.com%2Findia-news%2Fbreaking-news-live-updates-november-23-latest-101669161848928.html&docid=_4ekK-X111ZoDM&w=1600&h=898&q=breaking%20news&ved=2ahUKEwjbzLzAhfGEAxWK3DgGHQ_OCd8QMygXegUIARCrAQ':imgUrl} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-header">{title}...</h2>
                        <p className="text-content2">{description}...</p>
                        <div className="card-footer">
                            <a
                                href={newsUrl}
                                target="_blank"
                                className="btn-secondary btn news-btn"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsItm;
