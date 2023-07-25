import React from 'react'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div classNameName='single'>
      <div classNameName="content">
        <img src="https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-22.png" alt="" />
        <div classNameName="user">
          <img src="https://digitalsynopsis.com/wp-content/uploads/2019/08/beautiful-illustrations-design-inspiration-22.png" alt="" />
          <div classNameName="info">
            <span>Yagafarov</span>
            <p>2 kun oldin</p>
          </div>
          <div classNameName="edit">
            <Link to={'/write?edit=2'} classNameName='link'>
              <p classNameName='editBtn'>
                Edit
              </p>
            </Link>
            <Link classNameName='link'>
              <p classNameName='deleteBtn'>
                Delete
              </p>
            </Link>
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem magni earum animi odit itaque maxime ipsa perspiciatis veritatis ea, commodi deserunt, beatae voluptatem rerum eligendi, dolores assumenda? Recusandae aperiam nesciunt a, quis possimus sint voluptas inventore amet voluptatibus sapiente tempora sit optio quibusdam tempore sunt dolore eaque corrupti, natus saepe eius nihil ratione asperiores fugit! Quisquam eum sequi perspiciatis dolorum animi dignissimos, in consectetur eligendi harum ipsam error labore et necessitatibus magni blanditiis repudiandae distinctio facilis nostrum dolor ea at beatae possimus amet. Voluptates officiis aut, iste velit eaque quisquam voluptate maiores ex vero beatae reiciendis omnis ratione esse cumque. Autem facere perspiciatis architecto ipsam nobis eos et soluta dolores deserunt fugit modi obcaecati omnis adipisci beatae, delectus facilis tempora qui nisi exercitationem placeat excepturi alias! Quis corporis ut earum consequuntur nemo similique quae facere rerum aut perferendis vero pariatur dignissimos in, voluptas adipisci, ab sunt, sequi laudantium dolorem. Repellat, consequuntur iusto? Assumenda et amet, reiciendis qui harum, sapiente quos quod, officia natus quae optio! Cupiditate voluptatum quis amet cumque eius tenetur, quae, sint, distinctio cum voluptates vero alias asperiores nesciunt quas aliquam aut corrupti quisquam commodi maiores dolores a ex ea aspernatur? Vitae iure quia accusantium ipsam eligendi eos quis assumenda, fuga consequuntur aut! Provident itaque natus, adipisci voluptate aperiam fugit nostrum excepturi accusantium, molestiae libero corrupti maxime reiciendis culpa voluptas repellat nesciunt! Iste quisquam itaque praesentium, atque earum numquam dicta neque ad quidem deleniti similique alias sapiente nemo adipisci quos consequuntur autem quo fuga, facere repudiandae repellendus quas maxime. Velit architecto ipsum voluptate quam quis, quae recusandae sed officia magnam dolores laudantium mollitia qui exercitationem ratione molestiae sunt nulla repudiandae molestias dicta ullam totam. Incidunt officia, praesentium consequuntur a ipsam nemo aperiam atque voluptatibus autem quis cum sapiente, quae, quos quam aliquid molestias soluta quod molestiae corrupti?
        </p>
      </div>
      <div classNameName="menu">m</div>
    </div>
  )
}

export default Single