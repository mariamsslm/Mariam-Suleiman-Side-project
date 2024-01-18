import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import {Link} from 'react-router-dom'

const MemeCard = ({data}) => {
  return (
    <Link to={`/meme/${data.id}`}>
    <Card sx={{ width: 400, height:400,margin:"16px" ,boxShadow: "0 0 10px rgba(0,0,0,0.2)",border: "5px solid #F5D431"}}>
      <CardMedia
        component="img"
        alt="Meme Image"
        height="250"
        width="200"
        src={data.imageURL}
      />
      <CardContent sx={{paddingTop:"3rem"}}>
      <Typography variant="body1" color="textSecondary" align="center" sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "100%",
         
            borderBottom: "2px solid #F5D431",
            paddingBottom: "6px",
            marginBottom: "8px",
            color: "#000000", 
          }}
        >{data.textCaption}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between",paddingTop:"20px" }}>
          <Typography variant="body2" color="#000000" sx={{ lineHeight: '2.2',textDecoration:"none"}}>
            {data.User.username}
          </Typography>
          <Typography variant="body2" color="#000000" sx={{ lineHeight: '2.2'}}>
             {data.createdAt.split("T")[0]}
          </Typography>
        </Box>
      </CardContent>
    </Card>
    </Link>
  );
 
};

export default MemeCard;







// import React from "react";
// import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

// const MemeCard = ({ imageUrl, textCaption, creatorName, createTime }) => {
//   return (
//     <Card sx={{ maxWidth: 400,height:400 ,margin: "16px",borderLeft: "1px solid #018CDD",
//     borderBottom: "3px solid #018CDD",
//     borderTop: "1.5px solid #018CDD",
//     borderRight: "2px solid #018CDD" }}>
       
//       <CardMedia
//       component="img"
//       alt="Meme Image"
//       height="300"
//       src="https://i.pinimg.com/236x/09/46/cb/0946cb6bf7ba97bd496adbc6f340f1ba.jpg"
//       style={{border: "2px solid #F5D431"}}
//     />
//       <CardContent>
//         <Typography variant="body1" color="textSecondary" align="center" sx={{
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             whiteSpace: "nowrap",
//             width: "100%",
//             height:"30px",
//             borderLeft: "1px solid #018CDD",
//             borderBottom: "3px solid #018CDD",
//             borderTop: "1.5px solid #018CDD",
//             borderRight: "2px solid #018CDD",
//             color:"#018CDD",
//             backgroundColor:"#F5D431"
           

//             // backgroundColor:"#018CDD",
//              // Adjust the width if needed
//           }}>
//           TextCaptionjsjkdhd hskdjh jsgvhydekgeyegf dteugfu
//         </Typography>
//         <Box sx={{ display: "flex", justifyContent: "space-between", paddingTop: "20px", }}>
//           <Typography variant="caption" color="textSecondary"sx={{color:"#018CDD",borderLeft: "1px solid #018CDD",
//             borderBottom: "3px solid #018CDD",
//             borderTop: "1.5px solid #018CDD",
//             borderRight: "2px solid #018CDD",
//             backgroundColor:"#F5D431"}}>
//             Creator:Mariam
//           </Typography>
//           <Typography variant="caption" color="textSecondary" sx={{color:"#018CDD",borderLeft: "1px solid #018CDD",
//             borderBottom: "3px solid #018CDD",
//             borderTop: "1.5px solid #018CDD",
//             borderRight: "2px solid #018CDD",
//             backgroundColor:"#F5D431"}}>
//             Created at: 12/2/2010
//           </Typography>
//         </Box>
//       </CardContent>
    
//     </Card>
//   );
// };

// export default MemeCard;
