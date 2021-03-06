import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import { Tab, Row, Nav, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ShowTime() {
  const { listCinema } = useSelector((state) => state.cinemaReducer);
  const { listCinemaDetail } = useSelector((state) => state.cinemaReducer);
  const history = useHistory();
  const keyDefault = listCinema[0]?.maHeThongRap;
  const {user} = useSelector(state => state.userReducer);
  const [key, setKey] = useState(keyDefault);
  const renderButtonTime = (showTimes) => {
    return showTimes.map((item, index) => {
      if (item.ngayChieuGioChieu.substring(0, 10) !== "2019-01-01") {
        return 
      }
      let time = item.ngayChieuGioChieu.substring(11, 16);
      return (
        <button
          onClick={() => {
            if(user === null){
              history.push("/login");
            }else{
            window.open(`/checkout/${item.maLichChieu}`, "_blank");}
          }}
          key={index}
          className="btn btn-time"
        >
          {time}
        </button>
      );
    });
  };

  const renderLogo = (logo) => {
    return (
      <img alt={logo} style={{ width: "50px", height: "50px" }} src={logo} />
    );
  };

  const renderShowtime = (listFilm) => {
    return listFilm.map((filmItem, index) => {
      return (
        <div className="mt-3" key={index}>
          <div className="d-flex align-items-center">
            <img
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "./img/loading.png";
              }}
              style={{ width: "70px", height: "70px", margin: "0 10px 0 20px" }}
              src={filmItem.hinhAnh}
              alt={filmItem.hinhAnh}
            />
            <div className="d-flex flex-column">
              <div className="d-flex align-items-end">
                <button
                  style={{ padding: "1px 3px" }}
                  className="btn btn-success "
                >
                  C16
                </button>

                <p
                  style={{
                    fontWeight: "bold",
                    marginBottom: 0,
                    marginLeft: "5px",
                  }}
                >
                  {filmItem.tenPhim}
                </p>
              </div>
              <p style={{ margin: 0, fontSize: "12px", color: "#9b9b9b" }}>
                100 phút - TIX 6.2 - IMDb 7
              </p>
            </div>
          </div>

          {renderButtonTime(filmItem.lstLichChieuTheoPhim)}
        </div>
      );
    });
  };

  const renderTabpane = (maHeThongRap) => {
    return listCinemaDetail.map((cinema) => {
      let renderTabpane = [];
      if (cinema.maHeThongRap === maHeThongRap) {
        let render = "";
        cinema.lstCumRap.map((cinemaDetail, index) => {
          render = (
            <Tab.Pane key={index} eventKey={`${cinema.maHeThongRap}-${index}`}>
              {renderShowtime(cinemaDetail.danhSachPhim)}
            </Tab.Pane>
          );
          renderTabpane.push(render);
        });
      }
      return renderTabpane;
    });
  };

  const renderCinemaDetail = (maHeThongRap, logo) => {
    return listCinemaDetail.map((cinema) => {
      let renderAddress = [];
      if (cinema.maHeThongRap === maHeThongRap) {
        let render = "";

        cinema.lstCumRap.map((cinemaDetail, index) => {
          render = (
            <Nav.Item key={index}>
              <Nav.Link eventKey={`${cinema.maHeThongRap}-${index}`}>
                <div className="card">
                  <img
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                    src={logo}
                    alt={logo}
                  />
                  <div className="card-body px-0">
                    <h4 className="card-title">{cinemaDetail.tenCumRap}</h4>
                    <p className="card-text">{cinemaDetail.diaChi}</p>
                  </div>
                </div>
              </Nav.Link>
            </Nav.Item>
          );

          renderAddress.push(render);
        });
      }
      return renderAddress;
    });
  };

  const renderCinema = () => {
    return listCinema.map((item, index) => {
      return (
        <Tab
          key={index}
          eventKey={item.maHeThongRap}
          title={renderLogo(item.logo)}
        >
          <Tab.Container defaultActiveKey={`${item.maHeThongRap}-0`}>
            <Row className="m-0">
              <Col className="tab-modify" sm={5}>
                <Nav variant="pills" className="flex-column">
                  {renderCinemaDetail(item.maHeThongRap, item.logo)}
                </Nav>
              </Col>
              <Col style={{ borderLeft: "none" }} className="tab-modify" sm={7}>
                <Tab.Content>{renderTabpane(item.maHeThongRap)}</Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Tab>
      );
    });
  };

  return (
    <div className="showstime" id="showTime">
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        {renderCinema()}
      </Tabs>
    </div>
  );
}
