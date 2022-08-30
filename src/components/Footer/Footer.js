import React from "react";
import "./Footer.css"

function Footer(props) {

  const links =[
                {
                  Name: "GitHub",
                  href: "https://github.com/TheBiggestPotato"
                }, 
                {
                  Name: "React",
                  href: "https://reactjs.org/"
                },
                {
                  Name: "Node",
                  href: "https://nodejs.org/en/"
                },
                {
                  Name: "MySql",
                  href: "https://www.mysql.com/"
                },
                {
                  Name: "Softbinator",
                  href: "https://www.softbinator.com/"
                },
              ];

    return(
        <div className="footer">
  <ul className="ul-footer">
    { links.map((link, key) => <li key={ key }><a key={ key } className="ul-footer" href={ link.href }>{ link.Name }</a></li>) }
  </ul>
</div>
    );
}

export default Footer;