import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home">
      <article className="home-article">
        <h1 className="title">
          So, you want to travel to <br/><span className="title-em">Space</span>
        </h1>
        <p className="paragraph">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <div>
        <Link to="/destination">
      <button className="explore-btn">
          Explore
      </button>
        </Link>
      </div>
        
    </section>
  );
};
