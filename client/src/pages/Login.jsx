import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div classNameName='container'>
      <div className="form_container">
        <form className='form'>
          <span className='w-100 d-flex  justify-content-end'>
            <Link to={'/'}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </span>
          <h3 className='text-center mt-4'>Kirish</h3>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" aria-describedby="userelp" />
            <div id="userelp" class="form-text">O'zingizni shaxsiy useringizni kiriting</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Parol</label>
            <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby='userPass' />
            <div id="userPass" class="form-text">O'zingizni shaxsiy parolingizni kiriting</div>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Eslab qolish</label>
          </div>
          <button type="submit" class="btn btn-primary w-100">Kirish</button>
          <p className='my-2' style={{ fontSize: '14px' }}>Hisobingiz yo'qmi? <Link to={'/register'}>Ro'yxatdan o'tish</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login