import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsClock } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const carouselProperties = {
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        // dots: true,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        initialSlide: 2,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "20px",
      },
    },
  ],
};

const Carousel = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data);
    }
  };

  return (
    <div>
      <Slider {...carouselProperties}>
        {popular.map((recipe) => {
          return (
            <div className="recipe-card" key={recipe.id}>
              <div className="card-image">
                <Link to={"/recipe/" + recipe.id}>
                  {" "}
                  <img src={recipe.image} alt={recipe.name} />
                </Link>
              </div>
              <div className="card-body text-left">
                <div className="info">
                  <div className="time">
                    <BsClock />
                    <span>&nbsp;&nbsp;{recipe.readyInMinutes} min</span>
                  </div>
                  <div className="serving">
                    <i className="fa-solid fa-utensils"></i>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 1550 1550"  xmlSpace="preserve" className=""><g><g xmlns="http://www.w3.org/2000/svg" id="Layer_3"><g><g><g><path d="m1020.727 1507.408c-21.281 0-41.188-8.372-56.057-23.574-14.834-15.167-22.745-35.193-22.275-56.388l17.796-801.561c.253-11.385-5.79-21.797-15.769-27.174-39.692-21.384-73.372-58.687-97.4-107.877-23.894-48.917-36.524-106.357-36.524-166.111 0-76.87 20.881-149.446 58.795-204.359 19.017-27.543 41.359-49.288 66.408-64.633 26.788-16.41 55.395-24.731 85.026-24.731s58.238 8.321 85.026 24.731c25.048 15.344 47.391 37.09 66.408 64.633 37.915 54.914 58.796 127.49 58.796 204.359 0 59.753-12.63 117.194-36.524 166.111-24.027 49.19-57.708 86.494-97.399 107.877-9.98 5.376-16.022 15.789-15.77 27.174l17.796 801.561c.471 21.195-7.44 41.22-22.274 56.388-14.869 15.202-34.778 23.574-56.059 23.574zm0-1428.408c-41.622 0-81.375 24.375-111.934 68.636-32.433 46.974-50.295 109.865-50.295 177.087 0 103.581 43.679 196.707 108.69 231.73 25.939 13.975 41.646 40.988 40.991 70.497l-17.796 801.561c-.182 8.175 2.874 15.903 8.603 21.76 5.762 5.892 13.483 9.136 21.741 9.136s15.979-3.245 21.742-9.137c5.729-5.857 8.784-13.585 8.602-21.76l-17.796-801.561c-.655-29.51 15.052-56.522 40.992-70.497 65.011-35.024 108.69-128.15 108.69-231.731 0-67.222-17.862-130.112-50.295-177.087-30.56-44.259-70.313-68.634-111.935-68.634z" fill="#2a2a2a" data-original="#000000" className=""></path></g></g><g><g><g><path d="m488.948 1519c-21.281 0-41.178-8.384-56.025-23.607-14.813-15.189-22.678-35.226-22.147-56.42l17.364-692.77c.766-30.557-11.58-60.116-33.871-81.096l-16.279-15.322c-37.461-35.257-58.946-84.952-58.946-136.342v-435.238c0-13.255 10.745-24 24-24s24 10.745 24 24v435.237c0 38.21 15.98 75.165 43.844 101.389l16.279 15.322c32.221 30.326 50.066 73.063 48.958 117.253l-17.363 692.77c-.205 8.148 2.823 15.856 8.525 21.704 5.736 5.881 13.429 9.121 21.661 9.121s15.925-3.239 21.661-9.121c5.702-5.847 8.73-13.555 8.525-21.704l-17.363-692.77c-1.108-44.19 16.737-86.927 48.958-117.253l16.279-15.322c27.863-26.224 43.843-63.179 43.843-101.389v-435.237c0-13.255 10.745-24 24-24s24 10.745 24 24v435.237c0 51.39-21.485 101.084-58.946 136.342l-16.279 15.322c-22.291 20.98-34.637 50.538-33.871 81.096l17.364 692.77c.531 21.194-7.334 41.231-22.147 56.42-14.846 15.224-34.743 23.608-56.024 23.608z" fill="#2a2a2a" data-original="#000000" className=""></path></g></g><g><g><g><path d="m440.442 428.18c-13.255 0-24-10.745-24-24v-324.097c0-13.255 10.745-24 24-24s24 10.745 24 24v324.097c0 13.255-10.745 24-24 24z" fill="#2a2a2a" data-original="#000000" className=""></path></g></g><g><g><path d="m537.454 428.18c-13.255 0-24-10.745-24-24v-324.097c0-13.255 10.745-24 24-24s24 10.745 24 24v324.097c0 13.255-10.746 24-24 24z" fill="#2a2a2a" data-original="#000000" className=""></path></g></g></g></g></g></g></g></svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnssvgjs="http://svgjs.com/svgjs"
                      width="1em"
                      height="1em"
                      x="0"
                      y="0"
                      viewBox="0 0 511.99871 511"
                      xmlSpace="preserve"
                      className=""
                    >
                      <g>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="m380.589844 204.039062 30.082031-1.90625c.050781-.003906.105469-.007812.160156-.011718 21.4375-1.808594 40.679688-13.039063 52.796875-30.820313l23.78125-34.890625c20.699219-30.375 28.71875-67.0625 22.574219-103.300781-1.207031-7.117187-4.847656-13.675781-10.246094-18.460937-5.402343-4.789063-12.347656-7.617188-19.558593-7.960938-36.726563-1.757812-72.175782 10.605469-99.847657 34.796875l-31.789062 27.792969c-16.199219 14.160156-25.042969 34.609375-24.269531 56.113281.003906.050781.003906.105469.007812.160156l1.714844 30.089844c.667968 11.730469-3.632813 23.304687-11.777344 31.734375l-248.351562 255.132812c-6.648438 6.933594-10.082032 16.445313-9.664063 26.785157.460937 11.382812 5.683594 22.5625 13.972656 29.910156 7.488281 6.636719 17.78125 10.417969 28.070313 10.417969 1.101562 0 2.203125-.042969 3.300781-.132813 10.316406-.824219 19.351563-5.371093 25.46875-12.847656l223.464844-277.085937c7.410156-9.117188 18.386719-14.773438 30.109375-15.515626zm-42.039063 5.859376-223.445312 277.0625c-3.414063 4.171874-8.664063 6.742187-14.78125 7.230468-7.277344.582032-14.738281-1.839844-19.964844-6.472656-5.226563-4.636719-8.523437-11.753906-8.816406-19.046875-.25-6.128906 1.667969-11.648437 5.363281-15.5l248.332031-255.113281c11.132813-11.519532 16.992188-27.296875 16.085938-43.289063l-1.714844-30.011719c-.582031-16.832031 6.351563-32.835937 19.035156-43.925781l31.789063-27.792969c24.671875-21.566406 56.289062-32.578124 89.015625-31.023437 3.726562.179687 7.3125 1.640625 10.105469 4.117187 2.792968 2.472657 4.671874 5.863282 5.296874 9.539063 5.476563 32.308594-1.671874 65.011719-20.125 92.089844l-23.78125 34.894531c-9.488281 13.921875-24.546874 22.722656-41.328124 24.164062l-30 1.898438c-15.984376 1.015625-30.945313 8.726562-41.066407 21.179688zm0 0"
                          fill="#2a2a2a"
                          data-original="#000000"
                          className=""
                        ></path>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="m497.820312 440.570312-166.519531-151.667968c-3.132812-2.855469-7.984375-2.628906-10.84375.503906-2.851562 3.132812-2.625 7.988281.507813 10.84375l166.476562 151.632812c3.960938 3.660157 6.207032 9.054688 6.328125 15.1875.144531 7.296876-2.71875 14.597657-7.660156 19.539063-4.9375 4.9375-12.226563 7.808594-19.539063 7.660156-6.132812-.121093-11.527343-2.367187-15.148437-6.285156l-148.382813-162.90625c-2.855468-3.136719-7.710937-3.359375-10.84375-.507813-3.132812 2.855469-3.359374 7.710938-.503906 10.84375l148.417969 162.945313c6.523437 7.054687 15.8125 11.054687 26.160156 11.257813.269531.003906.535157.007812.804688.007812 11.121093 0 22.242187-4.511719 29.886719-12.160156 7.835937-7.835938 12.378906-19.308594 12.152343-30.695313-.203125-10.347656-4.199219-19.636719-11.292969-26.199219zm0 0"
                          fill="#2a2a2a"
                          data-original="#000000"
                          className=""
                        ></path>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="m92.609375 202.585938c12.703125 11.703124 29.207031 18.375 46.472656 18.789062.054688.003906.109375.003906.160157.003906l30.140624.09375c11.75.035156 23.042969 5.023438 30.96875 13.660156l13.277344 14.574219c1.515625 1.664063 3.589844 2.507813 5.675782 2.507813 1.84375 0 3.695312-.660156 5.164062-2 3.136719-2.855469 3.363281-7.710938.507812-10.84375l-13.296874-14.59375c-10.828126-11.804688-26.226563-18.601563-42.246094-18.65625l-30.058594-.09375c-13.355469-.339844-26.125-5.453125-36.019531-14.410156l-87.347657-103.835938c-.890624-1.0625-.824218-2.601562.15625-3.582031.671876-.675781 1.460938-.773438 1.871094-.773438s1.199219.097657 1.875.773438l79.507813 79.511719c7.859375 7.859374 20.648437 7.859374 28.507812-.003907l9.34375-9.339843v-.003907l16.589844-16.589843s.003906 0 .003906-.003907c0 0 .003907-.003906.003907-.003906l9.339843-9.339844c7.859375-7.859375 7.859375-20.648437 0-28.507812l-79.507812-79.507813c-1.03125-1.03125-1.03125-2.714844 0-3.746094.980469-.980468 2.519531-1.046874 3.582031-.15625l103.835938 87.351563c8.960937 9.890625 14.074218 22.664063 14.414062 36.015625l.089844 30.0625c.054687 16.015625 6.855468 31.414062 18.675781 42.265625l14.226563 12.957031c3.136718 2.855469 7.988281 2.628906 10.84375-.503906 2.851562-3.136719 2.625-7.988281-.507813-10.84375l-14.203125-12.9375c-8.660156-7.945312-13.644531-19.242188-13.683594-30.988281l-.09375-30.140625c0-.054688 0-.109375-.003906-.164063-.414062-17.265625-7.085938-33.769531-18.789062-46.472656-.21875-.238281-.453126-.464844-.703126-.675781l-104.222656-87.671875c-7.203125-6.0625-17.65625-5.609375-24.3125 1.046875-7.019531 7.019531-7.019531 18.4375 0 25.453125l79.507813 79.511719c1.875 1.875 1.875 4.925781 0 6.800781l-3.917969 3.914062-88.613281-88.609375c-2.996094-3-7.855469-3-10.851563 0-2.996094 2.996094-2.996094 7.855469 0 10.851563l88.613282 88.613281-5.742188 5.738281-88.613281-88.609375c-2.996094-2.996094-7.855469-2.996094-10.851563 0-3 2.996094-3 7.855469 0 10.851563l88.609375 88.613281-3.914062 3.917969c-1.875 1.875-4.925781 1.875-6.800781 0l-79.511719-79.507813c-3.398438-3.398437-7.917969-5.273437-12.726563-5.273437s-9.328125 1.875-12.726562 5.273437c-6.65625 6.65625-7.105469 17.109375-1.046875 24.316406l87.675781 104.21875c.207031.25.433594.484376.671875.703126zm0 0"
                          fill="#2a2a2a"
                          data-original="#000000"
                          className=""
                        ></path>
                      </g>
                    </svg>
                    <span>&nbsp;&nbsp;Serves: {recipe.servings}</span>
                  </div>
                  <div className="kcal">
                    <AiOutlineFire />
                    <span>&nbsp;Kcal: 453</span>
                  </div>
                </div>
                {/* <!--         <hr> --> */}
                <Link to={"/recipe/" + recipe.id}>
                  <h1>{recipe.title}</h1>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                <Link
                  className="btn-underline btn-clr"
                  to={"/recipe/" + recipe.id}
                >
                  Read more
                </Link>
                {/* <button className="btn-underline btn-clr">Read more</button> */}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
