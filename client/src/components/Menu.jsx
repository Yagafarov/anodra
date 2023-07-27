import React from 'react'

const Menu = () => {
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
    <div className="cmenu d-flex flex-column">
        <h1 className='text-center text-primary '>Boshqa postlar haqida</h1>
        {
            posts.map(post=>(
                <div className="post d-flex flex-column shadow p-3 rounded" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button className='btn btn-outline-primary'>Batafsil o'qish</button>
                </div>
            ))
        }
    </div>
  )
}

export default Menu