import React from 'react'

export default function Footer() {
  return (
    <div><footer className="page-footer bg-dark text-white p-5 pb-0 text-center">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Bootstrap.com</h5>
          <p className="grey-text text-lighten-4">House of cool code snippets, With the increase demand of online House of cool code snippets, With the customers.</p>
        </div>
        <div className="col l4 offset-l1 s12">
          <h5 className="white-text">Help</h5>
          <ul className='list-group list-group-flush list-unstyled'>
            <li><a className="text-white text-lighten-3 " href="#!">Payment</a></li>
            <li><a className="text-white text-lighten-3" href="#!">Shipping</a></li>
            <li><a className="text-white text-lighten-3" href="#!">Cancellation</a></li>
            <li><a className="text-white text-lighten-3" href="#!">Returns</a></li>
          </ul>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Policy</h5>
          <ul  className='list-group list-group-flush list-unstyled'>
            <li><a className="text-white text-lighten-3" href="#!">Return</a></li>
            <li><a className="text-white text-lighten-3" href="#!">Security</a></li>
            <li><a className="text-white text-lighten-3" href="#!">Privacy</a></li>
            <li><a className="text-white text-lighten-3" href="#!">Sitemap</a></li>
          </ul>
        </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Social</h5>
              <ul  className='list-group list-group-flush list-unstyled'>
                <li><a className="text-white text-lighten-3" href="#!">Facebook</a></li>
                <li><a className="text-white text-lighten-3" href="#!">Linkedin</a></li>
                <li><a className="text-white text-lighten-3" href="#!">Google</a></li>
                <li><a className="text-white text-lighten-3" href="#!">Instagram</a></li>
              </ul>
            </div>


      </div>
    </div>
    <div className="footer-copyright pt-5">
      <div className="container">
      &copy; 2024 Copyright BBBootstrap.com 
      <a className="grey-text text-lighten-4 right" href="#!"> House of cool code snippet!</a>
      </div>
    </div>
  </footer>
  </div>
  )
}
