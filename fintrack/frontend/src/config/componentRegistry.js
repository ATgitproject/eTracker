import TextField from "@/components/controls/TextField/TextField";
import Checkbox from "@/components/controls/Checkbox/Checkbox";
import StepsComponent from "@/components/controls/StepsComponent/StepsComponent";
import LayoutContainer from "@/components/controls/LayoutContainer/LayoutContainer";
import TableComponent from "@/components/controls/TableComponent/TableComponent";
import TilesComponent from "@/components/controls/TilesComponent/TilesComponent";
import PieChartComponent from "@/components/controls/PieChartComponent/PieChartComponent";
import BarChartComponent from "@/components/controls/BarChartComponent/BarChartComponent";
import LineChartComponent from "@/components/controls/LineChartComponent/LineChartComponent";
import ButtonComponent from "@/components/controls/Button/ButtonComponent";
import ToggleComponent from "@/components/controls/toggle/toggleComponent";
import SegmentButtonComponent from "@/components/controls/SegmentButtonComponent/SegmentButtonComponent";
import DatePickerComponent from "@/components/controls/datePickerComponent";

const componentRegistry = {
  textfield: TextField,
  buttonComponent: ButtonComponent,
  toggleComponent: ToggleComponent,
  checkbox: Checkbox,
  stepsComponent: StepsComponent,
  layoutContainer: LayoutContainer,
  tableComponent: TableComponent,
  tilesComponent: TilesComponent,
  pieChartComponent: PieChartComponent,
  barChartComponent: BarChartComponent,
  lineChartComponent: LineChartComponent,
  segmentButtonComponent: SegmentButtonComponent,
  datePickerComponent: DatePickerComponent,
};

export default componentRegistry;
