import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "./styles";
export default function Products() {
  const { _id } = useParams();
  // Fetching data from backend
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/data/${_id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [_id]);

  return (
    <div>
          
      <Container cw={"100%"} ch={"60vh"} cgp={'30px'} >
        <Container
          cw={"52%"}
          ch={"60vh"}
          cb={"1px solid black"}
          cml={"20px"}
          cbgc={"aqua"}
          cjc={"center"}
          cai={"center"}
        >
          img
        </Container>
        <Container cmt={"20px"} cfd={"column"}>
          
          {product ? (
            <Container>
            <Container cfd={'column'}>
              <h1>{product.title}</h1>
              <Container cw={'500px'}>
                <p>{product.description}</p>
              </Container>
              <Container>
              <h2>{product.price}</h2>
              </Container>
              </Container>
              </Container>
          ) : (
            <p>Loading...</p>
          )}
        </Container>
      </Container>
    </div>
  );
}
