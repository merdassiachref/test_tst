import { Button, Image, Input } from "antd";
import moment from "moment";

import { EditOutlined,CheckCircleOutlined } from "@ant-design/icons";

import tstLogo from "./tstLogo.png";
import logoCompany from "./logoCompany.png";
import "./App.css";
import "antd/dist/antd.min.css";

function App() {
  return (
    <div className="App">
      <header className="app_header">
        <Image width={150} height={100} src={tstLogo} />
        <h3>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
        <Image width={150} height={100} src={logoCompany} />
      </header>
      <main>
        <h1>Visualisation en temps réel</h1>
        <div className="value_field">
          <h1>VALEUR 1:</h1>
          <h1>50</h1>
          <Input
            allowClear
            style={{ width: "15%" }}
            defaultValue="50"
            type="number"
          />
          <Button type="danger" icon={<EditOutlined />} size="large">
            Changer
          </Button>
        </div>
        <div className="value_field">
          <h1>VALEUR 2:</h1>
          <h1>53</h1>
          <Input
            allowClear
            style={{ width: "15%" }}
            defaultValue="5"
            type="number"
          />

          <Button type="danger" icon={<EditOutlined />} size="large">
            Changer
          </Button>
        </div>
      </main>
      <footer>
        <h3>*** <CheckCircleOutlined /> Developpé par Tunisian Smart Technologies TST Bizerte ***</h3>
      </footer>
    </div>
  );
}

export default App;
