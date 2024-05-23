
import React, {useEffect} from 'react';


const MyGithubRepo = () => {
    useEffect(() => {
        window.open("https://github.com/arun-prism/react-demo", "_blank", "noopener,noreferrer");
      }, []);
    
  return (<h1> You are redirected to my GitHub repo..Pls allow pop-up in your browser</h1>);
};

export default MyGithubRepo;
