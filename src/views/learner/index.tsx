import React from 'react';
import styled from 'styled-components';
import "./index.css";
import Descriptive from "./../../components/descriptive";

const Learner = ({ isCourse = false }: { isCourse?: boolean }) => 
  <Descriptive>
      {isCourse ? (
        <CourseWork>
          <CourseWork>
            Multivariable Calculus : MATH53<br />
            Linear Algebra, Differential Equations : MATH54<br />
            Analysis : MATH104<br />
            Linear Algebra : MATH110<br />
            Abstract Algebra : MATH113<br />
            Numerical Analysis : MATH128A<br/>
            Complex Analysis : MATH185<br />
            <br />
            Structure and Interpretation of Programs : CS61A<br />
            Data Structures : CS61B<br />
            Computer Architecture : CS61C<br />
            Discrete Math and Probability : CS70<br />
            User Interfaces : CS160<br />
            Database Systems : CS186<br/>
            Computer Science Theory : CS170<br />
            Artifcial Intelligence : CS188<br />
            Web Design Decal : CS198<br />
            Ruby on Rails Decal : CS198<br />
            Product Management : IEOR186<br />
          </CourseWork>
          <i className="fa fa-arrows-v arrow"/>
      </CourseWork>
      ) : (
        <div>
        To the Lighthouse : Virginia Woolf
        <br />
        <br />
        <br />
        Favorites
        <br />
        My Ántonia : Willa Cather
        <br />
        The Unbearable Lightness of Being : Milan Kundera
        <br />
        Norwegian Wood : Haruki Murakami
      </div>
      )}
  </Descriptive>

const CourseWork = styled.div`
  height: 245px;
  overflow-y: scroll;
`;
export default Learner;
