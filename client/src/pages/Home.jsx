import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "sunt aut facere repellat",
      desc: "quia et suscipit suscipit recusandae conse quuntur expedita et cumreprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      img: "https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-22.png",
    },
    {
      id: 2,
      title: "qui est esse",
      desc: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      img: "https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-22.png",
    },
    {
      id: 3,
      title: "ea molestias quasi exercitat",
      desc: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
      img: "https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-22.png",
    },
    {
      id: 4,
      title: "eum et est occaecati",
      desc: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
      img: "https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-22.png",
    },
    {
      id: 5,
      title: "nesciunt quasrow",
      desc: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
      img: "https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-22.png",
    },
    {
      id: 6,
      title: "nesciunt quas odio",
      desc: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
      img: "https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-22.png",
    }
  ];

  return (
    <div className='home'>
      <figure className="text-center mt-5 pt-5">
        <blockquote className="blockquote">
          <h3>Maqolalar</h3>
        </blockquote>
        <figcaption className="blockquote-footer">
          Tizimdagi eng mashxur <cite title="Source Title">Maqolalar</cite>
        </figcaption>
      </figure>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-3 ">
          {posts.map((post) => (
            <div className="col" key={post.id}  aria-hidden="true">
              <div className="card shadow" aria-hidden="true" >
                <img src={post.img} className="card-img-top p-3 border-rounded " alt="..." />
                <div className="card-body" >
                  <Link className='link' to={`/post/${post.id}`}>
                    <h5 className="card-title">{post.title}</h5>
                  </Link>
                  <p className="card-text">{post.desc}</p>
                  <Link to={`/post/${post.id}`} className="btn btn-primary">
                    Batafsil
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
