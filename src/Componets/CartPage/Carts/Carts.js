import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Carts = (props) => {
  let subLotal = 0;
  let deliveryFee = 0;
  let tax = (12 / 100) * subLotal;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div>
              <h3>Edit Delivery Details</h3>
              <hr />
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Enter Your Name"
                  className="mb-3 w-75"
                >
                  <Form.Control {...register("name", { required: true })} />
                </FloatingLabel>
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
                <FloatingLabel
                  controlId="floatingInput"
                  label="Enter Your Email address"
                  className="mb-3 mt-2 w-75"
                >
                  <Form.Control
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
                <FloatingLabel
                  controlId="floatingInput"
                  label="Enter Your  address"
                  className="mb-3 mt-2 w-75"
                >
                  <Form.Control
                    {...register("address", { required: true })}
                    type="address"
                    placeholder="Enter Your Adress"
                  />
                </FloatingLabel>
                {errors.address && (
                  <span className="text-danger">This field is required</span>
                )}
                <FloatingLabel
                  controlId="floatingInput"
                  label="Enter Your Phone Number"
                  className="mb-3 mt-2 w-75"
                >
                  <Form.Control
                    {...register("phone", { required: true })}
                    type="tel"
                    placeholder="Enter Your Phone Number"
                  />
                </FloatingLabel>
                {errors.phone && (
                  <span className="text-danger">This field is required</span>
                )}
                <br />
              </Form>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="py-4">
              <p>
                From
                <span className="fw-bold">Chattogram Plaza Restaura Gpr</span>
              </p>
              <p>Arriving in 20-30min</p>
              <p>107 Rd No 8</p>
              {props.data.map((data) => {
                return (
                  <>
                    {((deliveryFee = 5), (subLotal = subLotal + data.price))}

                    <div className="d-flex align-items-center p-3 mt-4 shadow-lg rounded-lg">
                      <div className="d-flex align-items-center">
                        <img className="w-25" src={data?.image} alt="" />
                        <div className="text-center">
                          <h5 className="ms-3">{data?.name}</h5>
                          <h4 className="text-danger fw-bolder">
                            ${data?.price}
                          </h4>
                        </div>
                      </div>
                      <div className="d-flex">
                        <h4>
                          <i className="fas fa-plus cursor-pointor"></i>
                        </h4>
                        <h4 className="bg-light mx-2">1</h4>
                        <h4>
                          <i className="fas fa-minus cursor-pointor"></i>
                        </h4>
                      </div>
                    </div>
                  </>
                );
              })}
              <div className="py-5">
                <div className="d-flex justify-content-between">
                  <h5>Total :</h5> <h5>$ {subLotal}</h5>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <h5> Delivery Fee :</h5> <h5>${deliveryFee}</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5> Tax :</h5> <h5>{tax}</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5> Grand Total : </h5>
                    <h5>{tax + subLotal + deliveryFee}</h5>
                  </div>
                </div>
              </div>
              <div>
                <button className="btn btn-outline-danger d-block w-100">
                  Palace Order
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Carts;
