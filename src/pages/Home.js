import { Accord } from "../components/Accord";
import styles from "./Home.module.scss";
import { data } from "../utils/data";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>React Interview Questions and Answers</h1>
      {data.map((item) => {
        return <Accord key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Home;
