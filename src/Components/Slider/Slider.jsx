import React, { Fragment, useEffect } from 'react';
import './Slider.css';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Img from '../../assets/images/user1.png';



const Slider = props => {

    // const [loading, changeLoading] = useState(false);
    // const [comments, changeComments] = useState([]);

    // useEffect(() => {
    //     changeLoading(true);
    //     const url = BASE_URL + '/api/comments/';
    //     axios.get(url)
    //         .then(res => {
    //             changeLoading(false);
    //             changeComments(res.data.results);
    //         })
    // }, [])

    // let commentList;

    // if (loading) {
    //     commentList = <Loading />
    // }

    // if (comments.length > 0) {
    //     commentList = comments.map(comment => (
    //         <Carousel.Item key={comment.id}>
    //             <div className="SliderItem">
    //                 <img src={comment.image} alt="" className="SliderImage" />
    //                 <h3 className="Name">{comment.name}</h3>
    //                 <p><i>{comment.location}</i></p>
    //                 <p className="Content">
    //                     {comment.comment}
    //                 </p>
    //             </div>
    //         </Carousel.Item>
    //     ))
    // }

    return (
        <div className="">
            <h1 className="What" style={{ textAlign: 'center', marginTop: 100 }}>What Our Customer Say</h1>
            <Carousel>
                <Carousel.Item >
                    <div className="SliderItem">
                        <p className="Content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, soluta accusamus. Assumenda eum amet quo ipsa, obcaecati tenetur alias ea dicta similique dolore molestias quod dolores, distinctio, perspiciatis delectus. Reiciendis?
                        </p>
                        <img src={Img} alt="" className="SliderImage" />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="SliderItem">
                        <p className="Content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, soluta accusamus. Assumenda eum amet quo ipsa, obcaecati tenetur alias ea dicta similique dolore molestias quod dolores, distinctio, perspiciatis delectus. Reiciendis?
                        </p>
                        <img src={Img} alt="" className="SliderImage" />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="SliderItem">
                        <p className="Content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, soluta accusamus. Assumenda eum amet quo ipsa, obcaecati tenetur alias ea dicta similique dolore molestias quod dolores, distinctio, perspiciatis delectus. Reiciendis?
                        </p>
                        <img src={Img} alt="" className="SliderImage" />
                    </div>
                </Carousel.Item>
            </Carousel >
        </div>
    )
}


export default Slider;
