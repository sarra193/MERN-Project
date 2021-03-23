import React from 'react'
import './ErrorModall.css'

function ErrorModal({ errors }) {
      console.log(errors)
      return (
            <div >
                  
                  {/*     <div className="containers d-flex justify-content-center">
          <div className="row">
            <div className="col-md-12"> <button type="button" className="btn btn-primary m-3" data-toggle="modal" data-target="#exampleModal"> Launch discount modal </button> </div>
          </div>
        </div> */} {/* Launch Modal */}
                  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                    <div className="modal-header">
                                          <h5 className="modal-title text-center" id="exampleModalLabel">Errors</h5> <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                                    </div>
                                    <div className="modal-body">
                                          <h3>{errors.map((error) => <ul><li>{error.msg}</li></ul>)}</h3>
                                          <button type="button" className="btn btn-custom" data-dismiss="modal" aria-label="Close">Get Now</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default ErrorModal
