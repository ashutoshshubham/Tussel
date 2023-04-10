import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      {/* <div class="row d-flex flex-row-reverse">

        <div className="col-sm-6 col-md-6 ">1</div>
        <div className="col-sm-6 col-md-6 ">2</div>
        
      </div> */}
      <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191113185616/Best-Way-To-Start-With-Competitive-Programming-GeeksforGeeks-CP-Live-Course.png" alt="" className='w-100' />

      <div className="card">
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
            className="img-fluid"
          />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            />
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </p>
          <a href="#!" className="btn btn-primary">
            Button
          </a>
        </div>
      </div>


    </div>
  )
}

export default Home