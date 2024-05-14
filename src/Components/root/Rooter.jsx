import React, { useState, useEffect } from "react";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../Body/Most_Popular/store";

const Rooter = () => {
  const [Menu, SetMenu] = useState([]);
  const [Customer, SetCustomer] = useState([]);
  const [Slider, SetSlider] = useState([]);
  const [Slider_section1, Set_slider_section1] = useState([]);
  const [Slider_section2, Set_slider_section2] = useState([]);
  const [Slider_section3, Set_slider_section3] = useState([]);
  const [Most_Popular_series, Set_Most_Popular_series] = useState([]);
  const [Most_Popular_Movies, Set_Most_Popular_Movies] = useState([]);
  const [section1, Set_section1] = useState([]);
  const [section2, Set_section2] = useState([]);
  const [Free_content_data, Set_Free_content] = useState([]);
  const [Child_Content, Set_Child_Filimo] = useState(null);
  const [Online_Cinema_title, Set_online_cinema_title] = useState([]);
  const [Online_Cinema, Set_online_cinema] = useState([]);
  const [FAQ_data, set_FAQ] = useState([]);
  const [Advertise_Content, Set_Advertise] = useState([]);
  const [Comment, Set_comments] = useState([]);
  const [Footer_data, Set_Footer_Data] = useState([]);
  const [dataReceived, setDataReceived] = useState(false);

  const fetch_menu = async () => {
    try {
      const res = await axios.get(
        "https://mohamad-hk.github.io/final-project-react-db/db.json"
      );
      const res_mock_Api_online_cinema = await axios.get(
        "https://662e624da7dda1fa378ccdf2.mockapi.io/online_cinema"
      );
      const res_mock_Api_free_content = await axios.get(
        "https://662e624da7dda1fa378ccdf2.mockapi.io/free-content"
      );
      const result = res.data;
      SetMenu(result.header);
      SetCustomer(result.Customer);
      SetSlider(result.sliders);
      Set_slider_section1(result.sliders_section1);
      Set_slider_section2(result.sliders_section2);
      Set_slider_section3(result.sliders_section3);
      Set_Most_Popular_series(result.Most_popular_series);
      Set_Most_Popular_Movies(result.Most_popular_movies);
      Set_section1(result.How_to_work_section1);
      Set_section2(result.How_to_work_section2);
      Set_Free_content(res_mock_Api_free_content.data);
      Set_Child_Filimo(result.Child_Filimo);
      Set_online_cinema_title(result.onlline_cinema_title);
      Set_online_cinema(res_mock_Api_online_cinema.data);
      Set_Advertise(result.advertise);
      Set_comments(result.comments);
      Set_Footer_Data(result.footer);
      set_FAQ(result.FAQ);
      setTimeout(() => {
        setDataReceived(true);
      }, 1000);
    } catch (error) {
      console.error("Error fetching", error);
    }
  };
  useEffect(() => {
    fetch_menu();
  }, []);

  return (
    <>
      <MyContext.Provider value={{ Menu: Menu, Customer: Customer }}>
        <Header />
      </MyContext.Provider>
      <Provider store={store}>
        <MyContext_body.Provider
          value={[
            Slider,
            Slider_section1,
            Slider_section2,
            Slider_section3,
            Most_Popular_series,
            Most_Popular_Movies,
            section1,
            section2,
            Free_content_data,
            Child_Content,
            Online_Cinema_title,
            Online_Cinema,
            FAQ_data,
            Advertise_Content,
            Comment,
          ]}
        >
          {dataReceived && <Body />}
        </MyContext_body.Provider>
      </Provider>
      <MyContext_footer.Provider value={Footer_data}>
        <Footer />
      </MyContext_footer.Provider>
    </>
  );
};
export const MyContext = React.createContext();
export const MyContext_body = React.createContext();
export const MyContext_footer = React.createContext();

export default Rooter;
