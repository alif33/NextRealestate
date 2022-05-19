import React from 'react';
import Slider from 'react-slick/lib/slider';
import SliderItem from './SliderItem';

const imageData = [
  "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2080960/pexels-photo-2080960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
]


const PropertyGalary = ({property}) => {
  console.log
    const settings = {
        customPaging: function(i) {
            return (
              <li className='tns-thumbnail w-100'>
                <img style={{height: '95px', width: '140px'}} src={property.images[i]} />
              </li>
            );
          },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "tns-thumbnails d-flex "
      };
    return (
        <>
            <div className="tns-carousel-wrapper">
              <div className="tns-slides-count text-dark">
                {/* <i className="fi-image fs-lg me-2" />
                <div className="ps-1">
                  <span className="tns-current-slide fs-5 fw-bold" />
                  <span className="fs-5 fw-bold">/</span>
                  <span className="tns-total-slides fs-5 fw-bold" />
                </div> */}
              </div>
              <Slider {...settings}>
                  {property.images?.map((image, i) => <SliderItem image={image} key={i}/>)}
              </Slider>
            </div>
           {
             property.images?.length === 1 &&  <ul className="tns-thumbnails" id="thumbnails">
             <li className="tns-thumbnail">
               <img 
               style={{height: '95px', width: '140px'}}
               src={property.images} alt="Thumbnail" />
             </li>
           </ul> 
           }
        </>
    );
};

export default PropertyGalary;