import React from "react";

function App() {
  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col-lg-4">
          <div className="card mt-4 bg-dark">
            <div className="card-body d-flex justify-content-between">
              <div className="word">
                <p id="text" className="t1">
                  {" "}
                  <span className="d-block">سبحان الله </span> SubhanAllah{" "}
                  <span className="d-block">সুবহানাল্লাহ্‌ </span>{" "}
                </p>
              </div>
              <div className="count">
                <p id="counter1" className="number-count">
                  0
                </p>
              </div>
            </div>
            <div className="card-footer">
              {" "}
              <button
                className="btn btn-danger text-center w-100"
                onClick="myFunction1()"
              >
                Start Count
              </button>{" "}
            </div>
            <div className="card-footer text-center ortho p-3">
              {" "}
              সব গৌরব একমাত্র আল্লাহর{" "}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mt-4 bg-dark">
            <div className="card-body d-flex justify-content-between">
              <div className="word">
                <p id="text" className="t2">
                  {" "}
                  <span className="display: block">الحمد لله </span>{" "}
                  Alhamdulillah{" "}
                  <span className="display: block">আলহামদুলিল্লাহ্‌ </span>{" "}
                </p>
              </div>
              <div className="count">
                <p id="counter2" className="number-count">
                  0
                </p>
              </div>
            </div>
            <div className="card-footer">
              {" "}
              <button
                className="btn btn-danger text-center w-100"
                onClick="myFunction2()"
              >
                Start Count
              </button>{" "}
            </div>
            <div className="card-footer p-3 text-center ortho">
              সকল প্রশংসা মহান আল্লাহ্‌ তায়ালার জন্য
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mt-4 bg-dark">
            <div className="card-body d-flex justify-content-between">
              <div className="word">
                <p id="text" className="t3">
                  {" "}
                  <span className="display: block"> الله أكبر </span>Allah Hu
                  Akbar <span className="display: block">আল্লহু আকবর </span>{" "}
                </p>
              </div>
              <div className="count">
                <p id="counter3" className="number-count">
                  0
                </p>
              </div>
            </div>
            <div className="card-footer">
              {" "}
              <button
                className="btn btn-danger text-center w-100"
                onClick="myFunction3()"
              >
                Start Count
              </button>{" "}
            </div>
            <div className="card-footer p-3 text-center ortho">
              আল্লাহ্‌ মহান
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
