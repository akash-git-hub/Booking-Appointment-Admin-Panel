import React from 'react'

export default function ImgModal({ image, ModalImgId }) {
    return (
        <>
            <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target={`#M${ModalImgId}`}
            >
                <img
                    className="img-fluid prescriptionImage"
                    src={image}
                    alt=""
                />
            </button >
            <div
                className="modal fade"
                id={`M${ModalImgId}`}
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title align-item-center" id="exampleModalLongTitle">
                                <strong>PRESCRIPTION</strong>
                            </h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body"> <img
                            className="img-fluid"
                            src={image}
                            alt=""
                        /></div>
                    </div>
                </div>
            </div>
        </>

    )
}
