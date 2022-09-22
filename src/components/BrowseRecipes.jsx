import React, { useState, useEffect } from "react";
import { FaCarrot, FaBacon } from "react-icons/fa";
import { GiFishEggs, GiRawEgg, GiMeat, GiFruitBowl } from "react-icons/gi";
import { NavLink, Link, useParams } from "react-router-dom";
import { BsClock } from "react-icons/bs";

function BrowseRecipes() {
  const [recipes, setRecipes] = useState([]);
  let params = useParams();

  const getRecipes = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${name}&number=12`
    );
    const recipe = await data.json();
    setRecipes(recipe.results);
  };

  useEffect(() => {
    getRecipes(params.type);
  }, [params.type]);

  return (
    <div>
      <div className="browseRecipes">
        <h1 className=" browseRecipes__title">
          Browse Recipes by <span> Category</span>
        </h1>
      </div>
      <section className="browseRecipes grid">
        <NavLink to={"/recipes/vegan"}>
          <article className="browseRecipes-card">
            <div className="browseRecipes-icon vegan">
              <FaCarrot />
            </div>
            <div className="browseRecipes-text">
              <h2>Vegan Recipes</h2>
            </div>
          </article>
        </NavLink>
        <NavLink to={"/recipes/vegetarian"}>
          <article className="browseRecipes-card">
            <div className="browseRecipes-icon vegetarian">
              <GiRawEgg />
            </div>
            <div className="browseRecipes-text">
              <h2>Vegetarian Recipes</h2>
            </div>
          </article>
        </NavLink>
        <NavLink to={"/recipes/pescetarian"}>
          <article className="browseRecipes-card">
            <div className="browseRecipes-icon pescetarian">
              <GiFishEggs />
            </div>
            <div className="browseRecipes-text">
              <h2>Pescetarian Recipes</h2>
            </div>
          </article>
        </NavLink>
        <NavLink to={"/recipes/whole30"}>
          <article className="browseRecipes-card">
            <div className="browseRecipes-icon meat">
              <GiMeat />
            </div>
            <div className="browseRecipes-text">
              <h2>Whole30 Recipes</h2>
            </div>
          </article>
        </NavLink>
        <NavLink to={"/recipes/gluten-free"}>
          <article className="browseRecipes-card">
            <div className="browseRecipes-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                enableBackground="new 0 0 512 512"
                viewBox="0 0 100.92 100.92"
                fill="#ea4b76"
              >
                <g xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M300.5 352.92a50.46 50.46 0 1135.7-14.76 50.33 50.33 0 01-35.7 14.76zm0-95.2a44.75 44.75 0 1031.65 13.09 44.6 44.6 0 00-31.65-13.09z"
                    data-original="#000000"
                    transform="translate(-250.04 -252)"
                  ></path>
                  <path
                    d="M302.25 330.7h-5.81a13.22 13.22 0 01-13.21-13.21v-3.4a2.41 2.41 0 012.41-2.41H289a13.22 13.22 0 0113.21 13.21zm-15-15v1.8a9.21 9.21 0 009.2 9.2h1.8v-1.8a9.21 9.21 0 00-9.2-9.2z"
                    data-original="#000000"
                    transform="translate(-250.04 -252)"
                  ></path>
                  <path
                    d="M302.25 316.71h-5.81a13.21 13.21 0 01-13.21-13.21v-3.39a2.41 2.41 0 012.41-2.41H289a13.21 13.21 0 0113.21 13.21zm-15-15v1.79a9.22 9.22 0 009.2 9.21h1.8v-1.8a9.21 9.21 0 00-9.2-9.2z"
                    data-original="#000000"
                    transform="translate(-250.04 -252)"
                  ></path>
                  <path
                    d="M302.25 302.73h-5.81a13.22 13.22 0 01-13.21-13.21v-3.4a2.41 2.41 0 012.41-2.41H289a13.22 13.22 0 0113.21 13.21zm-15-15v1.8a9.21 9.21 0 009.2 9.2h1.8v-1.8a9.21 9.21 0 00-9.2-9.2zM304 330.7h-5.81v-5.81a13.21 13.21 0 0113.21-13.21h3.39a2.4 2.4 0 012.41 2.41v3.4A13.21 13.21 0 01304 330.7zm-1.8-4h1.8a9.21 9.21 0 009.2-9.2v-1.8h-1.8a9.21 9.21 0 00-9.2 9.2z"
                    data-original="#000000"
                    transform="translate(-250.04 -252)"
                  ></path>
                  <path
                    d="M304 316.71h-5.81v-5.8a13.2 13.2 0 0113.21-13.21h3.39a2.4 2.4 0 012.41 2.41v3.39a13.2 13.2 0 01-13.2 13.21zm-1.8-4h1.8a9.22 9.22 0 009.2-9.21v-1.79h-1.8a9.21 9.21 0 00-9.2 9.2z"
                    data-original="#000000"
                    transform="translate(-250.04 -252)"
                  ></path>
                  <path
                    d="M304 302.73h-5.81v-5.81a13.21 13.21 0 0113.21-13.21h3.76a2 2 0 012 2.05v3.76A13.21 13.21 0 01304 302.73zm-1.8-4h1.8a9.21 9.21 0 009.2-9.2v-1.8h-1.8a9.21 9.21 0 00-9.2 9.2z"
                    data-original="#000000"
                    transform="translate(-250.04 -252)"
                  ></path>
                  <path
                    d="M300.23 294.24L296 290a13.83 13.83 0 010-19.57l2.88-2.88a1.94 1.94 0 012.75 0l2.88 2.88a13.85 13.85 0 010 19.57zm0-22.41l-1.42 1.42a9.86 9.86 0 000 13.91l1.42 1.42 1.43-1.42a9.86 9.86 0 000-13.91z"
                    data-original="#000000"
                    transform="translate(-250.04 -252)"
                  ></path>
                  <path
                    d="M300.29 339.14a2 2 0 01-2-2v-45.73a2 2 0 014 0v45.72a2 2 0 01-2 2.01zM284.28 320.19a13.43 13.43 0 01-.74-3.7l-18.18 18.19a2.07 2.07 0 001.46 3.53 2.11 2.11 0 001.47-.61l16.37-16.37c-.13-.35-.26-.69-.38-1.04zM335.64 267.32a2.07 2.07 0 00-2.93 0l-17.32 17.33c1.13.94 1.37 2.77 1.47 4.12a2.09 2.09 0 000 .25l18.77-18.77a2.07 2.07 0 00.01-2.93z"
                    data-original="#000000"
                    transform="translate(-250.04 -252)"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="browseRecipes-text">
              <h2>Gluten Free Recipes</h2>
            </div>
          </article>
        </NavLink>
        <NavLink to={"/recipes/ketogenic"}>
          <article className="browseRecipes-card">
            <div className="browseRecipes-icon keto">
              <FaBacon />
            </div>
            <div className="browseRecipes-text">
              <h2>Ketogenic Recipes</h2>
            </div>
          </article>
        </NavLink>
        <NavLink to={"/recipes/paleo"}>
          <article className="browseRecipes-card">
            <div className="browseRecipes-icon paleo">
              <GiFruitBowl />
            </div>
            <div className="browseRecipes-text">
              <h2>Paleo Recipes</h2>
            </div>
          </article>
        </NavLink>
      </section>
      <div className="found-recipes">
        {recipes.map((item) => {
          return (
            <div className="recipe-card" key={item.id}>
              <div className="card-image">
                <Link to={"/recipe/" + item.id}>
                  {" "}
                  <img src={item.image} alt="" />
                </Link>
              </div>
              <div className="card-body text-left">
                {/* <div className="info">
                  <div className="time">
                    <BsClock />
                    <span>&nbsp;&nbsp;{item.readyInMinutes} min</span>
                  </div>
                  <div className="serving">
                    <i className="fa-solid fa-utensils"></i>
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
                    <span>&nbsp;&nbsp;Serves: {item.servings}</span>
                  </div>
                </div> */}
                <Link to={"/recipe/" + item.id}>
                  <h1>{item.title}</h1>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BrowseRecipes;
