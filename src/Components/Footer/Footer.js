// import Button from "../Button/Button";
import "./footer.css";
import {Button} from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function footer(){
    return(
        <div className="footer">
            <></>
            <Button className="button">Sign in for more access</Button>
            <br/>
            <br/>
            <div class="flex5" >
                <InstagramIcon/>
                <TwitterIcon/>
                <YouTubeIcon/>
                <FacebookIcon/>
            </div>
            <br/>
            <br/>
            <div className="flex6">
                <div className="flex7">
                    <div>Get the IMDb</div>

                </div>

                <div className="flex7">
                    <div>AppHelpSite</div>

                </div>

                <div className="flex7">
                    <div>IndexIMDbProBox</div>

                </div>

                <div className="flex7">
                    <div>Office MojoIMDb</div>

                </div>

                <div className="flex7">
                    <div>Office MojoIMDb</div>

                </div>

                <div className="flex7">
                    <div>Developer</div>

                </div>

            </div>

            <br/>
            <br/>

            <div className="flex8">

                 <div>Press Room</div>


                <div className="flex7">
                    <div>Advertising</div>
                </div>

                <div className="flex7">
                    <div>Jobs</div>
                </div>

                 <div>Conditions of Use</div>

                 <div>Privacy Policy</div>

                <div className="flex7">
                    <div>Your Ads Privacy Choices</div>
                </div>

            </div>


            <br/>
            <br/>
            <div className="footer_amazon">an Amazon Company</div>

            <br/>
            <br/>
            <div className="center1"  >© 1990-2023 by IMDb.com, Inc.</div>

        </div>
    )
}

export default footer;