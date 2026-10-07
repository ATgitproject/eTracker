import TextField from "../components/controls/TextField/TextField";
import Button from "../components/controls/Button/Button";
import Checkbox from "../components/controls/Checkbox/Checkbox";
import StepsComponent from "../components/controls/StepsComponent/StepsComponent";
import LayoutContainer from "../components/controls/LayoutContainer/LayoutContainer";
import TableComponent from "../components/controls/TableComponent/TableComponent";
import TilesComponent from "../components/controls/TilesComponent/TilesComponent";
import PieChartComponent from "../components/controls/PieChartComponent/PieChartComponent";
import BarChartComponent from "../components/controls/BarChartComponent/BarChartComponent";
import LineChartComponent from "../components/controls/LineChartComponent/LineChartComponent";

const componentRegistry = {
  textfield: TextField,
  button: Button,
  checkbox: Checkbox,
  stepsComponent: StepsComponent,
  layoutContainer: LayoutContainer,
  tableComponent: TableComponent,
  tilesComponent: TilesComponent,
  pieChartComponent: PieChartComponent,
  barChartComponent: BarChartComponent,
  lineChartComponent: LineChartComponent,
};

export default componentRegistry;
