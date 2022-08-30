import React, { Fragment } from "react";

const Card = (props) => {
  const data = props.data;
  // console.log(props);
  return (
    <Fragment>
      {data.map((item, i) => {
        return (
          <Fragment key={item.id}>
            <div className="col-lg-4">
              <div className="card mt-4 bg-dark">
                <div className="card-body d-flex justify-content-between">
                  <div className="word">
                    <p id="text" className="t1">
                      {" "}
                      <span className="d-block">{item.tittleAR} </span>{" "}
                      {item.tittleEN}{" "}
                      <span className="d-block">{item.tittleBN} </span>{" "}
                    </p>
                  </div>
                  <div className="count">
                    <p id="counter1" className="number-count">
                      {item.count}
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger text-center w-100"
                    onClick={() => props.handleIncrement(i)}
                    disabled={props.isSubmitDisabled}
                  >
                    Start Count
                  </button>
                </div>
                <div className="card-footer text-center ortho p-3">
                  {item.transBN}
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Card;
