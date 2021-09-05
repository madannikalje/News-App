import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme =>( {
    // container: {
    //     width: '100vw',
    //     height: '100vh',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignSelf: 'center'

    // },
    // root: {
    //     width: '100vw',
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',

    //     paddingLeft:"5vw"
    // },
    // card: {
        
        
    // },
    // paper: {
    //     marginTop:"3rem",
    //     padding: "1rem",
    //     textAlign: 'center',
    //     color:"white",
    //     width:"27rem",
    //     height:"27rem",
    //     background: "rgba( 255, 255, 255, 0.1 )",
    //     boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    //     backdropFilter: "blur( 3px )",
    //     WebkitBackdropFilter: "blur( 3px )",
    //     borderRadius: "10px",
    //     border: "1px solid rgba( 255, 255, 255, 0.18 )"
    //   },
    root: {
        width: "70%",

        marginTop: "2rem",
        background: "rgba( 255, 255, 255, 0.1 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 3px )",
        WebkitBackdropFilter: "blur( 3px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )"
      },
      media: {
        height: 290,
      },
      container:{
          display: "flex",
          flexDirection: "row",
          spacing: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
          background: "url('./pexels-jiawei-cui-2310835.jpg')",
          backgroundSize:"100vw 100vh",
          "background-repeat":"no-repeat",
          backgroundPosition:"relative",
          "background-attachment": "fixed",
      },
      text:{
          color:"white",
          fontFamily:"Quicksand"
      },
      btn:{
        color:"white",
      },
}))

export default useStyles;