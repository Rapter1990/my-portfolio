import {
    AssignmentOutlined,
    WebOutlined,
  } from "@material-ui/icons";
  import ContentPasteIcon from '@mui/icons-material/ContentPaste';
  import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
  import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
  import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';

var ServiceData = {
    services: [
        {
          title: "Service 1",
          description: " Service 1 Information",
          icon: <WebOutlined />,
        },
        {
          title: "Service 2",
          description:
            "Service 2 Information",
          icon: <AssignmentOutlined />,
        },
        {
          title: "Service 3",
          description: "Service 3 Information",
          icon: <DataObjectOutlinedIcon />,
        },
        {
          title: "Service 4",
          description: "Service 4 Information",
          icon: <CloudDownloadOutlinedIcon />,
        },
        {
          title: "Service 5",
          description: "Service 5 Information",
          icon: <StorageOutlinedIcon />,
        },
        {
          title: "Service 6",
          description: "Service 6 Information",
          icon: <ContentPasteIcon />,
        },
        {
          title: "Service 7",
          description: "Service 7 Information",
          icon: <CloudDownloadOutlinedIcon />,
        },
        {
          title: "Service 8",
          description: "Service 8 Information",
          icon: <StorageOutlinedIcon />,
        },
        {
          title: "Service 9",
          description: "Service 9 Information",
          icon: <ContentPasteIcon />,
        }
    ]
}

export default ServiceData;