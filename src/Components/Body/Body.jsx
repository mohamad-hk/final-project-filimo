import { useContext } from "react";
import How_To_Work_First_Section from "./How_To_Work_First_Secction/How_To_Work_First_Section";
import How_To_Work_Second_Section from "./How_To_Work_Second_Secction/How_To_Work_Second_Section";
import Sliders from "./Slider/Slider";
import { MyContext_body } from "../root/Rooter";
import Child_Filimo from "./Child_Filimo/Child_Filimo";
import Online_Cinema_Filimo from "./Online_Cinema_Filimo/Online_Cinema_Filimo";
import FAQ from "./FAQ/FAQ";
import Advertise from "./Advertise/Advertise";
import Comments from "./Comments/Comments";
import Free_Content from "./Free_Content/Free_content";
import Most_Popular from "./Most_Popular/Most_Popular";

const Body = () => {
  const [
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
  ] = useContext(MyContext_body);

  return (
    <>
      <Sliders
        Slider={Slider}
        Slider_section1={Slider_section1}
        Slider_section2={Slider_section2}
        Slider_section3={Slider_section3}
      />
      <Most_Popular series={Most_Popular_series} movies={Most_Popular_Movies} />
      <How_To_Work_First_Section section1={section1} />
      <How_To_Work_Second_Section section2={section2} />

      <Free_Content content={Free_content_data} />
      <Child_Filimo Child_Content={Child_Content} />
      <Online_Cinema_Filimo
        online_cinema_content={Online_Cinema}
        Cinema_title={Online_Cinema_title}
      />
      <Comments Comment={Comment} />
      <FAQ FAQ={FAQ_data} />
      <Advertise content={Advertise_Content} />
    </>
  );
};

export default Body;
