import TextField from "@/components/controls/TextField";
import Checkbox from "@/components/controls/Checkbox";
import StepsComponent from "@/components/controls/StepsComponent";
import LayoutContainer from "@/components/controls/LayoutContainer";
import TableComponent from "@/components/controls/TableComponent/TableComponent";
import TilesComponent from "@/components/controls/TilesComponent";
import PieChartComponent from "@/components/controls/PieChartComponent";
import BarChartComponent from "@/components/controls/BarChartComponent";
import LineChartComponent from "@/components/controls/LineChartComponent";
import ButtonComponent from "@/components/controls/ButtonComponent";
import ToggleComponent from "@/components/controls/ToggleComponent";
import SegmentButtonComponent from "@/components/controls/SegmentButtonComponent";
import DropdownComponent from "@/components/controls/DropdownComponent";
import PhotoUploadComponent from "@/components/controls/PhotoUploadComponent";
import DocumentUploadComponent from "@/components/controls/DocumentUploadComponent";
import IconComponent from "@/components/controls/IconComponent";
import ColorSelectComponent from "@/components/controls/ColorSelectComponent";

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
  dropdownComponent: DropdownComponent,
  photoUploadComponent: PhotoUploadComponent,
  documentUploadComponent: DocumentUploadComponent,
  iconComponent: IconComponent,
  colorSelectComponent: ColorSelectComponent,
};

export default componentRegistry;
