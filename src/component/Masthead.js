import React from 'react'

export const Masthead = () => {
  return (
    <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase" >My Profile</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">
                            I'm Dev
                        </h2>
                        <a className="btn btn-primary" href="#about">
                            Let Go!!
                        </a>
                    </div>
                </div>
            </div>
        </header>
  )
}
export default Masthead