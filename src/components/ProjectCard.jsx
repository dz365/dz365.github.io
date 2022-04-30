import * as React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeIcon from "@mui/icons-material/Code";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-sky-50 rounded-lg">
      <div className="flex px-2">
        <CardHeader title={props.title} subheader={props.languages} />
        <div className="grow"></div>
        <div className="flex items-center">
          {props.link != null ? (
            <IconButton className="w-10 h-10" color="primary">
              <a href={props.link} target="_blank" rel="noreferrer">
                <CodeIcon />
              </a>
            </IconButton>
          ) : (
            false
          )}
        </div>
      </div>

      <CardContent>
        {!expanded ? (
          <Typography variant="body1">{props.summary}</Typography>
        ) : (
          false
        )}

        <Collapse in={expanded} timeout="auto">
          {props.image != null ? (
            <img src={props.image} alt="" className="rounded-lg mb-4" />
          ) : (
            false
          )}
          {props.body}
        </Collapse>
        <div className="flex justify-center">
          <ExpandMore expand={expanded} onClick={handleExpandClick}>
            <ExpandMoreIcon />
          </ExpandMore>
        </div>
      </CardContent>
    </div>
  );
}
