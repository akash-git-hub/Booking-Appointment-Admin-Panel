import { useState } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { updateSessionDetail } from '../networking/NetworkCall';
import Loder from './Loder';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


function DialogModal({ id, notes }) {
    const [loading, setLoading] = useState(false);
    const preData = notes;
    const [show, setShow] = useState(false);
    const [data, setData] = useState(notes)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputHandler = (e) => {
        setData(e.target.value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (data == "") {
            setData(preData);
            Swal.fire({
                icon: "error",
                text: "Plaese Enter Notes",
            });
            return;
        }

        setLoading(true);

        const uData = { notes: data };
        const res = await updateSessionDetail(id, uData);

        if (res.success) {
            setLoading(false);
            Swal.fire({
                title: res.message,
                icon: "success"
            });
            setShow(false);
        } else {
            setLoading(false);
            Swal.fire({
                icon: "error",
                text: res.message,
            });
        }
        setLoading(false);
    }



    return (
        <>
            <Loder loder={loading} />
            <ToastContainer />
            <Button variant="primary" onClick={handleShow}>
                {notes != "" ? "View" : "Add"}
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Body>
                    <FloatingLabel controlId="floatingTextarea2">
                        <h3>Notes</h3>
                        <Form.Control
                            as="textarea"
                            value={data}
                            onChange={inputHandler}
                            placeholder="Write notes"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSubmitHandler}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DialogModal;