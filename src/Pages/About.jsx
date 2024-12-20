import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  const data = [
    { id: 1071, name: "Nikita", post: "Developer", salary: 50000.0 },
    { id: 1401, name: "Alex", post: "Designer", salary: 15000.0 },
    { id: 1201, name: "John", post: "Developer", salary: 20000.0 },
    { id: 401, name: "Emma", post: "Manager", salary: 22000.0 },
    { id: 103, name: "Sophia", post: "Tester", salary: 23000.0 },
    { id: 102, name: "Liam", post: "Programmer", salary: 25000.0 },
    { id: 11, name: "Olivia", post: "Developer", salary: 45000.0 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = data.filter(
      (emp) =>
        emp.name.toLowerCase().includes(lowerSearchTerm) ||
        emp.post.toLowerCase().includes(lowerSearchTerm) ||
        emp.salary.toString().includes(lowerSearchTerm)
    );
    setFilteredData(filtered);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Header />
      <div className="table-responsive">
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={handleKeyUp}
          className="form-control mb-3"
        />
        <button id="searchButton" onClick={handleSearch} className="btn btn-primary mb-3">
          Search
        </button>
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">POST</th>
              <th scope="col">SALARY</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.post}</td>
                <td>{emp.salary.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        minima, dignissimos repellendus eum quibusdam cumque cupiditate vero
        voluptatem culpa blanditiis possimus maiores non dolore rerum nemo
        dicta perspiciatis, nisi est. Accusamus dolorem minus ipsam. Illum ab
        eius ratione mollitia perferendis? Modi, mollitia! Aliquam sunt cum a
        fugit molestias sequi repudiandae quia amet non. Vitae obcaecati
        numquam perspiciatis quae ullam quis quos repudiandae? Sunt magnam
        rerum est. Illum dolor eaque, ea sequi accusamus deleniti. Sed iure,
        impedit laudantium exercitationem aliquid sapiente? Rem est modi
        soluta? Tempora, ipsam nesciunt atque aspernatur magnam expedita
        aliquam vel, inventore beatae architecto quam quidem velit
        necessitatibus!
      </p>
      <Footer />
    </div>
  );
};

export default About;
