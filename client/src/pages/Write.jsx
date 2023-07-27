import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className='container write py-5 mt-5 d-flex'>
      <div className="content d-flex flex-column">
        <input type="text" name="title" id="title" placeholder='Mavzu' className='form-control' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu d-flex flex-column">
        <div className="item rounded">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input type="file" name="file" id="file" className='d-none' accept="image/*" />
          <label htmlFor="file" className='file'>Rasm yuklash</label>
          <div class="d-flex justify-content-between mt-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary">Qoralama sifatida saqlang</button>
            <button type="button" class="btn btn-primary">Yuklash</button>
          </div>
        </div>
        <div className="item rounded">
          <h1>Kategoriya</h1>
          <div className="cat">
            <input type="radio" name="cat" id="art" value="art" />
            <label htmlFor="art">Rasm</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="science" value="science" />
            <label htmlFor="science">Bilim</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="tech" value="tech" />
            <label htmlFor="tech">Texnologiya</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="cinema" value="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="design" value="design" />
            <label htmlFor="design">Dezayn</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="food" value="food" />
            <label htmlFor="food">Taom</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write