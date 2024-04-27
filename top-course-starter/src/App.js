import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards"; // Assuming Cards component is imported
import Spinner from "./components/Spinner"; // Assuming Spinner component is imported
import {toast} from "react-toastify";
const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <Navbar />
      <Filter filterData={filterData}  category = {category} setCategory = {setCategory}/>
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {loading ? <Spinner /> : <Cards courses={courses} category = {category} />}
      </div>
    </div>
  );
};

export default App;
